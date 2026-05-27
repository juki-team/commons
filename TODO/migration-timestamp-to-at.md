# Migración: campos `*Timestamp` → `*At` (number ms)

Este documento describe el rename masivo de campos de tipo "timestamp" en
`@juki-team/commons`. La convención adoptada es: **todo campo cronológico
termina en `...At` y es `number` (epoch ms)**.

> Sin estas migraciones, los servicios que actualicen al nuevo `commons`
> dejarán de leer datos previos correctamente.

---

## 1. Mapeo de renames

### Sufijo `Timestamp` → `At`

| Antes                          | Después          | Notas                                |
|--------------------------------|------------------|--------------------------------------|
| `creationTimestamp`            | `createdAt`      |                                      |
| `createdTimestamp`             | `createdAt`      |                                      |
| `updateTimestamp`              | `updatedAt`      |                                      |
| `updatedTimestamp`             | `updatedAt`      |                                      |
| `lastModifiedTimestamp`        | `updatedAt`      | Unificado con `updatedAt`            |
| `messageTimestamp`             | `createdAt`      | Unificado con `createdAt`            |
| `validUntilTimestamp`          | `expiresAt`      | Reusa `expiresAt` existente          |
| `lastVisitTimestamp`           | `lastVisitedAt`  |                                      |
| `joinedAtTimestamp`            | `joinedAt`       | Hybrid eliminado                     |
| `testCasesUpdatedAtTimestamp`  | `testCasesUpdatedAt` | Hybrid eliminado                 |
| `startTimestamp`               | `startsAt`       | Presente (rango de tiempo)           |
| `endTimestamp`                 | `endsAt`         | Presente (rango de tiempo)           |
| `settingsStartTimestamp`       | `settingsStartsAt` |                                    |
| `frozenTimestamp`              | `frozenAt`       |                                      |
| `quietTimestamp`               | `silencedAt`     |                                      |
| `questionTimestamp`            | `askedAt`        |                                      |
| `answerTimestamp`              | `answeredAt`     |                                      |
| `startTimestamps` (typo plural) | `startsAt`      | Solo `SsmSession` en `system.ts`     |

### Cambio de tipo: `...At: Date` → `...At: number`

Todos los `createdAt`, `updatedAt`, `startedAt`, `registeredAt` que estaban
tipados como `Date` ahora son `number` (ms epoch). Afecta:

- `src/dto/file.ts`, `src/dto/worksheet.ts`, `src/dto/virtualUser.ts`
- `src/dto/system.ts` (`EcsTask`, `EcsTaskDefinition`)
- `src/types/entity.ts` (`EntityTimestampsDocument`)
- `src/types/teams.ts` (8 ocurrencias)

### Cambio de tipo: `...At: string` → `...At: number`

- `src/dto/system.ts` → `SqsProperties.createdAt` y `SqsProperties.updatedAt`
  (eran strings provenientes de la API de AWS; ahora se espera number ms).

---

## 2. Migración MongoDB

### Renombrar campos en colecciones afectadas

```js
// Ejecutar por cada colección y por cada par renombrado:
db.<collection>.updateMany(
  { creationTimestamp: { $exists: true } },
  { $rename: { creationTimestamp: 'createdAt' } }
);

db.<collection>.updateMany(
  { updateTimestamp: { $exists: true } },
  { $rename: { updateTimestamp: 'updatedAt' } }
);

// ... repetir para cada par en la tabla de mapeo
```

### Colecciones probablemente afectadas

`COMMENT`, `SESSION`, `JUDGE`, `PROBLEM`, `SUBMISSION`, `CONTEST`,
`CLASS`, `ORGANIZATION`, `ENTITY` (cualquiera con timestamps).

### Conversión de tipos (`Date` → `number` ms)

Si en Mongo los campos están almacenados como `BSON Date`, hay dos
opciones:

**Opción A — convertir a number en la DB** (consistencia total):

```js
db.<collection>.find({ createdAt: { $type: 'date' } }).forEach((doc) => {
  db.<collection>.updateOne(
    { _id: doc._id },
    { $set: { createdAt: doc.createdAt.getTime() } }
  );
});
```

**Opción B — normalizar en lectura** (más seguro a corto plazo):

Mantener `BSON Date` en disco y serializar a `number` en el mapper
DTO. Útil si otros sistemas leen la misma colección.

### Índices

Recrear cualquier índice que referencie el campo viejo:

```js
db.<collection>.dropIndex('creationTimestamp_1');
db.<collection>.createIndex({ createdAt: 1 });
```

---

## 3. Caches (Redis u otro)

- Invalidar o re-renombrar las claves dentro del JSON cacheado.
- Cualquier snapshot persistido con campos viejos será inválido.

---

## 4. Colas / mensajes en vuelo (SQS, etc.)

Mensajes encolados con `creationTimestamp` (o cualquier campo viejo)
serán rechazados por los validadores del nuevo `commons`. Acciones:

- Drenar las colas antes del despliegue, **o**
- Tolerar errores transitorios mientras se procesan los mensajes
  viejos, **o**
- Añadir un mapper de compatibilidad temporal en los consumers.

---

## 5. WebSocket payloads

`WebSocketResponse` ahora usa `createdAt` en vez de `messageTimestamp`.
Mensajes emitidos por servicios viejos con `messageTimestamp` serán
ignorados por validadores nuevos hasta que esos servicios actualicen.

---

## 6. Otros campos `*Timestamp*` no migrados (revisar caso por caso)

Los siguientes nombres **no son campos** sino nombres de tipos/interfaces;
se conservaron porque describen el shape, no un campo individual:

- `EntityTimestampsDocument` (type)
- `DocumentMemberWithTimestampsResponseDTO` (interface)
- `EntityMembersWithTimestampsResponseDTO` (interface)
- `GroupByTimestampKey` (type — discriminador de agrupamiento)

Si más adelante se decide renombrarlos por consistencia, hacerlo en una
PR separada (no requiere migración de datos).

---

## Checklist de despliegue sugerido

1. [ ] Bloquear escrituras en colecciones afectadas.
2. [ ] Drenar colas SQS / mensajes en vuelo.
3. [ ] Ejecutar `$rename` por cada par de campos en cada colección.
4. [ ] Convertir `BSON Date` → `number` ms (Opción A) o agregar mapper (B).
5. [ ] Reconstruir índices afectados.
6. [ ] Invalidar caches Redis con shapes viejos.
7. [ ] Desplegar consumidores actualizados al nuevo `commons`
       de manera sincronizada.
8. [ ] Reabrir escrituras.
9. [ ] Smoke tests: login, ping (WebSocket), lectura de problem/contest/
       submission/comment, contest startsAt/endsAt, session expiresAt.

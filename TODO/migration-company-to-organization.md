# Migración DB: `company` → `organization`

Este documento describe los cambios runtime que introdujo el rename masivo
de `company`/`Company` → `organization`/`Organization` en `@juki-team/commons`,
y las migraciones que deben ejecutarse en cada datastore para que los
**registros antiguos** sigan siendo accesibles bajo los nuevos nombres.

> Sin estas migraciones, los servicios que actualicen al nuevo `commons`
> dejarán de leer datos previos correctamente.

---

## 1. Documentos de entidades — campo `companyId` → `organizationId`

**Tipo afectado:** `EntityCompanyDocument` → `EntityOrganizationDocument`
(`src/types/entity.ts`).

Todas las colecciones que extienden `NewEntityDocument<T>` tienen el campo
`companyId` (referencia al dueño/organización).

### Colecciones probablemente afectadas (MongoDB)

`PROBLEM`, `CONTEST`, `JUDGE`, `USER`, `SUBMISSION`, `SCOREBOARD`, `FILE`,
`COMMENT`, `WORKSHEET`, `EXCALIDRAW`, `MARKDOWN`, `MERMAID`,
`COURSE`, `CLASS`, `GROUP`, etc. (cualquier colección creada con el shape
`NewEntityDocument`).

### Migración (MongoDB shell)

```js
// Para cada colección que tenga el campo companyId:
db.<collection>.updateMany(
  { companyId: { $exists: true } },
  { $rename: { companyId: 'organizationId' } }
);
```

### Índices

Si existen índices que incluyan `companyId`, recrearlos sobre `organizationId`:

```js
db.<collection>.dropIndex('companyId_1');
db.<collection>.createIndex({ organizationId: 1 });
```

Revisar también índices compuestos.

---

## 2. Comment keys — prefijo `user_company:` → `user_organization:`

**Helper afectado:** `getAssignmentUserCommentKey`
(`src/helpers/comments.ts`).

### Antes

```
class:K|cycle:C|session:S|assignment:A|user_nickname:N|user_company:ORG
```

### Después

```
class:K|cycle:C|session:S|assignment:A|user_nickname:N|user_organization:ORG
```

### Migración

Si la `key` se persiste como identificador del comentario (campo `_id` /
`key` en la colección `COMMENT`):

```js
db.comments.find({ key: /\|user_company:/ }).forEach((doc) => {
  db.comments.updateOne(
    { _id: doc._id },
    { $set: { key: doc.key.replace('|user_company:', '|user_organization:') } }
  );
});
```

Si la key se usa también dentro del campo `content` o como referencia
cruzada en otras colecciones, ejecutar el mismo `replace` ahí.

---

## 3. ErrorCode strings — `*_COMPANY*` → `*_ORGANIZATION*`

**Enum afectado:** `ErrorCode` (`src/enums/manual/ErrorCode.ts`).

Los **valores string** cambiaron, no solo los nombres TS:

| Antes (valor string)                          | Después (valor string)                              |
|-----------------------------------------------|-----------------------------------------------------|
| `INTERNAL_SERVER_ERROR_ON_COMPANY_SERVICE`    | `INTERNAL_SERVER_ERROR_ON_ORGANIZATION_SERVICE`     |
| `COMPANY_NOT_CREATED`                         | `ORGANIZATION_NOT_CREATED`                          |
| `COMPANY_NOT_FOUND`                           | `ORGANIZATION_NOT_FOUND`                            |
| `COMPANY_NOT_UPDATED`                         | `ORGANIZATION_NOT_UPDATED`                          |
| `COMPANY_NOT_DELETED`                         | `ORGANIZATION_NOT_DELETED`                          |
| `NOT_ALLOWED_TO_CREATE_COMPANY`               | `NOT_ALLOWED_TO_CREATE_ORGANIZATION`                |
| `NOT_ALLOWED_TO_VIEW_COMPANY`                 | `NOT_ALLOWED_TO_VIEW_ORGANIZATION`                  |
| `NOT_ALLOWED_TO_UPDATE_COMPANY`               | `NOT_ALLOWED_TO_UPDATE_ORGANIZATION`                |
| `NOT_ALLOWED_TO_DELETE_COMPANY`               | `NOT_ALLOWED_TO_DELETE_ORGANIZATION`                |

### Acciones

- **Frontend**: actualizar cualquier `switch` / mapping de mensajes de error
  que compare contra los strings antiguos.
- **Backend**: si los códigos de error se persisten en logs/auditoría/eventos
  con la cadena cruda, considerar normalizarlos en lectura
  (`COMPANY_*` → `ORGANIZATION_*`) o migrar:

  ```js
  db.error_logs.updateMany(
    { code: 'COMPANY_NOT_FOUND' },
    { $set: { code: 'ORGANIZATION_NOT_FOUND' } }
  );
  // ... repetir para cada código
  ```

---

## 4. EntityCollection — valor `'COMPANY'` → `'ORGANIZATION'`

**Enum afectado:** `EntityCollection` (`src/enums/manual/EntityCollection.ts`).

```ts
EntityCollection.ORGANIZATION === 'ORGANIZATION'  // antes: 'COMPANY'
```

### Acciones

Si este valor se usa para resolver el nombre de una colección MongoDB o
cualquier otro identificador externo:

- **Renombrar la colección** (si aplica):

  ```js
  db.COMPANY.renameCollection('ORGANIZATION');
  ```

- **Actualizar referencias persistidas** (logs de eventos, registros de
  auditoría, cachés Redis, mensajes de SQS encolados, etc.) que guarden
  el string `'COMPANY'`:

  ```js
  db.<any_collection>.updateMany(
    { entityCollection: 'COMPANY' },
    { $set: { entityCollection: 'ORGANIZATION' } }
  );
  ```

> Drenar primero las colas SQS o aceptar que algunos mensajes en vuelo
> con `'COMPANY'` fallarán al ser procesados por código nuevo.

---

## 5. CollectionKey — clave renombrada, valor `'C'` se mantiene

**Enum afectado:** `CollectionKey` (`src/enums/manual/CollectionKey.ts`).

```ts
CollectionKey.ORGANIZATION === 'C'  // valor sin cambios
```

**No requiere migración**: el valor literal `'C'` (usado como prefijo en
IDs de entidad) se conservó intencionalmente para no invalidar IDs ya
generados. Solo cambió el nombre del miembro del enum.

---

## 6. Permisos — `userPermissions.company` → `userPermissions.organization`

**Tipo afectado:** `UserPermissionsResponseDTO`
(`src/dto/user.ts`) + constante `EMPTY_USER_PERMISSIONS`
(`src/constants/user.ts`).

### Migración (MongoDB)

Si la estructura de permisos se persiste tal cual en algún documento de
usuario, sesión o configuración:

```js
db.users.updateMany(
  { 'permissions.company': { $exists: true } },
  { $rename: { 'permissions.company': 'permissions.organization' } }
);

// Repetir para cualquier otra colección que persista UserPermissions
// (sessions, snapshots, etc.).
```

---

## 7. Otros campos `company` → `organization` en respuestas/payloads

Cualquier endpoint o evento que serializaba un campo `company` ahora lo
emite como `organization`. Esto afecta:

- DTOs de `User`, `Problem`, `Contest`, `Submission`, `Session`, `UserPing`,
  `UserRank`, etc.
- Campo `trustedCompanies` → `trustedOrganizations` en `OrganizationResponseDTO`.
- Campo `isHighRunnerCompanyKeys` → `isHighRunnerOrganizationKeys` en DTOs
  de ECS.

### Acciones

- **Frontend / consumidores REST**: actualizar lectura de `data.company`
  → `data.organization` en todos los puntos donde se desserializa.
- **Caches** (Redis u otro): si guardan respuestas serializadas con la
  forma vieja, invalidar o re-renombrar las claves dentro del JSON.
- **WebSocket payloads** (`UserMessageWebSocketResponseEventDTO`, etc.):
  los validadores ya esperan `user.organization.key`. Cualquier mensaje
  emitido por servicios viejos con `user.company.key` será rechazado
  hasta que también actualicen.

### Migración persistida (si aplica)

Para colecciones que guarden snapshots de DTOs:

```js
db.<collection>.updateMany(
  { company: { $exists: true } },
  { $rename: { company: 'organization' } }
);

db.organizations.updateMany(
  { trustedCompanies: { $exists: true } },
  { $rename: { trustedCompanies: 'trustedOrganizations' } }
);
```

---

## 8. Constantes renombradas (no requieren migración DB)

| Antes                    | Después                       |
|--------------------------|-------------------------------|
| `JUKI_APP_COMPANY_KEY`   | `JUKI_APP_ORGANIZATION_KEY`   |
| `COMPANY_PLAN`           | `ORGANIZATION_PLAN`           |
| `constants/company.ts`   | `constants/organization.ts`   |

El **valor** `'juki-app'` se mantiene; solo cambia el nombre del símbolo.

---

## Checklist de despliegue sugerido

1. [ ] Bloquear escrituras (modo lectura) en colecciones afectadas.
2. [ ] Drenar colas SQS / mensajes en vuelo.
3. [ ] Ejecutar migraciones MongoDB (`$rename` de campos, opcional rename
       de colección `COMPANY` → `ORGANIZATION`).
4. [ ] Migrar comment keys (`user_company:` → `user_organization:`).
5. [ ] Migrar logs de errores con códigos `COMPANY_*` (opcional).
6. [ ] Migrar `permissions.company` → `permissions.organization` en
       documentos de usuario / sesión.
7. [ ] Reconstruir índices afectados.
8. [ ] Desplegar servicios consumidores actualizados al nuevo `commons`
       de manera sincronizada.
9. [ ] Reabrir escrituras.
10. [ ] Smoke tests: ping, login, lectura de problema, contest, submission,
        comentarios sobre asignaciones.

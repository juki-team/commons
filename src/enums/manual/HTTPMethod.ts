export const HTTPMethod = {
  POST: 'POST',
  GET: 'GET',
  PUT: 'PUT',
  PATCH: 'PATCH',
  DELETE: 'DELETE',
} as const;

export type HTTPMethod = (typeof HTTPMethod)[keyof typeof HTTPMethod];

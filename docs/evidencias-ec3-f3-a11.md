# Evidencias EC3 F3 A11

## Entorno
- Rama: ec3-a11-autenticacion
- React: 19
- React Router: 7.18.4
- URL local del Frontend: http://localhost:5173
- URL local del Backend: http://localhost:3000

## Casos
| Caso | HTTP | Resultado | Evidencia |
|---|---:|---|---|
| Registro válido | 201 | OK | Funciona |
| Correo duplicado | 409 | OK | Funciona |
| Login inválido | 401 | OK | Funciona |
| Login válido | 200 | OK | Funciona |
| /auth/me | 200 | OK | Funciona |
| /tasks sin token | 401 | OK | Funciona |
| CRUD con user | 2xx | OK | Funciona |
| DELETE con user | 403 | OK | Funciona |
| DELETE con admin | 204 | OK | Funciona |
| Token alterado | 401 | OK | Funciona |

## Rutas y sesión
- Redirección a login: Funciona
- Recuperación de la ruta intentada: Funciona
- Restauración después de recargar: Funciona
- Cierre y botón Atrás: Funciona

## Calidad
- pnpm lint: Sin errores
- pnpm build: Sin errores
- Consola del navegador: Limpia

## Protección de datos
Confirmo que las evidencias no muestran contraseñas,
tokens completos, JWT_SECRET ni MONGODB_URI.

# Administrador de tareas Frontend

SPA desarrollada con React, TypeScript, Vite,
React Router y Fetch API.

## Funciones actuales
- Registro e inicio de sesión.
- Restauración de identidad con /api/auth/me.
- Rutas públicas y protegidas.
- CRUD remoto de tareas.
- Búsqueda, filtros, ordenamiento y paginación.
- Eliminación disponible para admin.
- Manejo de carga, vacío, error, 401 y 403.

## Rutas
- `/`
- `/login`
- `/register`
- `/tasks` protegida
- `/tasks/:taskId` protegida
- `/profile` protegida

## Variables
```env
VITE_API_URL=/api
```

## Ejecución
```bash
pnpm install
pnpm dev
```
La API debe ejecutarse en el puerto configurado por
el proxy de Vite.

## Seguridad didáctica
El access token se conserva en sessionStorage para
practicar restauración dentro de la pestaña. No se
almacenan contraseñas ni se imprimen tokens. La API
mantiene la autenticación y autorización reales.

## Validación
```bash
pnpm lint
pnpm build
```

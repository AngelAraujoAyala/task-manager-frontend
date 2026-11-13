# Administrador de tareas Frontend

SPA con React, TypeScript, Vite y React Router.
Consume una API REST protegida mediante JWT Bearer.

## Funciones

- Registro, login, restauración y logout.
- Rutas públicas y protegidas.
- CRUD remoto de tareas.
- Búsqueda, filtros, orden y paginación.
- Detalle por identificador.
- Permisos user y admin.
- Pruebas automatizadas y despliegue estático.

## Estructura relevante

- `src/test/`: pruebas de sesión, guardas, cliente HTTP y formulario de acceso.
- `scripts/smoke-production.mjs`: prueba de humo del sitio y la API publicados.
- `render.yaml`: blueprint del sitio estático y reescritura de la SPA.

## Instalación

```bash
pnpm install --frozen-lockfile
```

## Desarrollo

1. Copiar `.env.example` como `.env.local`.
2. Confirmar `VITE_API_URL=/api`.
3. Iniciar el Backend en `localhost:3000`.
4. Ejecutar `pnpm dev`.

El proxy de Vite reenvía `/api` al Backend durante el desarrollo.

## Verificación

```bash
pnpm verify
```

Ejecuta `lint`, las pruebas con Vitest y el build de producción.

```bash
pnpm test
pnpm test:watch
```

## Producción

- Frontend: URL_FRONTEND
- API: URL_BACKEND
- Versión: 1.0.0

`VITE_API_URL` debe ser una URL HTTPS terminada en `/api`. El sitio se publica
como estático desde `dist` y las rutas profundas se reescriben hacia
`/index.html`. La prueba de humo se ejecuta con:

```bash
pnpm smoke:production
```

Consulta `docs/deployment-configuration.md` y `docs/release-checklist.md`.

## Seguridad didáctica

El access token se conserva en `sessionStorage` para practicar la restauración
de identidad. HTTPS protege el transporte, pero no vuelve inaccesible el token
para JavaScript. La autenticación y autorización reales permanecen en la API.
`VITE_API_URL` es pública porque queda dentro del bundle; nunca debe contener
secretos.

# Administrador de tareas - Frontend

Aplicación desarrollada con React, TypeScript, Vite y PNPM.

## Alcance actual

La aplicación administra una colección local de tareas mediante
estado de React. Actualmente permite:

- Registrar tareas.
- Consultar la colección.
- Completar y reabrir tareas.
- Editar títulos.
- Cancelar una edición.
- Eliminar con confirmación.
- Calcular el resumen automáticamente.
- Mostrar una colección vacía.

Los cambios permanecen en memoria y se reinician al recargar.

## Operaciones CRUD

- Create: registro mediante el formulario.
- Read: renderizado de la colección.
- Update: cambio de estado y edición.
- Delete: eliminación confirmada.

## Validación

```bash
pnpm lint
pnpm build
```
s
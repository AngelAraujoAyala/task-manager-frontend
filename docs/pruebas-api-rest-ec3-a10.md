# Pruebas de API REST - EC3 F2 A10

## Entorno
- Rama: feature/api-rest-crud-remoto
- Dirección pública usada por el Frontend: /api
- Resultado de pnpm build: 

## Casos ejecutados
| Caso | Método y ruta | Esperado | Obtenido | Resultado |
|---|---|---:|---:|---|
| Listar | GET /api/tasks | 200 | | |
| Crear | POST /api/tasks | 201 | | |
| Actualizar | PATCH /api/tasks/:id | 200 | | |
| Eliminar | DELETE /api/tasks/:id | 204 | | |
| Inexistente | GET /api/tasks/:id | 404 | | |
| API detenida | GET /api/tasks | Error de red | | |

## Evidencias
- Captura de la lista:
- Captura de Network:
- Captura del error y reintento:
- Observaciones:

No incluir URI, usuario ni contraseña de MongoDB Atlas.

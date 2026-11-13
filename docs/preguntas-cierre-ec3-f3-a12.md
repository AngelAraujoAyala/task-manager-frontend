# Preguntas de cierre EC3 F3 A12

## 1. ¿Qué diferencia existe entre prueba automatizada, humo y aceptación?

La prueba automatizada ejecuta un escenario controlado y compara el resultado
con lo esperado; vive en el código y puede repetirse en cada cambio. La prueba
de humo es una comprobación breve posterior al despliegue que solo confirma que
el sitio, una ruta profunda y la salud de la API responden. La aceptación es
manual: recorre los flujos reales (registro, login, CRUD, roles) contra la API y
Atlas publicados. La automatizada detecta regresiones; la de humo detecta una
liberación inaccesible; la aceptación valida el comportamiento del sistema
completo.

## 2. ¿Por qué Fetch simulado no demuestra que Atlas funciona?

Porque `vi.fn` reemplaza la función `fetch`: no sale a la red ni consulta
Express o MongoDB. Solo comprueba cómo reacciona el cliente ante respuestas
preparadas. Que Atlas esté disponible se demuestra con `/health/database` y con
la aceptación manual contra la API real.

## 3. ¿Qué comprueba una guarda y qué seguridad continúa en el Backend?

La guarda decide qué renderizar según el estado de la sesión: redirige al
anónimo, espera la validación o permite la ruta privada. Es una mejora de
experiencia, no una autorización. El Backend sigue validando el JWT, los datos
y el rol en cada solicitud; por eso un `DELETE` como `user` responde 403 aunque
la interfaz oculte el botón.

## 4. ¿Por qué VITE_API_URL es pública y JWT_SECRET no?

Vite incorpora las variables `VITE_` dentro del JavaScript del bundle, así que
cualquiera puede leerlas desde el navegador. `VITE_API_URL` solo indica una
dirección pública. `JWT_SECRET`, `MONGODB_URI` y las contraseñas viven únicamente
en el Backend porque permiten firmar tokens o acceder a la base de datos.

## 5. ¿Por qué cambiar VITE_API_URL exige otro build?

Porque Vite resuelve `import.meta.env.VITE_API_URL` durante el build y escribe
el valor en los archivos generados. No se lee en tiempo de ejecución del
navegador. Cambiar la variable sin reconstruir mantiene la URL anterior dentro
de `dist`, por eso se debe volver a compilar y desplegar.

## 6. ¿Qué función cumple la reescritura hacia index.html?

React Router resuelve las rutas en el navegador. Al recargar `/tasks` o
`/tasks/:id`, el proveedor estático no encuentra ese archivo y respondería 404.
La regla `/*` hacia `/index.html` entrega la SPA y permite que React Router
muestre, redirija o devuelva su propio 404 según la ruta.

## 7. ¿Qué diferencia existe entre build, deploy y release?

El build transforma el código en archivos estáticos dentro de `dist`. El deploy
publica esa construcción en infraestructura accesible. El release es la versión
aprobada e identificada: el commit desplegado etiquetado como `v1.0.0`, con
evidencias y checklist. Puede existir un build desplegado sin haber sido
liberado.

## 8. ¿Por qué CORS_ORIGIN debe ser exacto?

El navegador compara el origen (protocolo, host y puerto) de la página con el
permitido por la API. Un origen distinto, con `/api`, con diagonal final o un
comodín `*` no coincide con el origen real y la lectura de la respuesta se
bloquea. Debe ser `https://FRONTEND.onrender.com`, sin ruta ni diagonal.

## 9. ¿Qué diferencia existe entre 401 y 403?

401 significa que no hay identidad válida: falta el token, es ficticio o
expiró; el cliente cierra la sesión local y vuelve al login. 403 significa que
la identidad es válida pero no tiene permiso para esa operación, como un
`DELETE` con rol `user`; no debe cerrar la sesión.

## 10. ¿Por qué ocultar Eliminar no sustituye la autorización?

Porque cualquier persona puede fabricar la solicitud HTTP aunque el botón no
exista en la interfaz. La ocultación solo evita una acción accidental. La
decisión real ocurre en Express, que revisa el rol del token y responde 403
cuando corresponde.

## 11. ¿Cómo demuestras que v1.0.0 corresponde al deploy?

Comparando el mismo hash de commit en tres lugares: el que muestra Render como
desplegado, el de GitHub y el que devuelve `git show v1.0.0`. La etiqueta se
crea después de aprobar el despliegue y se publica con `git push origin
v1.0.0`, dejando la relación entre versión, evidencia y código publicado.

## 12. ¿Qué mejorarías para un sistema sensible?

Usaría cookies `HttpOnly`, `Secure` y `SameSite` para el token, agregaría
refresh tokens y recuperación de contraseña, pruebas E2E automatizadas,
propiedad de tareas por usuario y auditoría. También sumaría CSP, monitoreo,
CI con las mismas verificaciones y una gestión de secretos separada por
ambiente. Mantendría la autorización en el Backend y agregaría rate limiting.

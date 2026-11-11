# Preguntas de cierre - EC3 F2 A10

## 1. ¿Qué diferencia existe entre una falla de red y una respuesta HTTP 404?
Una falla de red ocurre cuando no hay comunicación con el servidor (ej. servidor apagado o DNS fallido), mientras que una respuesta 404 es una respuesta válida del servidor indicando que el recurso solicitado no fue encontrado.

## 2. ¿Por qué debe comprobarse response.ok después de fetch?
Porque `fetch` solo rechaza la promesa ante problemas de red. Errores HTTP como 404 o 500 se consideran respuestas exitosas (promesas resueltas), por lo que es necesario verificar `response.ok` (o `response.status`) para identificar errores lógicos o del servidor.

## 3. ¿Qué responsabilidad tiene http.service.ts?
Centralizar la configuración de peticiones Fetch (encabezados, JSON, conversión de errores HTTP a excepciones manejables).

## 4. ¿Qué responsabilidad tiene task.api.service.ts?
Definir los métodos específicos de la API de tareas (listar, crear, actualizar, eliminar), incluyendo la construcción de rutas y parámetros de consulta.

## 5. ¿Por qué VITE_API_URL no debe contener credenciales?
Porque Vite expone las variables `VITE_*` al código del navegador, haciéndolas visibles para cualquier usuario que inspeccione la aplicación.

## 6. ¿Qué problema resuelve el proxy de Vite durante el desarrollo?
Evita problemas de CORS al redirigir las solicitudes locales (ej. `/api`) hacia el servidor del backend (ej. `localhost:3000`).

## 7. ¿Por qué el proxy no sustituye la configuración de producción?
Porque el proxy es una funcionalidad del servidor de desarrollo de Vite, no está presente en un servidor estático de producción donde el frontend y el backend deben gestionarse independientemente mediante CORS adecuado.

## 8. ¿Qué función cumple AbortController?
Permite cancelar solicitudes HTTP en curso cuando ya no son necesarias (ej. cuando el usuario cambia filtros rápidamente y la solicitud anterior queda obsoleta).

## 9. ¿Por qué la ruta de detalle consulta la tarea por id?
Para asegurar que la aplicación obtenga el estado más reciente y preciso del recurso, independientemente de si la tarea ya estaba cargada en la lista principal o no.

## 10. ¿Por qué el formulario se limpia únicamente después de un POST satisfactorio?
Para asegurar que si la solicitud falla (ej. error de validación en el servidor o problema de red), el usuario no pierda el contenido que intentó enviar y pueda reintentar sin volver a escribir todo.

## 11. ¿Qué ventaja ofrece separar la consulta remota de los componentes visuales?
Facilita la reutilización de la lógica, permite un mantenimiento independiente (cambios en la API no afectan directamente a los componentes) y mejora la testabilidad.

## 12. ¿Qué cambio fue más difícil y cómo comprobaste que funcionaba?
El cambio más complejo fue la integración de `AbortController` y el manejo de estados asíncronos en el hook `useTaskList`, debido a la necesidad de coordinar el estado local con los efectos secundarios de `useEffect`. Lo comprobé observando la pestaña Network durante interacciones rápidas y verificando que solo la respuesta de la última consulta impactara la interfaz.

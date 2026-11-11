# Preguntas de cierre - EC3 F1 A9

## 1. ¿Qué es una aplicación de página única?

Una aplicación de página única, o SPA (Single Page Application), carga un solo documento HTML al inicio y después actualiza lo que se ve en pantalla usando JavaScript. Cuando el usuario cambia de sección, la aplicación no le pide al servidor una página nueva completa: solo cambia las vistas necesarias. Esto hace la navegación más rápida y permite conservar el estado de la aplicación mientras el usuario se mueve entre páginas.

## 2. ¿Qué responsabilidad tiene BrowserRouter?

`BrowserRouter` le da a toda la aplicación el contexto de navegación y la conecta con el historial del navegador (la barra de direcciones y los botones Atrás y Adelante). Gracias a él funcionan `Routes`, `Route`, `Link`, `NavLink`, `useParams` y `useNavigate`. Se coloca una sola vez, en `main.tsx`, envolviendo a `App`, y no debe repetirse en layouts, páginas ni componentes.

## 3. ¿Cuál es la diferencia entre Routes y Route?

`Routes` es el contenedor que contiene la configuración de rutas y revisa la dirección actual para elegir cuál coincide. `Route` es cada regla individual: relaciona un `path` con el elemento (`element`) que debe mostrarse. En resumen, `Routes` decide cuál ruta se activa y cada `Route` define qué se muestra para una dirección.

## 4. ¿Qué es una ruta índice?

Es la página predeterminada de una ruta padre, la que se muestra cuando la dirección coincide exactamente con el padre y no hay una ruta hija más específica. Se declara con la propiedad `index` en lugar de `path`. En este proyecto corresponde a la dirección raíz `/` y muestra `HomePage` dentro del layout.

## 5. ¿Qué beneficio ofrece un layout?

Un layout concentra la estructura que se repite en todas las páginas, como el encabezado, el menú de navegación y el pie de página. Se escribe una sola vez y se reutiliza, así evito código duplicado y si necesito cambiar algo del diseño general solo lo modifico en un lugar. Además, el encabezado y el menú no se vuelven a crear cada vez que cambio de página.

## 6. ¿Qué función cumple Outlet?

`Outlet` indica la posición dentro del layout donde React Router debe dibujar la página hija que corresponde a la dirección actual. Es como un espacio reservado: en `/` se llena con `HomePage`, en `/tasks` con `TasksPage` y en `/tasks/:taskId` con `TaskDetailPage`. Si se olvida, el layout aparece pero ninguna página se muestra.

## 7. ¿Qué diferencia existe entre Link y NavLink?

Ambos permiten navegar a una dirección interna sin recargar la página completa. La diferencia es que `NavLink` además sabe si su ruta está activa y expone esa información (`isActive`), lo que permite resaltar visualmente la opción actual del menú. Por eso se usa `NavLink` en el menú de navegación y `Link` en enlaces normales del contenido, como "Ver detalle" o "Regresar al inicio".

## 8. ¿Por qué no se utilizan enlaces a para navegar internamente?

Porque un enlace `<a href>` tradicional hace que el navegador solicite y cargue un documento HTML completo, lo que recarga toda la aplicación y hace que React pierda su estado en memoria. `Link` y `NavLink` interceptan el clic, cambian la URL usando el historial del navegador y dejan que React Router renderice la nueva vista sin recargar, conservando la experiencia fluida de una SPA.

## 9. ¿Qué representa :taskId?

Representa una parte variable de la dirección. Con la ruta `tasks/:taskId`, el texto que aparezca después de `/tasks/` puede ser cualquiera y se recibe con el nombre `taskId`. Gracias a esto una sola ruta sirve para todas las tareas, sin tener que crear una ruta distinta por cada objeto.

## 10. ¿Cómo se recupera un parámetro dinámico?

Con el hook `useParams`. Por ejemplo: `const { taskId } = useParams<{ taskId: string }>();`. El nombre que se desestructura debe coincidir exactamente con el que se escribió después de los dos puntos en la ruta; si no coincide, el valor será `undefined`. Con ese valor se busca la tarea correspondiente en la colección usando `find`.

## 11. ¿Cuándo debe utilizarse useNavigate?

Cuando hay que cambiar de dirección desde el código, como resultado de una acción y no porque el usuario haga clic en un enlace. En esta actividad se usa después de eliminar una tarea desde su detalle: como esa dirección ya no representa un recurso válido, se llama a `navigate('/tasks', { replace: true })` para regresar a la lista. La opción `replace` sustituye la entrada actual del historial para que el botón Atrás no regrese al detalle de una tarea eliminada.

## 12. ¿Qué función cumple la ruta \*?

Es la ruta de captura general. Coincide con cualquier dirección que no corresponda a otra ruta definida, y por eso se coloca al final. En este proyecto muestra `NotFoundPage`, que informa al usuario que la página no existe y le ofrece un enlace para regresar al inicio, en lugar de dejar la pantalla en blanco.

## 13. ¿Por qué el estado continúa administrado por App?

Porque `App` es el componente que está por encima de todas las páginas y no se desmonta cuando cambia la ruta. Las páginas sí se crean y se destruyen al navegar, así que si cada una tuviera su propia colección de tareas, los datos se perderían o quedarían desincronizados. Al mantener el estado en `App` y pasar datos y funciones por propiedades, existe una única fuente de verdad: las tareas, la búsqueda, el filtro y el orden se conservan al moverme entre Inicio, Tareas y Detalle.

## 14. ¿Por qué localStorage permanece en esta actividad?

Porque el objetivo de esta actividad es organizar la navegación y la estructura de la aplicación, no cambiar de dónde provienen los datos. Si se cambiara también el almacenamiento, sería difícil saber si un error viene del enrutamiento o de la persistencia. Con `localStorage` las tareas siguen sobreviviendo a las recargas, y la integración con la API REST se hará después, en la Actividad 10, sobre una estructura de rutas ya estable.

## 15. ¿Qué dificultad encontraste y cómo la resolviste?

Una de las dificultades fue entender cómo se relacionan el layout, `Outlet` y las rutas anidadas, es decir, por qué las páginas se dibujan dentro del layout sin que este sepa cuál es la página activa. Lo resolví leyendo cómo está armado el bloque `Routes` en `App.tsx`: la ruta de layout no tiene `path` y envuelve a las rutas hijas, y `Outlet` es el lugar donde se muestra la hija seleccionada. Otra dificultad fue que el tipo de `onDeleteTask` debía ser `boolean` en `TaskItem`, `TaskList` y las páginas; lo corregí ajustando las interfaces de cada componente. Por último, tuve que cuidar que el nombre del parámetro en `useParams` coincidiera con `:taskId` en la ruta.

> Nota: esta última respuesta es de ejemplo. Sustitúyela por la dificultad real que tuviste, para que la explicación sea realmente tuya.

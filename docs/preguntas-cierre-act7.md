# Preguntas de cierre - EC2 F2 A7

## 1. ¿Qué diferencia existe entre una variable local y el estado de React?

Una variable local se crea de nuevo en cada renderizado, por lo que pierde su valor, y cambiarla no avisa a React para que actualice la pantalla. El estado, en cambio, es memoria que React conserva entre renderizados. Cuando se modifica con su función `set`, React vuelve a renderizar el componente y la interfaz refleja el nuevo valor.

## 2. ¿Qué valores devuelve useState?

Devuelve un arreglo con dos elementos: el valor actual del estado y una función para solicitar un nuevo valor. Por ejemplo, en `const [tasks, setTasks] = useState<Task[]>(...)`, `tasks` es la colección actual y `setTasks` es la función que permite actualizarla.

## 3. ¿Por qué useState se declara en el nivel superior del componente?

React identifica cada Hook por el orden en que se llama en cada renderizado. Si un Hook se declarara dentro de un `if`, un bucle o una función anidada, ese orden podría cambiar entre renderizados y React asociaría los valores al estado equivocado. Declararlo en el nivel superior garantiza que siempre se ejecute en el mismo orden.

## 4. ¿Qué significa que un campo sea controlado?

Significa que el valor que muestra el campo viene del estado de React y no del propio navegador. El atributo `value` toma su dato del estado y el evento `onChange` lo actualiza en cada cambio. Así, el estado y lo que se ve en el campo siempre coinciden, y React puede, por ejemplo, limpiar el campo con `setTitle('')`.

## 5. ¿Por qué handleSubmit utiliza preventDefault?

Porque el comportamiento por defecto de un formulario HTML es recargar la página al enviarse. Esa recarga reiniciaría la aplicación y se perdería el estado. Con `event.preventDefault()` se evita esa recarga y React puede procesar el envío con su propia lógica.

## 6. ¿Cómo comunica TaskForm una nueva tarea a App?

Mediante una función recibida por props llamada `onAddTask`. Cuando el usuario envía el formulario, `TaskForm` ejecuta `onAddTask(normalizedTitle)` y le pasa el título. `App` es quien define esa función (`handleAddTask`), crea la tarea completa y actualiza el estado. El formulario solo avisa qué ocurrió; no sabe dónde ni cómo se guardan las tareas.

## 7. ¿Por qué App funciona como fuente de verdad?

Porque la colección de tareas se guarda una sola vez, en el estado de `App`. Los demás componentes (`TaskList`, `TaskSummary`) reciben ese mismo arreglo por props y solo lo leen. Al no existir copias duplicadas, no hay que sincronizar nada: cuando el estado de `App` cambia, todos los componentes se actualizan con la misma información.

## 8. ¿Cómo se implementa Create sin utilizar push?

Se crea un arreglo nuevo con spread: `setTasks((currentTasks) => [newTask, ...currentTasks])`. Este arreglo contiene la tarea nueva al inicio y una copia de todas las anteriores. `push` modificaría el arreglo original, y React no detectaría el cambio porque la referencia seguiría siendo la misma.

## 9. ¿Cómo permite map actualizar una sola tarea?

`map` recorre todas las tareas y devuelve un arreglo nuevo. Dentro, se compara el `id` de cada tarea con el `id` buscado: si no coincide, se devuelve la tarea sin cambios; si coincide, se devuelve una copia modificada con `{ ...task, status: ..., updatedAt: now }`. Así solo cambia la tarea seleccionada y se conservan el resto de sus propiedades, como `id` y `createdAt`.

## 10. ¿Cómo utiliza filter la operación Delete?

`filter` crea un arreglo nuevo que contiene solo los elementos que cumplen una condición. Para eliminar se usa `currentTasks.filter((task) => task.id !== id)`, que conserva todas las tareas cuyo `id` es distinto al seleccionado. La tarea con el `id` indicado no cumple la condición y por eso queda fuera, sin modificar el arreglo original.

## 11. ¿Por qué se emplea una función actualizadora en setTasks?

Porque el nuevo estado depende del estado anterior (por ejemplo, agregar una tarea a la lista existente). Al pasar una función, React le entrega el valor pendiente más reciente como `currentTasks`, lo que evita trabajar con un valor desactualizado si hay varias actualizaciones seguidas.

## 12. ¿Qué información conserva TaskItem como estado local?

Conserva únicamente información temporal de la edición: `isEditing`, que indica si la tarjeta está en modo edición, y `draftTitle`, que guarda el borrador del título mientras el usuario escribe. Estos datos solo importan a esa tarjeta, por eso no se suben a `App`. La colección de tareas sí permanece en `App`.

## 13. ¿Por qué los cambios desaparecen al recargar la página?

Porque el estado de React vive en la memoria de la página mientras está abierta. Al recargar, el navegador vuelve a ejecutar JavaScript desde cero y `useState` se inicializa otra vez con las tareas iniciales de `src/data/tasks.ts`. Todavía no se usa `localStorage` ni una API REST que guarden los datos de forma persistente, por lo que este comportamiento es el esperado en esta actividad.

## 14. ¿Qué dificultad encontraste y cómo la resolviste?

Escribe aquí tu respuesta personal. Ejemplo para adaptar: "Al principio, al usar `onClick={() => onToggleStatus(id)}` no entendía por qué necesitaba una función flecha. Comprendí que si escribía `onClick={onToggleStatus(id)}` la función se ejecutaba al renderizar y no al hacer clic, así que la flecha sirve para pasar la función sin ejecutarla hasta que ocurra el evento."

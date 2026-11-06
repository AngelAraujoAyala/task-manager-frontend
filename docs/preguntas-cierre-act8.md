# Preguntas de cierre EC2 F3 A8

## 1 ¿Por qué las reglas de validación se colocaron en una utilidad?

Porque la misma regla se necesita en dos lugares: el formulario de registro y la edición de una tarea. Si estuviera escrita dentro de cada componente, tendría que mantenerla duplicada y podrían volverse distintas con el tiempo. Al dejarla en `validateTaskTitle`, la regla vive en un solo archivo, se reutiliza y si cambia (por ejemplo el mínimo de caracteres) se modifica en un solo punto.

## 2 ¿Qué significa el retorno string o null de validateTaskTitle?

Significa que la función devuelve un mensaje de texto cuando el título tiene un problema, o `null` cuando el título es válido. De esta forma, quien la usa debe revisar el resultado: si hay mensaje, lo muestra y detiene la operación; si es `null`, continúa. TypeScript obliga a considerar ambos casos.

## 3 ¿Qué función cumplen aria-invalid, aria-describedby y role alert?

Son atributos de accesibilidad. `aria-invalid` indica a las tecnologías de apoyo que el valor del campo no es válido. `aria-describedby` enlaza el campo con los elementos que lo describen (el texto de ayuda y el mensaje de error), para que un lector de pantalla los lea junto con el campo. `role="alert"` hace que el mensaje de error se anuncie automáticamente en cuanto aparece, sin que el usuario tenga que buscarlo.

## 4 ¿Por qué query, filter y sortBy son estados controlados?

Porque su valor lo guarda React en el estado de `App` y los controles (input y selects) solo lo muestran y avisan cuando cambia. Así React es la única fuente de verdad: lo que se ve en pantalla siempre coincide con el estado, y `App` puede usar esos valores para calcular la vista y para limpiar los criterios con un botón.

## 5 ¿Por qué visibleTasks no debe almacenarse como estado independiente?

Porque se puede calcular en cada renderizado a partir de `tasks`, `query`, `filter` y `sortBy`. Si lo guardara como estado tendría dos colecciones que sincronizar y podrían quedar inconsistentes (por ejemplo, editar una tarea en `tasks` y que `visibleTasks` mostrara la versión vieja). Un dato derivado se calcula, no se guarda.

## 6 ¿Cómo se normaliza una búsqueda?

Se eliminan los espacios al inicio y al final con `trim()` y se convierte el texto a minúsculas con `toLocaleLowerCase('es-MX')`. El título de cada tarea se convierte igual antes de compararlo con `includes`. Así "Programar", "programar" y " PROGRAMAR " producen la misma coincidencia.

## 7 ¿Por qué se crea una copia antes de utilizar sort?

Porque `sort` modifica el arreglo sobre el que se ejecuta. Si ordenara directamente el arreglo del estado estaría mutándolo, lo cual va contra las reglas de React y puede causar errores y renderizados incorrectos. Con `[...filteredTasks].sort(...)` se ordena una copia y la colección original queda intacta.

## 8 ¿Qué responsabilidad tiene task-query.service.ts?

Se encarga de transformar los datos para la consulta: busca por título, filtra por estado y ordena según el criterio elegido, devolviendo un arreglo nuevo. No conoce componentes ni modifica el estado; solo recibe datos y devuelve datos, lo que lo hace fácil de reutilizar y probar.

## 9 ¿Por qué el resultado de JSON.parse se trata como unknown?

Porque `JSON.parse` puede devolver cualquier estructura y el contenido de `localStorage` pudo ser modificado por el usuario o estar corrupto. Tratarlo como `unknown` obliga a comprobar su forma antes de usarlo, en lugar de confiar a ciegas en que es un `Task[]`, lo que evitaría errores en tiempo de ejecución.

## 10 ¿Qué comprueba la función isTask?

Comprueba que el valor sea un objeto y que tenga todos los campos de una tarea con el tipo correcto: `id` y `title` como texto, `status` con un valor válido (`pending` o `completed`), y `createdAt` y `updatedAt` como texto que se puede interpretar como fecha. Si algún campo falta o es inválido, devuelve `false` y la app usa los datos de respaldo.

## 11 ¿Qué ventaja ofrece la inicialización diferida de useState?

Al pasar una función a `useState`, React la ejecuta solo una vez, al crear el estado. Así `loadTasks` (que lee `localStorage` y hace `JSON.parse`) no se ejecuta en cada renderizado, lo que evita trabajo innecesario.

## 12 ¿Por qué localStorage se sincroniza mediante useEffect?

Porque `localStorage` es un sistema externo a React. Guardar datos en él es un efecto secundario que debe ocurrir después de que el estado cambió, no durante el renderizado. Con `useEffect(..., [tasks])` el guardado se ejecuta únicamente cuando cambia la colección, por lo que cualquier operación CRUD queda guardada automáticamente.

## 13 ¿Por qué TaskSummary recibe tasks y TaskList recibe visibleTasks?

El resumen debe reflejar el total real de tareas (totales, pendientes y completadas) sin importar la búsqueda o el filtro activos. La lista, en cambio, solo debe mostrar los resultados de la consulta actual. Pasar `visibleTasks` al resumen haría que sus números cambiaran al filtrar, lo cual sería incorrecto.

## 14 ¿Qué información se pierde y cuál permanece al recargar?

Permanecen las tareas (creadas, editadas, con su estado y sin las eliminadas) porque se guardan en `localStorage`. Se pierden los criterios de consulta (búsqueda, filtro y orden), el borrador de edición y la página actual de la paginación, porque son estados de la interfaz que no se almacenan.

## 15 ¿Qué dificultad encontraste y cómo la resolviste?

Escribe aquí tu experiencia real. Ejemplo (cámbialo por lo que realmente te pasó): al principio la lista se ordenaba pero también cambiaba el orden del arreglo original, y me di cuenta de que estaba usando `sort` directamente. Lo resolví ordenando una copia con el operador spread. Otra dificultad fue entender por qué `loadTasks` debía devolver los datos de respaldo si el JSON era inválido; lo resolví probándolo con `localStorage.setItem('task-manager.tasks', 'dato-invalido')`.

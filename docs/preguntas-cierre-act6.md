# Preguntas de cierre - EC2 F1 A6

## 1. ¿Qué función cumple la interfaz Task?

Define la estructura que debe tener cada tarea: sus propiedades (id, title, status, createdAt, updatedAt) y el tipo de cada una. Funciona como un contrato, y TypeScript marca error si un objeto no lo cumple.

## 2. ¿Qué diferencia existe entre Task y TaskStatus?

Task es una interfaz que describe un objeto completo con varias propiedades. TaskStatus es un tipo unión que limita un solo valor, el estado, a 'pending' o 'completed'. TaskStatus se usa dentro de Task en la propiedad status.

## 3. ¿Qué significa declarar un arreglo como Task[]?

Significa que es un arreglo en el que todos los elementos deben cumplir con la interfaz Task. Si falta una propiedad o hay un tipo incorrecto, TypeScript lo reporta durante el desarrollo.

## 4. ¿Qué hace el método map?

Recorre un arreglo y devuelve uno nuevo con el resultado de transformar cada elemento, sin modificar el arreglo original.

## 5. ¿Qué resultado produce map dentro de TaskList?

Produce un arreglo de componentes TaskItem, uno por cada tarea de la colección, que React muestra en pantalla.

## 6. ¿Para qué utiliza React la propiedad key?

React la usa para identificar qué elemento visual corresponde a cada objeto de la lista. Así, cuando la lista cambia, actualiza solo lo necesario en lugar de reconstruir todo.

## 7. ¿Por qué se utiliza task.id y no el índice?

Porque task.id es único y estable, pertenece a la tarea sin importar su posición. El índice cambia si se reordenan, agregan o eliminan elementos, y eso puede hacer que React asocie mal los elementos con sus datos.

## 8. ¿Cómo se envía una tarea de TaskList a TaskItem?

Mediante una propiedad (prop). Dentro de map, TaskList escribe <TaskItem key={task.id} task={task} />, y TaskItem recibe el objeto completo como props.task.

## 9. ¿Cómo se comunican App, TaskSummary y TaskList?

App importa la colección desde data/tasks.ts y la envía como prop a TaskSummary y a TaskList. Los datos fluyen en una sola dirección, del componente padre a los hijos (flujo unidireccional).

## 10. ¿Qué es el renderizado condicional?

Es mostrar una estructura distinta según una condición. En TaskList, si tasks.length === 0 se muestra el mensaje de colección vacía; si hay tareas, se muestra la lista.

## 11. ¿Por qué el resumen se calcula a partir de la colección?

Porque son datos derivados: se obtienen de información que ya existe (tasks.length y filter por estado). Así no se escriben valores manuales que podrían quedar desactualizados, y el resumen cambia automáticamente cuando cambia la colección.

## 12. ¿Qué dificultad encontraste durante la refactorización y cómo la resolviste?

Escribe aquí una dificultad real que hayas tenido. Por ejemplo: "Al importar Task me marcaba error por la ruta; lo resolví revisando que fuera ../models/task.interface" o "Faltaba cerrar una comilla en role="list" y lo corregí al revisar el error del editor".

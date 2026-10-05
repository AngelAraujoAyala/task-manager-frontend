# Preguntas de cierre - EC2 F1 A5

## 1. ¿Qué problema resuelve React al construir una interfaz?

React permite construir interfaces dividiéndolas en piezas reutilizables llamadas componentes. Así el código es más ordenado, más fácil de mantener y evita repetir estructuras en distintas partes de la aplicación.

## 2. ¿Qué es un componente?

Es una función que devuelve la representación de una parte de la interfaz. Por ejemplo, AppHeader devuelve el encabezado de la aplicación y puede usarse dentro de otros componentes.

## 3. ¿Por qué los componentes comienzan con mayúscula?

Porque así React distingue un componente (como TaskForm) de una etiqueta HTML normal (como form). Si empieza con minúscula, React lo trata como una etiqueta del navegador y no funciona.

## 4. ¿Qué diferencia existe entre HTML y TSX?

TSX permite escribir estructura parecida a HTML dentro de TypeScript. Cambian algunos atributos (className en lugar de class, htmlFor en lugar de for), las etiquetas deben cerrarse siempre (<input />) y se pueden insertar expresiones de TypeScript entre llaves.

## 5. ¿Para qué se utiliza className?

Para asignar clases CSS a un elemento en TSX. Se usa en lugar de class porque class es una palabra reservada de JavaScript.

## 6. ¿Qué son las propiedades o props?

Son los datos que un componente padre envía a un componente hijo. Por ejemplo, TaskList envía title y status a TaskItem para que muestre tareas diferentes con la misma estructura.

## 7. ¿Cómo ayuda TypeScript a validar las propiedades?

Permite definir qué propiedades recibe un componente y de qué tipo es cada una. Si se envía un tipo incorrecto (por ejemplo, un texto en lugar de un número en TaskSummary), TypeScript marca el error antes de ejecutar la aplicación.

## 8. ¿Cuál es la responsabilidad de App.tsx?

Es el componente principal que coordina la estructura general. Importa los demás componentes y los organiza en la pantalla, sin contener el detalle de cada uno.

## 9. ¿Por qué la interfaz se dividió en varios componentes?

Para que cada archivo tenga una sola responsabilidad. Esto facilita entender, modificar y reutilizar el código, y permite corregir una parte sin afectar las demás.

## 10. ¿Por qué los botones todavía están deshabilitados?

Porque en esta actividad solo se construye la parte visual. Aún no se usan estado ni eventos, por lo que los botones no pueden realizar acciones; se activarán en actividades posteriores.

## 11. ¿Qué componente consideras más reutilizable y por qué?

TaskItem, porque con la misma estructura muestra tareas distintas. Solo cambian las propiedades title y status, y se usa tres veces en TaskList sin repetir código.

## 12. ¿Qué dificultad encontraste y cómo la resolviste?

Al principio me costó entender cómo se conectan los componentes entre sí y cómo se pasan datos mediante props. Lo resolví revisando la jerarquía de componentes (App, TaskList, TaskItem) y probando la aplicación en el navegador para ver el resultado de cada cambio.

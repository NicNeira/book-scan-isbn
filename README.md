# App WEB Para leer codigos de barras de libros

## Descripcion
El siguiente repositorio es una aplicación web intuitiva y eficaz diseñada para la lectura y gestión de códigos de barras de libros mediante la cámara del dispositivo, ya sea a través de una interfaz web o móvil. Al capturar el código de barras, la aplicación identifica el ISBN del libro, consulta una API de ISBN para obtener el título y autor del libro, y presenta estos datos en una tabla dinámica en el dashboard de la aplicación. El usuario tiene la opción de ingresar el valor del libro en una tercera columna de la tabla. A medida que se agregan más libros, la tabla se expande y permite al usuario tener una visión clara y organizada de su inventario de libros. Finalmente, los datos recopilados en la tabla se almacenan en una base de datos PostgreSQL, que se integra con un chat-bot, permitiendo a los clientes realizar consultas sobre la disponibilidad de libros en el inventario.

## Consideraciones
Este repositorio se enfoca en la creación del dashboard, la lectura de códigos de barras, la obtención del ISBN, la consulta a la API de ISBN, la generación y gestión de la tabla de título, autor y valor, y el registro de estos datos en la base de datos.

## Tecnologias utilizadas
La pila tecnológica incluye JavaScript, Vite, React para una experiencia de usuario fluida y dinámica; la biblioteca Quagga para la lectura precisa de códigos de barras; y Tailwind CSS para un diseño elegante y moderno.

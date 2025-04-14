🐾 README del Proyecto Formulario Veterinario 🐾
📋 Descripción General del Proyecto
Este proyecto es un sistema de registro veterinario que permite a los dueños de mascotas registrar a sus animales a través de un formulario web fácil de usar. El sistema valida las entradas del usuario, almacena los datos y muestra las mascotas registradas en una tabla.
🛠️ Tecnologías Utilizadas

--> HTML5
--> CSS3
--> JavaScript
--> Bootstrap 5

✨ Características

Diseño responsivo usando Bootstrap
Validación de formularios
Almacenamiento de datos en un array local
Visualización de mascotas registradas
Carga de archivos para registros de vacunación
Funcionalidad de restablecimiento del formulario

🐾 README del Proyecto Formulario Veterinario 🐾
📋 Descripción General del Proyecto
Este proyecto es un sistema de registro veterinario que permite a los dueños de mascotas registrar a sus animales a través de un formulario web fácil de usar. El sistema valida las entradas del usuario, almacena los datos y muestra las mascotas registradas en una tabla.
🛠️ Tecnologías Utilizadas

HTML5
CSS3
JavaScript
Bootstrap 5

✨ Características

Diseño responsivo usando Bootstrap
Validación de formularios
Almacenamiento de datos en un array local
Visualización de mascotas registradas
Carga de archivos para registros de vacunación
Funcionalidad de restablecimiento del formulario

🖥️ Estructura del Código
Estructura HTML
El proyecto cuenta con una estructura HTML organizada en diferentes secciones:

Encabezado (Header): Contiene la barra de navegación con enlaces a la Veterinaria Municipal y la sección de adopción.
Cuerpo principal (Body): Alberga el formulario de registro de mascotas con campos para ingresar datos del dueño y la mascota.
Sección de tabla: Muestra los registros de mascotas que han sido ingresados en el sistema.
Pie de página (Footer): Contiene información de contacto y derechos de autor.

🔍 Funciones JavaScript Clave
La funcionalidad JavaScript se centra en cuatro funciones principales:

Función validar():
Esta función se ejecuta cuando el usuario intenta enviar el formulario. Primero previene el envío automático del formulario para poder realizar validaciones. Luego verifica que todos los campos requeridos tengan información, marcando visualmente los campos válidos e inválidos con clases de Bootstrap. Si todos los campos están correctamente completados, llama a la función guardar(). En caso contrario, muestra un mensaje de alerta solicitando completar los datos requeridos.
Función guardar():
Se encarga de recopilar todos los datos ingresados en el formulario (nombre del dueño, teléfono, nombre de la mascota, tipo, edad y archivo de vacunación) y los almacena en un array llamado "datos". Cada registro se guarda como un objeto con propiedades correspondientes a cada campo del formulario. Finalmente, muestra en la consola el array actualizado con los datos.
Función limpiar():
Restablece el formulario a su estado inicial, eliminando todos los datos ingresados. También se encarga de eliminar las clases de validación visual (is-valid, is-invalid) e intenta ocultar el mensaje de éxito si está visible, aunque hay un error en esta parte del código.
Función limpiaValidacion():
Es una función auxiliar que elimina las clases de validación visual de todos los campos del formulario. Se utiliza principalmente cuando se limpia el formulario para asegurar que no queden indicadores visuales de validación.
Función verRegistros():
Esta función está incompleta en el código original. Actualmente solo verifica si hay registros en el array "datos" y muestra una alerta si no hay registros previos. Debería completarse para mostrar los registros en la tabla HTML.

🎨 Estilo CSS
El diseño visual del formulario se caracteriza por:

Un fondo con imagen personalizada que cubre toda la página
El uso de la tipografía 'Sour Gummy' para títulos y elementos destacados
Un contenedor principal semi-transparente (90% de opacidad) con bordes redondeados
Texto en colores contrastantes para facilitar la lectura
Elementos de navegación con enlaces claros y visibles

🚀 Oportunidades de Mejora

Completar la función verRegistros() - Actualmente, solo verifica si hay registros pero no los muestra en la tabla.
Añadir visualización de mensaje de éxito - El elemento de alerta existe pero no se muestra correctamente después del envío del formulario.
Añadir traducción del tipo de mascota - El formulario almacena valores numéricos (1-4) para los tipos de mascota, pero debería mostrar texto (Perro, Gato, etc.) en la tabla.
Implementar almacenamiento local - Los datos se almacenan actualmente en memoria y se pierden al actualizar la página. El uso de localStorage permitiría persistir los datos.
Corregir error display('none') - En la función limpiar(), hay una llamada incorrecta al método: document.getElementById('success-message').style.display('none') debería ser document.getElementById('success-message').style.display = 'none'.

📝 Uso

Completa el formulario de registro de mascotas con la información requerida
Sube el registro de vacunación si está disponible
Haz clic en "Enviar" para enviar el formulario
Visualiza las mascotas registradas en la tabla de abajo
Usa "Limpiar" para restablecer el formulario para una nueva entrada

👤 Autor
Giorthy López
🏥 Clínica Veterinaria Municipal

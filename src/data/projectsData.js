export const projectsDataEng = [
    {
        title: 'Recreation of Landing Page from a Mockup',
        stack: 'HTML - CSS',
        description: [
            "This project was part of a frontend course, where we were given a mockup of a landing page and challenged to build a website consistent with this design. The website was to consist of 4 to 5 pages and we were allowed to use only HTML and CSS. It didn't need to be responsive but had to work on desktop environments. Additionally, we were encouraged to consider accessibility and semantics in the website's construction."
        ],
        objectives: [
            "Maintain fidelity to the provided mockup.",
            "Ensure a semantic and accessible structure.",
            "Create visually pleasing content based on the mockup."
        ],
        keyLearnings: "Through this project, I gained a deeper understanding of the importance of semantics and accessibility in web development.",
        notes: null,
        images:[
            {
                src:"/img/project1/p1image1.png",
                alt:"Landing page section of the project"
            },
            {
                src:"/img/project1/p1image2.png",
                alt:"Landing page of the project"
            },
            {
                src:"/img/project1/p1image3.png",
                alt:"Contact us page of the project"
            },
            {
                src:"/img/project1/p1image4.png",
                alt:"Sign in page of the project"
            }
        ],
        projectURL:"https://cegs0612.github.io/webPageSample/"
    },
    {
        title: 'Interactive Calculator with HTML, CSS, and JavaScript',
        stack: 'HTML - CSS - JavaScript',
        description: [
            'This project involved creating a calculator using HTML, CSS, and JavaScript. It was part of a frontend course and challenged us to design a functional calculator that provided basic operations while maintaining visually pleasing design. The calculator had to behave as expected, avoiding errors in its functionality. Special emphasis was placed on preventing errors in handling mathematical operations, especially with decimal numbers.'
        ],
        objectives:[
            'Design a functional and visually appealing calculator.',
            'Implement basic mathematical operations accurately.',
            'Ensure correct behavior and error prevention, especially with decimal numbers.',
        ],
        keyLearnings:'This project allowed me to learn how to prevent errors in handling mathematical operations, providing valuable experience in developing interactive interfaces.',
        notes:null,
        images:[
            {
                src:"/img/project2/p2image1.png",
                alt:"calculator display"
            },
            {
                src:"/img/project2/p2image2.png",
                alt:"calculator and keyboard shortcuts display"
            },
            {
                src:"/img/project2/p2image3.png",
                alt:"calculator with some operations"
            },
        ],
        projectURL:'https://cegs0612.github.io/calculator/'
    },
    {
        title: 'Beethoven Sonatas Blog',
        stack: 'ReactJS - NodeJS - Express - MySQL',
        description: [
            "This was my first React project. It's a small blog dedicated to Beethoven's sonatas, featuring his biography and a catalog of his 32 sonatas, with the option to download sheet music. This project is responsive and can be displayed both in desktop and tablets and phones enviroments. On the Frontend, I utilized ReactJS, the React router for page navigation, Axios for communication with the Backend, and JS file downloader for PDF downloads and Framer-Motion for small animations. On the Backend, I used Express, Body-parser, Cors, and MySQL for database connectivity, with environment variables for credentials."
        ],
        objectives:[
            'Properly utilize React components and hooks.',
            'Implement reusable components and map them.',
            'Work with a relational database.',
            'Establish connections between the frontend, backend, and the database.'
        ],
        keyLearnings:'This project provided me with a better understanding of React and the skills needed to connect the frontend and backend, process incoming data, and leverage external libraries. ',
        notes:[
            "Sometimes, the server may experience delays in delivering the necessary catalog data. In such cases, a brief wait and retry may be required. This issue is attributed to the hosting service of the database."
        ],
        images:[
            {
                src:"/img/project3/p3image1.png",
                alt:"landing page of the blog, desktop version"
            },
            {
                src:"/img/project3/p3image2.png",
                alt:"biography page of the blog, desktop version"
            },
            {
                src:"/img/project3/p3image3.png",
                alt:"catalog page of the blog, desktop version"
            },
            {
                src:"/img/project3/p3image4.png",
                alt:"landing page of the blog, phone version"
            },
            {
                src:"/img/project3/p3image5.png",
                alt:"landing page of the blog and menu displayed, phone version"
            },
            {
                src:"/img/project3/p3image6.png",
                alt:"biography page of the blog, phone version"
            },
            {
                src:"/img/project3/p3image7.png",
                alt:"catalog page of the blog, phone version"
            },
        ],
        projectURL: 'https://blog-beethoven-sonatas.onrender.com/'
    },
    {
        title: 'Hangman Game',
        stack: 'ReactJS - Third party API',
        description: [
            "This project is an interactive hangman game designed for desktop enviroments. To play, a request is made to an external API to receive a random word in English. It's important to note that this project doesn't require a backend and is built using ReactJS for the frontend, Axios for handling API requests, and Framer-Motion for animations. "
        ],
        objectives:[
            'Effectively utilize an external API.',
            'Implement reusable components and map them.',
        ],
        keyLearnings:null,
        notes:null,
        images:[
            {
                src:"/img/project4/p4image1.png",
                alt:"landing page of the game"
            },
            {
                src:"/img/project4/p4image2.png",
                alt:"game display"
            },
            {
                src:"/img/project4/p4image3.png",
                alt:"game over display"
            },
            {
                src:"/img/project4/p4image4.png",
                alt:"game over, correct answer"
            },
            {
                src:"/img/project4/p4image5.png",
                alt:"you win, answer display"
            },
        ],
        projectURL: 'https://hangman-game-d5m1.onrender.com/'
    },
    {
        title: 'Sales system',
        stack: 'ReactJS - NodeJS - Express - MongoDB',
        description: [
            "This MERN Stack project was developed with the aim of working with a non-relational database. The application has been designed to manage sales in various types of stores. Two types of user profiles have been established: administrator and sales, each with specific functionalities.",
            "The administrator profile has the ability to create, edit, and delete user profiles, products, and branches. Additionally, they can generate sales reports for different branches, users, and dates. On the other hand, the sales profile allows for adding, modifying, and deleting sales records (only for the same day) and obtaining sales reports for the current day and previous dates. Both profiles have the option to change their passwords and personal information, and all reports can be exported to Excel.",
            "It's worth noting that certain data cannot be deleted to ensure the correct operation of all functionalities. If you want to test the report generation feature, we suggest trying it between March 6, 2023, and March 17, 2023.",
            "On the front-end I used libraries such as Axios for server requests, Moment for date formatting, and Table-to-excel for Excel export were used. On the back-end, Express, Mongoose, Cors, and Dotenv were employed."
        ],
        objectives:[
            'Apply MERN Stack technologies.',
            'Work with a non-relational database.',
            'Define different user profiles with their own functionalities and authorizations.',
            'Enable the export of reports to Excel.',
            'Carry out effective POST requests.'
        ],
        keyLearnings:"In this project, I perfected my ability to make various POST requests. Additionally, I achieved the customization of component displays based on the user's profile. In the backend, I gained experience in using Mongoose to extract data from the database.",
        notes:[
            "To access the application as an administrator, use the following credentials:",
            "Usuario: admin1",
            "Contraseña: admin1",
            "To access the application as a salesperson, use the following credentials:",
            "Usuario: ventas1",
            "Contraseña: ventas1"
        ],
        images:[
            {
                src:"/img/project5/p5image1.png",
                alt:"user profile page"
            },
            {
                src:"/img/project5/p5image2.png",
                alt:"landing page, log in"
            },
            {
                src:"/img/project5/p5image3.png",
                alt:"branch page"
            },
            {
                src:"/img/project5/p5image4.png",
                alt:"reports page"
            },
            {
                src:"/img/project5/p5image5.png",
                alt:"products page, add function"
            },
        ],
        projectURL: 'https://control-ventas-app.onrender.com/'
    }
]

export const projectsDataSpa = [
    {
        title: 'Recreación de Landing Page desde un Mockup',
        stack: 'HTML - CSS',

        description: [
            "Este proyecto fue parte de un curso de frontend, donde se nos proporcionó un mockup de una landing page y se nos desafió a construir un sitio web coherente con este diseño. El sitio debía consistir en 4 a 5 páginas y se nos permitió utilizar únicamente HTML y CSS. No era necesario que fuera responsivo, y sólo debía funcionar en entornos de escritorio. Además, se nos instó a considerar la accesibilidad y la semántica en la construcción del sitio."
        ],
        objectives: [
            "Mantener fidelidad con el mockup proporcionado.",
            "Garantizar una estructura semántica y accesible.",
            "Crear un contenido visualmente agradable basado en el mockup."
        ],
        keyLearnings: "Durante este proyecto, adquirí una comprensión más profunda de la importancia de la semántica y la accesibilidad en el desarrollo web.",
        notes: null,
        images:[
            {
                src:"/img/project1/p1image1.png",
                alt:"Página de inicio del proyecto"
            },
            {
                src:"/img/project1/p1image2.png",
                alt:"Página de inicio del proyecto"
            },
            {
                src:"/img/project1/p1image3.png",
                alt:"Página de contacto del proyecto"
            },
            {
                src:"/img/project1/p1image4.png",
                alt:"Página de registro del proyecto"
            }
        ],
        projectURL:"https://cegs0612.github.io/webPageSample/"
    },
    {
        title: 'Calculadora Interactiva con HTML, CSS y JavaScript',
        stack: 'HTML - CSS - JavaScript',
        description: [
            'Este proyecto consistió en la creación de una calculadora utilizando HTML, CSS y JavaScript. Fue parte de un curso de frontend y nos desafió a diseñar una calculadora funcional que proporcionara operaciones básicas y mantuviera un diseño visualmente agradable. La calculadora debía comportarse de manera esperada, evitando errores en su funcionalidad. Durante su desarrollo, se hizo especial hincapié en prevenir errores en el manejo de operaciones matemáticas, especialmente con números decimales.'
        ],
        objectives:[
            'Diseñar una calculadora funcional y visualmente atractiva.',
            'Implementar operaciones matemáticas básicas de manera precisa.',
            'Garantizar un comportamiento correcto y prevenir errores, especialmente con números decimales.',
        ],
        keyLearnings:'Este proyecto me permitió aprender a prevenir errores en el manejo de operaciones matemáticas, brindando una valiosa experiencia en el desarrollo de interfaces interactivas.',
        notes:null,
        images:[
            {
                src:"/img/project2/p2image1.png",
                alt:"display de la calculadora"
            },
            {
                src:"/img/project2/p2image2.png",
                alt:"display de la calculadora y de los atajos de teclado"
            },
            {
                src:"/img/project2/p2image3.png",
                alt:"calculadora cn algunas operaciones"
            },
        ],
        projectURL:'https://cegs0612.github.io/calculator/'
        
    },
    {
        title: 'Blog de Sonatas de Beethoven',
        stack: 'ReactJS - NodeJS - Express - MySQL',
        description: [
            "Este es mi primer proyecto de React. Se trata de un modesto blog en inglés dedicado a las sonatas de Beethoven, en el que se presenta su biografía junto con un catálogo de partituras. Este catálogo expone su colección de 32 sonatas para piano, permitiendo la descarga de las mismas. Este proyecto es responsivo y puede visualizarse tanto en entornos de escritorio como en tabletas y teléfonos móviles. En el lado del Frontend, empleé ReactJS, el enrutador de React para la navegación entre páginas, Axios para la comunicación con el Backend, y las librerías JS-File-Downloader para facilitar la descarga de archivos PDF y Framer-Motion para algunas animaciones. En el Backend, mi elección recayó en Express, Body-parser, Cors, MySQL como base de datos, y la implementación de variables de entorno para salvaguardar credenciales."
        ],
        objectives:[
            'Utilizar de manera eficiente los componentes y hooks de React.',
            'Implementar componentes reutilizables y llevar a cabo su mapeo.',
            'Trabajar con una base de datos relacional',
            'Establecer conexiones efectivas entre el frontend, el backend y la base de datos.'
        ],
        keyLearnings:'Este proyecto representó una valiosa oportunidad para adentrarme en el universo de React, aprendiendo a conectar el frontend con el backend, procesar datos entrantes y aprovechar bibliotecas externas.',
        notes:[
            "El servidor a veces tarda en pasar los datos necesarios para el catálogo, se debe esperar y si hay algún error intentar nuevamente. Esto se debe al servicio del hosting de la base de datos."
        ],
        images:[
            {
                src:"/img/project3/p3image1.png",
                alt:"página de inicio del blog, versión para escritorio"
            },
            {
                src:"/img/project3/p3image2.png",
                alt:"página de biografía del blog, versión para escritorio"
            },
            {
                src:"/img/project3/p3image3.png",
                alt:"página de catálogo del blog, versión para escritorio"
            },
            {
                src:"/img/project3/p3image4.png",
                alt:"página de inicio del blog, versión para teléfonos"
            },
            {
                src:"/img/project3/p3image5.png",
                alt:"página de inicio del blog con el menú desplegado, versión para teléfonos"
            },
            {
                src:"/img/project3/p3image6.png",
                alt:"página de biografía del blog, versión para teléfonos"
            },
            {
                src:"/img/project3/p3image7.png",
                alt:"página de catálogo del blog, versión para teléfonos"
            },
        ],
        projectURL: 'https://blog-beethoven-sonatas.onrender.com/'
    },
    {
        title: 'Juego del ahorcado',
        stack: 'ReactJS - API externa',
        description: [
            "Este proyecto consiste en un juego interactivo del ahorcado desarrollado para entornos de escritorio. Para jugar, se hace una solicitud a una API externa que proporciona una palabra al azar en inglés. Es importante destacar que este proyecto no requiere un backend y se basa en el uso de ReactJS para el frontend, Axios para manejar las solicitudes a la API y Framer-Motion para añadir animaciones."
        ],
        objectives:[
            'Utilizar una API externa de manera efectiva.',
            'Implementar componentes reutilizables y llevar a cabo su mapeo.',
        ],
        keyLearnings:null,
        notes:null,
        images:[
            {
                src:"/img/project4/p4image1.png",
                alt:"página de inicio del juego"
            },
            {
                src:"/img/project4/p4image2.png",
                alt:"vista del juego"
            },
            {
                src:"/img/project4/p4image3.png",
                alt:"vista del juego perdido"
            },
            {
                src:"/img/project4/p4image4.png",
                alt:"vista del juego perdido y la respuesta correcta"
            },
            {
                src:"/img/project4/p4image5.png",
                alt:"vista del juego ganado y la respuesta correcta"
            },
        ],
        projectURL: 'https://hangman-game-d5m1.onrender.com/'
    },
    {
        title: 'Sistema de Ventas',
        stack: 'ReactJS - NodeJS - Express - MongoDB',
        description: [
            "Este proyecto MERN Stack fue desarrollado con el objetivo de trabajar con una base de datos no relacional. La aplicación se ha diseñado para gestionar las ventas en diversos tipos de tiendas. Se han establecido dos tipos de perfiles: administrador y ventas, cada uno con funcionalidades específicas.",
            "El perfil de administrador dispone de la capacidad de crear, editar y eliminar perfiles de usuario, productos y sucursales. Además, puede generar informes de ventas de las diferentes sucursales, usuarios y fechas. Por otro lado, el perfil de ventas permite agregar, modificar y eliminar registros de ventas (únicamente del mismo día), así como obtener informes de ventas del día y de fechas anteriores. Ambos perfiles tienen la opción de cambiar sus contraseñas y datos personales, y todos los informes pueden exportarse a Excel.",
            "Cabe mencionar que ciertos datos no pueden eliminarse para garantizar el funcionamiento correcto de todas las funcionalidades. Si deseas probar la función de generación de informes, te sugerimos intentarlo entre el 6 de marzo de 2023 y el 17 de marzo de 2023.",
            "En la parte del Front-end, se utilizaron las bibliotecas Axios para las solicitudes al servidor, Moment para el formato de fechas y Table-to-excel para la exportación a Excel. En el Back-end, se emplearon Express, Mongoose, Cors y Dotenv."
        ],
        objectives:[
            'Aplicar tecnologías MERN Stack.',
            'Trabajar con una base de datos no relacional.',
            'Definir diferentes perfiles de usuarios, con funcionalidades y autorizaciones propias.',
            'Habilitar la exportación de informes a Excel.',
            'Realizar solicitudes POST de forma efectiva.'
        ],
        keyLearnings:"En este proyecto, perfeccioné mi habilidad para efectuar diversas solicitudes POST. Además, logré personalizar la visualización de componentes según el perfil del usuario. En el ámbito del backend, adquirí experiencia en la utilización de Mongoose para extraer datos de la base de datos.",
        notes:[
            "Para ingresar a la aplicación como administrador, utiliza las siguientes credenciales:",
            "Usuario: admin1",
            "Contraseña admin1",
            "Para ingresar a la aplicación como vendedor, utiliza las siguientes las credenciales:",
            "Usuario: ventas1",
            "Contraseña: ventas1"
        ],
        images:[
            {
                src:"/img/project5/p5image1.png",
                alt:"página de perfil"
            },
            {
                src:"/img/project5/p5image2.png",
                alt:"página de inicio, ingreso"
            },
            {
                src:"/img/project5/p5image3.png",
                alt:"página de sucursales"
            },
            {
                src:"/img/project5/p5image4.png",
                alt:"página de reportes"
            },
            {
                src:"/img/project5/p5image5.png",
                alt:"página de productos, función de agregar producto"
            },
        ],
        projectURL: 'https://control-ventas-app.onrender.com/'
    },
]
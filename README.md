# Proyecto: Festival de Musica

Proyecto desarrollado a partir de una base inicial, la cual he ido ampliando y mejorando con nuevas funcionalidades, una arquitectura más organizada y un flujo de trabajo real usando Git y GitHub.  
El objetivo es simular la página oficial de un festival de música, implementando estilos modulares con SASS, secciones interactivas con JavaScript y automatización con Node.js y Gulp.

Este proyecto continúa en evolución y servirá como base para futuras funcionalidades más avanzadas, incluyendo integración con backend.



## Screenshots

### Vista Desktop
![Home Desktop](/src/gallery/screenshots/home-desktop.jpeg)  
*Página principal en versión escritorio.*

![Galería Desktop](/src/gallery/screenshots/galeria-desktop.jpeg)  
*Vista de la galería en escritorio.*

![Boletos Desktop](/src/gallery/screenshots/boletos-desktop.jpeg)  
*Sección de compra de boletos en escritorio.*

### Vista Responsiva

![Home Mobile](/src/gallery/screenshots/home-mobile.jpeg)  
*Página principal en versión móvil.*

![Boletos Mobile](/src/gallery/screenshots/boletos-mobile.jpeg)  
*Sección de compra de boletos en versión móvil.*





## Características

- Diseño completamente responsivo para todos los dispositivos.
- Compilación de SASS utilizando Gulp.
- Automatización de tareas con Node.js (watch, sourcemaps, compilación).
- Galería con modal para visualizar imágenes.
- Sticky Navbar con efecto de transición.
- Smooth scroll entre secciones.
- Animaciones y efectos hover en los boletos.
- Resaltado automático de la sección activa en el menú.
- Flujo de trabajo real con Git:
  - Ramas por funcionalidad.
  - Commits claros y descriptivos.
  - Pull Requests internos simulando un entorno profesional.



## Folder Structure
```
Festival-de-Musica/
├── build/
├── node_modules/ 
├── screenshots/ 
├── src/
│ ├── js/
│ │ └── app.js
│ └── scss/ 
│ └── app.scss 
├── gulpfile.js 
├── package.json 
└── README.md 
```
## Tecnologías utilizadas

- HTML  
- CSS  
- SASS  
- JavaScript  
- Node.js (para dependencias, automatización y entorno de desarrollo)  
- Gulp (compilación y tasks)
- Git & GitHub (flujo de trabajo profesional)  



## Instalación y uso

### 1. Clonar el repositorio
git clone https://github.com/Joivmat/Festival-de-Musica.git

### 2. Entrar al directorio
cd Festival-de-Musica

### 3. Instalar dependencias
npm install

### 4. Iniciar entorno de desarrollo
npm run dev

Esto iniciará:
- El compilador de SASS
- Watchers para JS y SCSS
- Sourcemaps


## Demo

Puedes ver una versión en línea del proyecto aquí:  
[Festival de Música - Demo](https://joivmat-festival-de-musical.netlify.app/)
    

## Roadmap (futuras mejoras)

- Añadir estructura backend básica (posiblemente Node + SQL).
- Simular un e-commerce de boletos.
- Implementar carrito de compras.
- Sistema de usuarios / login.
- Integración API para gestionar boletos o artistas.
- Optimización de rendimiento y accesibilidad.



## Status

En desarrollo — El proyecto está activo y se sigue expandiendo.

## Aprendizajes / Notas del autor

Este proyecto me ha permitido practicar un flujo de trabajo real con Git, usar SASS de forma más profesional, automatizar tareas con Node y Gulp, y aplicar JavaScript para mejorar la interacción del sitio. También me está sirviendo para prepararme para integrar más adelante un backend utilizando SQL.

## Licencia

Este proyecto está bajo la licencia MIT. 

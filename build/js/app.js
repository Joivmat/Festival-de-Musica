document.addEventListener('DOMContentLoaded', function(){
    navegacionFija();
    crearGaleria();
    resaltarEnlace();
    scrollNav();
})

function resaltarEnlace(){
    document.addEventListener('scroll', function(){
        const sections = document.querySelectorAll('section')
        const navLinks = document.querySelectorAll('.navegacion-principal a')

        let actual = '';
        sections.forEach(function(section){
           const sectionTop = section.offsetTop;
           const sectionHeight = section.clientHeight;
           if(window.scrollY >= (sectionTop - sectionHeight / 3)){
                actual = section.id
           }
        })

        navLinks.forEach(function(link){
            link.classList.remove('active')
            if(link.getAttribute('href') === '#' + actual){
                link.classList.add('active')
            }
        })
    })
}

function scrollNav(){
    const navLinks = document.querySelectorAll('.navegacion-principal a')

    navLinks.forEach(function(link){
        link.addEventListener('click', function(e){
            e.preventDefault();
            const sectionScroll = e.target.getAttribute('href')
            const section = document.querySelector(sectionScroll)

            section.scrollIntoView({ behavior: "smooth"})
            
        })
    }) 
}

function navegacionFija(){
    const header = document.querySelector('.header')
    const sobreFestival = document.querySelector('.sobre-festival')

    document.addEventListener('scroll', function(){
        if(sobreFestival.getBoundingClientRect().bottom < 1){
            header.classList.add('fixed');
        } else {
            header.classList.remove('fixed');  
        }
    })
}

function crearGaleria(){
    const galeria = document.querySelector('.galeria-imagenes')

    const cantidadImagenes = 16
    for(let i = 1; i <= cantidadImagenes; i++){
        const imagen = document.createElement('IMG')
        imagen.src = `src/gallery/full/${i}.jpg`
        imagen.alt = 'img galeria'

        // Event Handler
        imagen.onclick = function(){
            mostrarImagen(i)
        }

        galeria.appendChild(imagen)
        
    }
}

function mostrarImagen(i) {
    const imagen = document.createElement('IMG')
    imagen.src = `src/gallery/full/${i}.jpg`
    imagen.alt = 'img galeria'

    //Generar Modal
    const modal = document.createElement('DIV')
    modal.classList.add('modal')
    modal.onclick = function(){
        cerrarModal()
    }
    modal.appendChild(imagen)

    //Agregar al html
    const body = document.querySelector('body')
    body.classList.add('overflow-hidden')
    body.appendChild(modal)    
}

function cerrarModal() {
    const modal = document.querySelector('.modal');
    if (!modal) return;

    modal.classList.add('fadeOut');
    modal.addEventListener('animationend', function() {
        modal.remove();

    const body = document.querySelector('body');
    body.classList.remove('overflow-hidden')
    }, { once: true });
}
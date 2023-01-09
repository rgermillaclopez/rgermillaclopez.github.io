const container     = document.querySelector('.container')
const punto         = document.querySelectorAll('.punto')
const imagenes         = document.querySelectorAll('.imgproj')

punto.forEach(( cadaPunto, i )=> {
    punto[i].addEventListener('click',()=>{

        let posicion = i;
        let operacion = posicion * (-100/3);

        container.style.transform =`translateX(${ operacion }%)`;

        punto.forEach((cadaPunto, i)=>{
            punto[i].classList.remove('activo');
            imagenes[i].classList.add('imgInvisible');
        })
        punto[i].classList.add('activo');
        imagenes[i].classList.remove('imgInvisible');

    })

})

const h2=document.querySelector('h2');
fetch('http://localhost:5501').then(result=>result.json()).then(data=>h2.innerText=data.projects)
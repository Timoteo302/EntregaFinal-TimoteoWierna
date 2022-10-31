const slider = document.querySelector("#slider"); //obtengo todos los elementos dentro del contenedor 'slider'
let sliderSection = document.querySelectorAll(".slider__section"); //obtengo todas las imagenes que tengan esa etiqueta.
let sliderSectionLast = sliderSection[sliderSection.length -1]; //obtengo el ultimo elemento de las img. o sea la ultima.

//obtengo los botones.
const btnLeft = document.querySelector("#btn-left");
const btnRight = document.querySelector("#btn-right");

//afterbegin--'despues que empezar'
//insertAdjacentElement-- tiene 4 posiciones, 'antes de empezar', 'despues de empezar' , 'antes de terminar' y 'despues de terminar'.
slider.insertAdjacentElement('afterbegin', sliderSectionLast); //pone la ultima imagen..


function Next(){
    //porque declaro aqui el SLIDERSECIONFIRST, porque cuando hacemos click para pasar la imagen, la imagen primera va a ir cambiando constantemente.
    //cambiando  de posicion.
    let sliderSectionFirst = document.querySelectorAll(".slider__section")[0]; //aqui obtengo la primera imagen
    slider.style.marginLeft = "-200%"; //lo que hago aqui es cambiar la img a la segunda
    slider.style.transition = "all 0.5s"; //pongo una transicion para el cambio

    setTimeout(function(){
        slider.style.transition = "none"; //saco la transicion
        slider.insertAdjacentElement('beforeend',sliderSectionFirst); //pongo la primera imagen, antes de terminar.
        slider.style.marginLeft = "-100%";
    }, 500); //medio segundo., tiene que ser la misma duracion que el transicion de arriba.

}

function Prev(){

    let sliderSection = document.querySelectorAll(".slider__section"); 
    let sliderSectionLast = sliderSection[sliderSection.length -1];
    slider.style.marginLeft = "0"; 
    slider.style.transition = "all 0.5s"; 

    setTimeout(function(){
        slider.style.transition = "none"; 
        slider.insertAdjacentElement('afterbegin', sliderSectionLast); 
        slider.style.marginLeft = "-100%";
    }, 500); 

}


btnRight.addEventListener('click', function(){
    Next();
})

btnLeft.addEventListener('click', function(){
    Prev();
})

//para que se ejecute una funcion para cierto tiempo.
setInterval(function(){
    Next();
}, 5000)



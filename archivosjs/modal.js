const modal = document.querySelector(".modal-oferta");
const closet = document.querySelector(".close");

closet.addEventListener("click", ()=>{
    modal.classList.toggle('mostrar');
})

const input = document.querySelector(".input__submit");
const send = document.querySelector(".input__mail");
const formulario = document.querySelector(".cont__form");
const form__text = document.querySelector(".cont__form-form");



input.addEventListener("click", ()=>{
    
    env = send.value;
    intp = env.includes("@");
    if (intp) {
        env = send.value = " ";

        form__text.style.display = 'none';

        formulario.innerHTML = "<p class='form__out'>¡Muchas gracias! Recibirás un email para validar tu casilla.</p>"
    }


})
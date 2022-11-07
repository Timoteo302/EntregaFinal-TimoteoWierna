const container = document.querySelector(".container-bot");
const closewind = document.querySelector(".up__close");
const chatHide = document.querySelector(".chat-button");
const content = document.querySelector(".part-mid");
const sendTextMessage = document.querySelector(".send");
const message = document.querySelector(".message");

chatHide.addEventListener("click", ()=>{
    container.classList.toggle('hide-cont');
})

closewind.addEventListener("click", ()=>{
    container.classList.remove("hide-cont");
    container.classList.add("hide");
})


sendTextMessage.addEventListener("click", ()=>{
    if(message.value != ""){
        content.innerHTML += `
            <p class='message-send'>${message.value}</p>
        `
    }

    message.value = "";
})
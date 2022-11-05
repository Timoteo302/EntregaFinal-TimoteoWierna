


const cartIcon = document.querySelector(".cart__primera");
const cartModali = document.querySelector(".cart-modal");

const productContainer = document.querySelector(".cart-container");

cartIcon.addEventListener('click', ()=>{
    cartModali.classList.toggle('show');

})

//Borrar el contenido del carrito.
const deleteProductBtn = document.querySelector(".cart-delete");
deleteProductBtn.addEventListener('click', ()=>{
    productContainer.innerHTML = `<p class="cart-empty">Tu carrito está vacío</p>`;
})


const pagar = document.querySelector(".cart-checkount");
pagar.addEventListener("click", ()=>{
    alert("Pago realizado");
    productContainer.innerHTML = `<p class="cart-empty">Tu carrito está vacío</p>`;

})




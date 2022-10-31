


const cartIcon = document.querySelector(".cart__primera");
const cartModali = document.querySelector(".cart-modal");

const productContainer = document.querySelector(".cart-container");

cartIcon.addEventListener('click', ()=>{
    cartModali.classList.toggle('show');
    deleteProduct();
})

//Borrar el contenido del carrito.
function deleteProduct(){

    const deleteProductBtn = document.querySelector(".cart-delete");
    deleteProductBtn.addEventListener('click', ()=>{
        productContainer.innerHTML = `<p class="cart-empty">Tu carrito está vacío</p>`;
    })

}

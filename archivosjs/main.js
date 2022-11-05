
const contenedor = document.querySelector(".compra__texto");

const menos = document.getElementById('menos');
const mas = document.querySelector("#mas");
const prod_amount = document.getElementById('produc-amount');


userInputNumber = 0;

mas.addEventListener('click', ()=>{
    userInputNumber++;

    if(userInputNumber >=10){
        userInputNumber = 10;
    }
    prod_amount.innerHTML = userInputNumber;
})

menos.addEventListener('click', ()=>{
    userInputNumber--;
    if (userInputNumber <= 0) {
        userInputNumber = 0;
    }

    prod_amount.innerHTML = userInputNumber;

})




//agregar al carrito cuando se presione 'agregar al carrito'.

const addToCart = document.querySelector(".button__texto");
let cartNotification = document.querySelector(".add__notification");
let lastValue = parseInt(cartNotification.innerText);

addToCart.addEventListener('click', ()=>{
    lastValue = lastValue + userInputNumber;

    cartNotification.innerText = lastValue;
    cartNotification.style.display = 'block';
    drawProductInModal();

})




//mostrar el modal del carrito.

const cartIconBtn = document.querySelector(".cart__primera");
const cartModal = document.querySelector(".cart-modal");

const productContainer = document.querySelector(".cart-container");

cartIconBtn.addEventListener('click', ()=>{
    cartModal.classList.toggle('show');

    if(lastValue == 0){
        drawProductInModal();
    }
   
})

//Borrar el contenido del carrito.
function deleteProduct(){

    const deleteProductBtn = document.querySelector(".cart-delete");
    deleteProductBtn.addEventListener('click', ()=>{
        productContainer.innerHTML = `<p class="cart-empty">Tu carrito está vacío</p>`;
        lastValue = 0;
        cartNotification.innerText = lastValue;
    })

}





function drawProductInModal(){

    productContainer.innerHTML = `
    <div class="cart-details">
        <img class="cart-image" src="../assets/bebidas/pack-corona.jpg" alt="imagen-bebida">
        <div>
            <p class="cart-product">Corona Pack 6 310ml</p>
            <p class="cart-price">$350 x2 = <span>$700</span></p>
        </div>
        <img class="cart-delete" src="../assets/delete_remove_bin_icon-icons.com_72400.svg" alt="basurero">
    </div>
    <div class="cart-checkount">Pagar</div>
    `
    
    deleteProduct();
    let priceModal = document.querySelector(".cart-price");
    priceModal.innerHTML = `$350 x${lastValue} <span>$${lastValue*350}</span>`

    const pagar = document.querySelector(".cart-checkount");
    pagar.addEventListener("click", ()=>{
    alert("Pago realizado");
    productContainer.innerHTML = `<p class="cart-empty">Tu carrito está vacío</p>`;
    lastValue = 0;
    cartNotification.innerText = lastValue;
    })
}




function BurgerIncrement() {
    const orderIdIncrementDecrement = document.getElementById('order')
    const incrementDecrement = orderIdIncrementDecrement.innerText;
    const incrementDecrementSting = parseFloat(incrementDecrement);
    const increment = incrementDecrementSting + 1;
    const orderIncrement = orderIdIncrementDecrement.innerText = increment;
    return orderIncrement;
}
function BurgerDecrement() {
    const orderIdIncrementDecrement = document.getElementById('order')
    const incrementDecrement = orderIdIncrementDecrement.innerText;
    const incrementDecrementSting = parseFloat(incrementDecrement);
    const increment = incrementDecrementSting - 1;
    const orderDecrement = orderIdIncrementDecrement.innerText = increment;
    return orderDecrement;
}

function burgerPrice() {
    const burgerPriceNow = document.getElementById('Burger-Price');
    const burgerPriceSting = burgerPriceNow.innerText;
    const burger = parseFloat(burgerPriceSting);
    return burger;
    // console.log(burgerPrice)
}

function setBurgerPrice() {
    const setBurgerPrice = document.getElementById('product-price');
    const setBurgerPriceString = setBurgerPrice.innerText;
    const setBurgerPriceNow = parseFloat(setBurgerPriceString);
    return setBurgerPriceNow;
}

function setPrice() {
    const setPriceNow = orderIncrement * burger;
    console.log(setPrice)
}


document.getElementById('increment').addEventListener('click', function () {
    BurgerIncrement();
    burgerPrice()
    setBurgerPrice()
    setPrice()

})

document.getElementById('decrement').addEventListener('click', function () {
    BurgerDecrement();
    burgerPrice()
    setBurgerPrice()
    setPrice()
})























/* ---------------Decrement-------------- */
function burgerOrder(decrement) {
    const burgerOrderIncrement = document.querySelector(decrement);
    const burgerOrderIncrementString = burgerOrderIncrement.innerText;
    const order = parseFloat(burgerOrderIncrementString);
    const order1 = burgerOrderIncrement.innerText = order - 1;
    return order1;
}

/* -----------Increment--------------- */
function burgerOrder(increment) {
    const burgerOrderIncrement = document.querySelector(increment);
    const burgerOrderIncrementString = burgerOrderIncrement.innerText;
    const order = parseFloat(burgerOrderIncrementString);
    const order2 = burgerOrderIncrement.innerText = order + 1;
    return order2;
}

function burgerPrice(price) {
    const burgerProductPrice = document.querySelector(price);
    const burgerProductPriceString = burgerProductPrice.innerText;
    const burgerInstantPrice = parseFloat(burgerProductPriceString);
    return burgerInstantPrice;
}
function totalPrice(productPrice , increment ) {
    const totalPriceItem = document.querySelector(productPrice);
    totalPriceItem.innerText = increment ;
}

function allFunction( order, burger ,product  ) {
    const orderBurger = burgerOrder(order);
    const price = burgerPrice(burger);
    const totalBurgerPrice = orderBurger * price
    const productPriceTotal = totalPrice(product, totalBurgerPrice);
    return productPriceTotal;
}

/* ----------------Decrement---------------- */

// document.querySelector('#decrement').addEventListener('click', function () {
//     allFunction('#order' ,'#Burger-Price','#product-price');
// })


/*  ------------Increment------------- */
document.querySelector('#increment').addEventListener('click', function () {
    allFunction('#order' ,'#Burger-Price','#product-price');
})





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
    return totalPrice
}
function allFunction( a , b, c ) {
    const orderBurger = burgerOrder(a);
    const price = burgerPrice(b);
    const totalBurgerPrice = orderBurger * price
    const productPriceTotal = totalPrice(c, totalBurgerPrice);
    return productPriceTotal;
}
/*  ------------Increment------------- */
document.querySelector('#increment').addEventListener('click', function () {
    allFunction('#order' ,'#Burger-Price','#product-price');
})




/* ----------------Decrement---------------- */





function orderIncrement(orderIncrement) {
    const orderFilled = document.getElementById(orderIncrement);
    const orderFilledValueString = orderFilled.innerText;
    const orderFilledValue = parseFloat(orderFilledValueString);
    const orderValue = orderFilledValue + 1;
    const order = orderFilled.innerText = orderValue;
    return order;
}
function orderDecrement(orderIncrement) {
    const orderFilled = document.getElementById(orderIncrement);
    const orderFilledValueString = orderFilled.innerText;
    const orderFilledValue = parseFloat(orderFilledValueString);
    const orderValue = orderFilledValue - 1;
    const order = orderFilled.innerText = orderValue;
    return order;
}

function productPrice(Price) {
    const productPriceFilled = document.getElementById(Price);
    const productPriceString = productPriceFilled.innerText;
    const productPriceValue = parseFloat(productPriceString);
    return productPriceValue;
}

function setValuePrice(elementId, newValue) {
    const newElement = document.getElementById(elementId);
    newElement.innerText = newValue;
}

function increment( order ,price1 , totalPrice1) {
    const orderIncrement2 = orderIncrement(order)//'burger-order'
    const price = productPrice(price1)//'Burger-Price'
    const totalPrice = orderIncrement2 * price;
    setValuePrice(totalPrice1, totalPrice)//'burger-total-price'
}

function decrement(order, price1, totalPrice1) {
    const orderDecrement2 = orderDecrement(order)//'burger-order'
    const price = productPrice(price1)//'Burger-Price'
    const totalPrice = orderDecrement2 * price;
    setValuePrice(totalPrice1, totalPrice)//'burger-total-price'
}
/* -------Burger--------- */
document.getElementById('burger-increment').addEventListener('click', function () {
    increment('burger-order','Burger-Price','burger-total-price');
})
document.getElementById('burger-decrement').addEventListener('click', function () {
    decrement('burger-order','Burger-Price','burger-total-price');
})

/*--------chicken---------*/
document.getElementById('chicken-increment').addEventListener('click', function () {
    increment('chicken-order','chicken-Price','chicken-total-price');
})
document.getElementById('chicken-decrement').addEventListener('click', function () {
    decrement('chicken-order','chicken-Price','chicken-total-price');
})

/* ------frenchFries------- */
document.getElementById('frenchFries-increment').addEventListener('click', function () {
    increment('frenchFries-order','frenchFries-Price','frenchFries-total-price');
})
document.getElementById('frenchFries-decrement').addEventListener('click', function () {
    decrement('frenchFries-order','frenchFries-Price','frenchFries-total-price');
})

/* ------Chock kebab-------- */
document.getElementById('chockKebab-increment').addEventListener('click', function () {
    increment('chockKebab-order','chockKebab-Price','chockKebab-total-price');
})
document.getElementById('chockKebab-decrement').addEventListener('click', function () {
    decrement('chockKebab-order','chockKebab-Price','chockKebab-total-price');
})

/* -----------ChickenFry---------- */

document.getElementById('chickenFry-increment').addEventListener('click', function () {
    increment('chickenFry-order','chickenFry-Price','chickenFry-total-price');
})
document.getElementById('chickenFry-decrement').addEventListener('click', function () {
    decrement('chickenFry-order','chickenFry-Price','chickenFry-total-price');
})

/* --------cowFry------- */
document.getElementById('cowFry-increment').addEventListener('click', function () {
    increment('cowFry-order','cowFry-Price','cowFry-total-price');
})
document.getElementById('cowFry-decrement').addEventListener('click', function () {
    decrement('cowFry-order','cowFry-Price','cowFry-total-price');
})



document.getElementById('burger-order-btn').addEventListener('click', function () {
    /* --------Burger Name------------- */
    const cheeseBurgerName = document.getElementById('cheese-burger');
    const fullName = cheeseBurgerName.innerText;
    const bazarList = document.createElement('p');
    bazarList.innerText =`${ fullName }` ;
    const bazarTotalList = document.getElementById("bazar-list").appendChild(bazarList);
    /* -----------BurgerOrder--------------- */
    const burgerOrder = document.getElementById('burger-order');
    const order = burgerOrder.innerText;
    orderList = document.createElement('span');
    orderList.innerText = `${order} pes`;
    bazarTotalList.appendChild(orderList);
    /*----------- BurgerTotalPrice ------------*/
    const itemPrice = document.getElementById('burger-total-price');
    const totalItemprice = itemPrice.innerText;
    priceTotal = document.createElement('span');
    priceTotal.className = 'single-item-price';
    priceTotal.innerText = `$ ${totalItemprice}`;
    bazarTotalList.appendChild(priceTotal);
    console.log(bazarTotalList)

    

    /* -------------- TotalPrice--------------- */
})
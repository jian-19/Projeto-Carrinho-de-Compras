// Funções para o primeiro conjunto de elementos
const btnIncrease = document.querySelector(".bx-plus").addEventListener('click', increaseQuantity);
const quantityDisplay = document.querySelector(".quantity");
const costValue = document.querySelector(".cost");
const costTotal = document.querySelector(".cost-total");
const btnDecrease = document.querySelector(".bx-minus").addEventListener('click', decreaseQuantity);
let quantity = 0;

function updateTotalCost() {
    let totalCost = parseFloat(costValue.innerText.replace("R$ ", "")) * quantity;
    costTotal.innerText = `R$ ${totalCost}`;
}

function increaseQuantity() {
    quantity += 1;
    quantityDisplay.innerText = quantity;
    updateTotalCost();
    updateCartTotal()
}

function decreaseQuantity() {
    if (quantity > 0) {
        quantity -= 1;
        quantityDisplay.innerText = quantity;
        updateTotalCost();
        updateCartTotal()
    }
}

// Funções para o segundo conjunto de elementos
const btnIncreaseOne = document.querySelector(".bx-plusOne").addEventListener('click', increaseQuantityOne);
const quantityDisplayOne = document.querySelector(".quantityOne");
const costValueOne = document.querySelector(".costOne");
const costTotalOne = document.querySelector(".cost-totalOne");
const btnDecreaseOne = document.querySelector(".bx-minusOne").addEventListener('click', decreaseQuantityOne);
let quantityOne = 0;

function updateTotalCostOne() {
    let totalCost = parseFloat(costValueOne.innerText.replace("R$ ", "")) * quantityOne;
    costTotalOne.innerText = `R$ ${totalCost}`;
}

function increaseQuantityOne() {
    quantityOne += 1;
    quantityDisplayOne.innerText = quantityOne;
    updateTotalCostOne();
    updateCartTotal()
}

function decreaseQuantityOne() {
    if (quantityOne > 0) {
        quantityOne -= 1;
        quantityDisplayOne.innerText = quantityOne;
        updateTotalCostOne();
        updateCartTotal()
    }
}

// Funções para o terceiro conjunto de elementos
const btnIncreaseTwo = document.querySelector(".bx-plusTwo").addEventListener('click', increaseQuantityTwo);
const quantityDisplayTwo = document.querySelector(".quantityTwo");
const costValueTwo = document.querySelector(".costTwo");
const costTotalTwo = document.querySelector(".cost-totalTwo");
const btnDecreaseTwo = document.querySelector(".bx-minusTwo").addEventListener('click', decreaseQuantityTwo);
let quantityTwo = 0;

function updateTotalCostTwo() {
    let totalCost = parseFloat(costValueTwo.innerText.replace("R$ ", "")) * quantityTwo;
    costTotalTwo.innerText = `R$ ${totalCost}`;
}

function increaseQuantityTwo() {
    quantityTwo += 1;
    quantityDisplayTwo.innerText = quantityTwo;
    updateTotalCostTwo();
    updateCartTotal()
}

function decreaseQuantityTwo() {
    if (quantityTwo > 0) {
        quantityTwo -= 1;
        quantityDisplayTwo.innerText = quantityTwo;
        updateTotalCostTwo();
        updateCartTotal()
    }
}

function updateCartTotal() {
    const total = calculateTotalCost();
    const cartTotalElement = document.querySelector(".cart-total");
    const subTotalElement = document.querySelector(".sub-Total");
    cartTotalElement.innerText = `R$ ${total}`;
    subTotalElement.innerText = `R$ ${total}`;
}

// Função para calcular o custo total somando os valores dos três conjuntos
function calculateTotalCost() {
    let total = 0;
    total += parseFloat(costTotal.innerText.replace("R$ ", ""));
    total += parseFloat(costTotalOne.innerText.replace("R$ ", ""));
    total += parseFloat(costTotalTwo.innerText.replace("R$ ", ""));
    return total;
}
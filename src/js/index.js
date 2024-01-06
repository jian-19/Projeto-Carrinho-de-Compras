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
}

function decreaseQuantity() {
    if (quantity > 0) {
        quantity -= 1;
        quantityDisplay.innerText = quantity;
        updateTotalCost();
    }
}

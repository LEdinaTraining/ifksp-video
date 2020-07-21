// Quantity control.
function validItems(amountNumber) {
    if (amountNumber > 10) {
        alert("Maximum 10 terméket vásárolhat!");
    } else if (amountNumber < 1) {
        alert("Minimum 1 terméket kell vásárolnia!");
    } else {
        amountNumber = amountNumber;
    }
}
// Calculation of the amount to be paid.
function showSumAmount(deliveryPrice, amountNumber, amount) {
    let showAmount = document.querySelector("span.show-amount");
    if (amount >= 5000) {
        showAmount.innerHTML = amount;
    }
    else {
        amount = amount + deliveryPrice;
        showAmount.innerHTML = amount;
    }
}
// Variables and calculation bases.
function calcAmount() {
    let amountInput = document.querySelector("input[name='amount-input']");
    let amountNumber = parseInt(amountInput.value);
    amountNumber = isNaN(amountNumber) ? 0 : amountNumber;
    let price = 1000;
    let deliveryPrice = 500;
    let amount = amountNumber * price;

    validItems(amountNumber);
    showSumAmount(deliveryPrice, amountNumber, amount);
}
function compute(x, y, z) { return x * y + z; }
compute(0, 10, 1);

console.log(compute);
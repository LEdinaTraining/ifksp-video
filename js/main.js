function calcAmount() {
    let price = 1000;
    let deliveryPrice = 500;
    let amountInput = document.querySelector("input[name='amount-input']");
    let amountNumber = parseInt(amountInput.value);
    amountNumber = isNaN(amountNumber) ? 0 : amountNumber;

    showSumPrice(price, amountNumber, deliveryPrice);
}
function showSumPrice(price, amountNumber, deliveryPrice) {
    let showAmount = document.querySelector("span.show-amount");
    if (amountNumber > 10) {
        alert("Maximum 10 terméket vásárolhat!");
    } else if (amountNumber < 1) {
        alert("Minimum 1 terméket kell vásárolnia!");
    } else {
        let amount = amountNumber * price;
        if (amount < 5000) {
            amount = amount + deliveryPrice;
            showAmount.innerHTML = amount;
        }
        else {
            showAmount.innerHTML = amount;
        }
    }

}
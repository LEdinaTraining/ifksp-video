function calcAmount() {
    let price = 1000;
    let deliveryPrice = 500;
    let amountInput = document.querySelector("input[name='amount-input']");
    let amountNumber = parseInt(amountInput.value);
    amountNumber = isNaN(amountNumber) ? 0 : amountNumber;
    let amount = amountNumber * price;

    validAmountNumber(amountNumber);
    showSumAmount(deliveryPrice, amountNumber)
}

function validAmountNumber(amountNumber) {
    let showAmount = document.querySelector("span.show-amount");
    if (amountNumber > 10) {
        alert("Maximum 10 terméket vásárolhat!");
    } else if (amountNumber < 1) {
        alert("Minimum 1 terméket kell vásárolnia!");
    } else {
        amountNumber = amountNumber;
    }
}

function showSumAmount(deliveryPrice, amountNumber, amount) {
    if (amount >= 5000) {
        amount = amount;
        showAmount.innerHTML = amount;
    }
    else if (amount < 5000) {
        amount = amount + deliveryPrice;
        showAmount.innerHTML = amount;
    }
}



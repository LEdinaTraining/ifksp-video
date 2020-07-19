function calcAmount() {
    let price = 1000;
    let deliveryPrice = 500;
    let amountInput = document.querySelector("input[name='amount-input']");
    let amountNumber = parseInt(amountInput.value);
    amountNumber = isNaN(amountNumber) ? 0 : amountNumber;
    let amount = amountNumber * price;
    
    validItems(amountNumber);
    showSumAmount(deliveryPrice, amountNumber, amount)
}

function validItems(amountNumber) {
    if (amountNumber > 10) {
        alert("Maximum 10 terméket vásárolhat!");
    } else if (amountNumber < 1) {
        alert("Minimum 1 terméket kell vásárolnia!");
    } else {
        amountNumber = amountNumber;
    }
}

function showSumAmount(deliveryPrice, amountNumber, amount) {
    let showAmount = document.querySelector("span.show-amount");
    if (amount >= 5000) {
        showAmount.innerHTML = amount;
    }
    else if (amount < 5000) {
        amount = amount + deliveryPrice;
        showAmount.innerHTML = amount;
    }
}


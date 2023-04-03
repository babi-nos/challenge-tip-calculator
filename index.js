const billAmount = document.getElementById("bill-input");
const numberOfPeople = document.getElementById("people");
const customTipPercentage = document.getElementById("custom");
const billTipAmount = document.getElementById("tipAmount");
const billTotalPerPerson = document.getElementById("total");
const resetButton = document.getElementById("resetBtn");
const buttons = document.querySelectorAll(".btn-tip button");
const error = document.getElementById("error");

//Calculate Tip When Click On Tip Percentage Button
buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    let tipvalue = e.target.innerText;
    tipvalue = tipvalue.substr(0, tipvalue.length - 1);

    // if my input is empty || 0
    if (billAmount.value === "") {
      billAmount.style.outline = "2px solid #e12424";
    } else if (billAmount.value === "0") {
      billAmount.style.outline = "2px solid #e12424";
    } else {
      billAmount.style.outline = "none";
    }

    // if my input is empty || 0
    if (numberOfPeople.value === "") {
      error.style.opacity = 1;
      numberOfPeople.style.outline = "2px solid #e12424";
    } else if (numberOfPeople.value === "0") {
      error.style.opacity = 1;
      numberOfPeople.style.outline = "2px solid #e12424";
      numberOfPeople.value = "";
    } else {
      error.style.opacity = 0;
      numberOfPeople.style.outline = "none";
      // numberOfPeople.style.
    }

    calculateTip(
      parseFloat(billAmount.value),
      parseInt(tipvalue),
      parseInt(numberOfPeople.value)
    );
  });
});


// calculate Tip
function calculateTip(billAmount, tipPercentage, numberOfPeople) {
  let tipAmount = (billAmount * (tipPercentage / 100)) / numberOfPeople;
  let tip = Math.floor(tipAmount * 100) / 100;
  tip = tip.toFixed(2);

  let totalAmount = (tipAmount * numberOfPeople + billAmount) / numberOfPeople;
  totalAmount = totalAmount.toFixed(2);

  billTipAmount.innerHTML = `$${tip}`;
  billTotalPerPerson.innerHTML = `$${totalAmount}`;
}

//Reset Everything
resetButton.addEventListener("click", resetEverything);
function resetEverything() {
  billTipAmount.innerHTML = "$0.00";
  billTotalPerPerson.innerHTML = "$0.00";
  billAmount.value = "";
  numberOfPeople.value = "";
  customTipPercentage.value = "";
  error.style.opacity = 0;
}

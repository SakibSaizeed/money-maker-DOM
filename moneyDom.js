const CalBtnId = document.getElementById("calc-button-id");
CalBtnId.addEventListener("click", function calculate() {
    // console.log(getTotalCost());
    const expenseSpan = document.getElementById("expense-id");
    expenseSpan.innerText = getTotalCost();
    const balanceInputId = document.getElementById("balance-input-id");
    const BalanceNumber = parseFloat(balanceInputId.value);
    const balanceSpanId = document.getElementById("balance-span");
    balanceSpanId.innerText = BalanceNumber - getTotalCost();
});

//take input value
function getTotalCost() {
    const inputFoodId = document.getElementById("cost-input-food");
    let inputevaluefood = parseFloat(inputFoodId.value);
    const inputRentId = document.getElementById("cost-input-rent");
    let inputevaluerent = parseFloat(inputRentId.value);
    let totalCost = inputevaluefood + inputevaluerent;
    return totalCost;
}
//savings button
const savebtn = document.getElementById("save-button");
savebtn.addEventListener("click", function savingsCalc() {
    //console.log("click save");
    const balanceInputId = document.getElementById("balance-input-id");
    const BalanceNumber = parseFloat(balanceInputId.value);
    const savePercent = document.getElementById("save-percent");
    const savePercentNumber = parseFloat(savePercent.value);
    const savingsResult = (BalanceNumber / 100) * savePercentNumber;
    const saveSpanId = document.getElementById("savings-span");
    saveSpanId.innerText = savingsResult;
    const balanceSpanId = document.getElementById("balance-span");
    const updatedBalance = parseFloat(balanceSpanId.innerText);
    const getRemainBalance = document.getElementById("remain-span");
    getRemainBalance.innerText = updatedBalance - savingsResult;
});
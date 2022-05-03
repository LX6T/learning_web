let num1 = 8
let num2 = 2
let resultEl = document.getElementById("result-el")
document.getElementById("num1-el").textContent = num1
document.getElementById("num2-el").textContent = num2

function add() {
    resultEl.textContent = "Result: " + (num1 + num2)
}

function subtract() {
    resultEl.textContent = "Result: " + (num1 - num2)
}

function multiply() {
    resultEl.textContent = "Result: " + (num1 * num2)
}

function divide() {
    resultEl.textContent = "Result: " + (num1 / num2)
}
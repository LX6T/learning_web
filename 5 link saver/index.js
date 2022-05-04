
let myLinks = []
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")

inputBtn.addEventListener("click", function() {
    myLinks.push(inputEl.value)

    ulEl.innerHTML = ""
    for (const link of myLinks) {
        ulEl.innerHTML += "<li>" + link + "</li>"
    }
})


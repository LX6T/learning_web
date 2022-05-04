
let myLinks = []
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")

inputBtn.addEventListener("click", function() {
    myLinks.push(inputEl.value)
    inputEl.value = ""
    renderLinks()
})

function renderLinks() {
    let listItems = ""
    for (const link of myLinks) {
        listItems += `
            <li>
                <a target='_blank' href='${link}'>
                    ${link}
                </a>
            </li>
        `
    }
    ulEl.innerHTML = listItems
}
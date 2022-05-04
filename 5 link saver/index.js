const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const tabBtn = document.getElementById("tab-btn")
const deleteBtn = document.getElementById("delete-btn")
const ulEl = document.getElementById("ul-el")
const linksFromLocalStorage = JSON.parse(localStorage.getItem("links"))
let myLinks = []

if (linksFromLocalStorage) {
    myLinks = linksFromLocalStorage
    render(myLinks)
}

function render(links) {
    let listItems = ""
    for (const link of links) {
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

inputBtn.addEventListener("click", function() {
    myLinks.push(inputEl.value)
    inputEl.value = ""
    localStorage.setItem("links", JSON.stringify(myLinks))
    render(myLinks)
})

tabBtn.addEventListener("click", function() {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        myLinks.push(tabs[0].url)
        localStorage.setItem("links", JSON.stringify(myLinks))
        render(myLinks)
    })
})

deleteBtn.addEventListener("dblclick", function() {
    myLinks = []
    localStorage.clear()
    render(myLinks)
})

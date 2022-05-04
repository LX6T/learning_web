let cards
let sum
let hasBlackjack
let isAlive
let messageEl = document.querySelector("#message-el")
let cardsEl = document.querySelector("#cards-el")
let sumEl = document.querySelector("#sum-el")
let playerEl = document.querySelector("#player-el")

let player = {
    name: "Alex",
    chips: 200
}

function randomCard() {
    let randomCard = Math.floor(Math.random() * 13) + 1
    if (randomCard === 1) {
        randomCard = 11
    } else if (randomCard > 10) {
        randomCard = 10
    }
    return randomCard
}

function newGame() {
    cards = []
    sum = 0
    hasBlackjack = false
    isAlive = true
    newCard()
    newCard()
    renderGame()
}

function renderGame() {
    cardsEl.textContent = "Cards: "
    for (const card of cards) {
        cardsEl.textContent += " " + card
    }
    sumEl.textContent = "Sum: " + sum
    if (sum < 21) {
        messageEl.textContent = "Do you want to draw a new card?"
    } else if (sum === 21) {
        hasBlackjack = true
        messageEl.textContent = "Congratulations, you've got Blackjack!"
        player.chips += 50
    } else {
        isAlive = false
        messageEl.textContent = "Bust! You're out!"
        player.chips -= 10
    }
    playerEl.textContent = player.name + ": $" + player.chips
}

function newCard() {
    if (isAlive && !hasBlackjack) {
        let newCard = randomCard()
        cards.push(newCard)
        sum += newCard
        renderGame()
    }
}
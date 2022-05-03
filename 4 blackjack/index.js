let firstCard = Math.floor(Math.random() * 9) + 2
let secondCard = Math.floor(Math.random() * 9) + 2
let sum = firstCard + secondCard
let hasBlackjack = false
let isAlive = true
let message = ""

if (sum < 21) {
    message = "Do you want to draw a new card?"
} else if (sum === 21) {
    hasBlackjack = true
    message = "Congratulations, you've got Blackjack!"
} else {
    isAlive = false
    message = "Bust! You're out!"
}
//create a function that handles clicks from both home and guest
/**
 * 1. add click listerners to all buttons and add ids to all buttons
 * 2. depending on the button clicked, call function and pass argument
 * 3. create function that adds specified number of points '1,2, or 3'
 */
let [
    addOneHomeButton,
    addTwoHomeButton,
    addThreeHomeButton,
    addOneGuestButton,
    addTwoGuestButton,
    addThreeGuestButton
] = [
        document.getElementById("add-one-home-btn"),
        document.getElementById("add-two-home-btn"),
        document.getElementById("add-three-home-btn"),
        document.getElementById("add-one-guest-btn"),
        document.getElementById("add-two-guest-btn"),
        document.getElementById("add-three-guest-btn")
]
        
let [homeScore, guestScore] = [0, 0]

let homeScoreText = document.getElementById("home-score-text")
let guestScoreText = document.getElementById("guest-score-text")

homeScoreText.textContent = 0
guestScoreText.textContent = 0

addOneHomeButton.addEventListener("click", () => {handleClick(addOneHomeButton.id)})
addTwoHomeButton.addEventListener("click", () => {handleClick(addTwoHomeButton.id)})
addThreeHomeButton.addEventListener("click", () => {handleClick(addThreeHomeButton.id)})
addOneGuestButton.addEventListener("click", () => {handleClick(addOneGuestButton.id)})
addTwoGuestButton.addEventListener("click", () => {handleClick(addTwoGuestButton.id)})
addThreeGuestButton.addEventListener("click", () => {handleClick(addThreeGuestButton.id)})

function handleClick(id){
    switch (id){
        case addOneGuestButton.id:
            guestScore += 1
            updateGuestScore(guestScore)
            break
        case addTwoGuestButton.id:
            guestScore += 2
            updateGuestScore(guestScore)
            break
        case addThreeGuestButton.id:
            guestScore += 3
            updateGuestScore(guestScore)
            break
        case addOneHomeButton.id: 
            homeScore += 1
            updateHomeScore(homeScore)
            break
        case addTwoHomeButton.id:
            homeScore += 2
            updateHomeScore(homeScore)
            break
        case addThreeHomeButton.id:
            homeScore += 3
            updateHomeScore(homeScore)
            break
    }
}

function updateGuestScore(score){
    guestScoreText.textContent = score
}

function updateHomeScore(score){
    homeScoreText.textContent = score
}

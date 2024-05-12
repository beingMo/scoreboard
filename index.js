//create a function that handles clicks from both home and Away
/**
 * 1. add click listerners to all buttons and add ids to all buttons
 * 2. depending on the button clicked, call function and pass argument
 * 3. create function that adds specified number of points '1,2, or 3'
 */
let [
    addOneHomeButton,
    addTwoHomeButton,
    addThreeHomeButton,
    addOneAwayButton,
    addTwoAwayButton,
    addThreeAwayButton
] = [
        document.getElementById("add-one-home-btn"),
        document.getElementById("add-two-home-btn"),
        document.getElementById("add-three-home-btn"),
        document.getElementById("add-one-away-btn"),
        document.getElementById("add-two-away-btn"),
        document.getElementById("add-three-away-btn")
    ]

let [homeScore, awayScore] = [0, 0]

let homeScoreText = document.getElementById("home-score-text")
let awayScoreText = document.getElementById("away-score-text")

homeScoreText.textContent = 0
awayScoreText.textContent = 0

addOneHomeButton.addEventListener("click", () => { handleClick(addOneHomeButton.id) })
addTwoHomeButton.addEventListener("click", () => { handleClick(addTwoHomeButton.id) })
addThreeHomeButton.addEventListener("click", () => { handleClick(addThreeHomeButton.id) })
addOneAwayButton.addEventListener("click", () => { handleClick(addOneAwayButton.id) })
addTwoAwayButton.addEventListener("click", () => { handleClick(addTwoAwayButton.id) })
addThreeAwayButton.addEventListener("click", () => { handleClick(addThreeAwayButton.id) })

function handleClick(id) {
    switch (id) {
        case addOneAwayButton.id:
            awayScore += 1
            updateAwayScore(awayScore)
            break
        case addTwoAwayButton.id:
            awayScore += 2
            updateAwayScore(awayScore)
            break
        case addThreeAwayButton.id:
            awayScore += 3
            updateAwayScore(awayScore)
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

function updateAwayScore(score) {
    awayScoreText.textContent = score
}

function updateHomeScore(score) {
    homeScoreText.textContent = score
}

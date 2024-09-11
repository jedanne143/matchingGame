
let card1 = null ;
let card2 = null;
let matchedCards = []
let selectedCards= []
const match = new Audio("audio/correct.mp3")
const mismatch = new Audio("audio/wrong.mp3")
const winning = new Audio("audio/success-fanfare-trumpets-6185.mp3")
const mainContainer = document.getElementById("mainContainer")

//function called when playing the game
function play(card) {
//prevent reselection of matched cards and selected card
    if (matchedCards.includes(card) ) return;
    if (selectedCards.includes(card) ) return;

    if (card1 == null) {
        card.style.filter = "brightness(1)"
        card1 = card;
        selectedCards.push(card)
    } else if (card2 == null  ){
        card.style.filter = "brightness(1)"
        card2 = card
        setTimeout( checkMatch, 500)
    }
}
//checks if 2 selected cards are matching
function checkMatch() {
    if(card1.alt===card2.alt){
        match.play()
        matchedCards.push(card1)
        matchedCards.push(card2)
        card1 = null 
        card2 = null
        if (matchedCards.length === 20){
            mainContainer.innerHTML = "";
            winning.play()
            const win = document.createElement("div");
            win.className="win"
            mainContainer.appendChild(win)
        }
    } else {
        mismatch.play()
        card1.style.filter = "brightness(0)"
        card2.style.filter = "brightness(0)"
        card1 = null 
        card2 = null        
        selectedCards = []
    }
}


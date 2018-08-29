function turnCard (card) {
  card.classList.add('turn')
}
function untapCard (card) {
  card.classList.remove('turn')
}
function cardHasSuccess (card) {
  return card.classList.contains('success')
}
function cardHasTurn (card) {
  return card.classList.contains('turn')
}

function doCardsMatch (card1, card2) {
  return card1.classList.value === card2.classList.value
}
function scorePoint (card1, card2) {
  card1.classList.add('success')
  card2.classList.add('success')
}

function resetCarta (card) {
  card.classList.remove('success')
}

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}

function setUp() {
  var cards = document.querySelectorAll(".carta-jogo-da-memoria");
  // var cards = Array.from(document.querySelectorAll(".carta-jogo-da-memoria"))
  var resetShuffleButton = document.getElementById('shuffle-reset')
  var embaralharButton = document.getElementById("embaralhar")
  var numberClicked = 0;
  var clicked = null;

  //embaralhar as cartas

   resetShuffleButton.addEventListener('click', function(){
    for (var i = 0; i<cards.length; i++) {
      var targetPosition = getRandomInt(0,24)
      var currentCard = cards[i]
      var targetCard = cards[targetPosition]
      currentCard.parentNode.insertBefore(currentCard, targetCard)

      console.log('current')
      console.log(i)
      console.log('target')
      console.log(getRandomInt(0, 24))
    }
    //funcionar como reset
    handleResetButtonClick()
  })

  resetShuffleButton.addEventListener('click', handleResetButtonClick)

  function handleResetButtonClick () {
    for (var i =0; i<cards.length; i++) {
      untapCard(cards[i])
      resetCarta(cards[i])
    }
    // numberClicked = 0;
    clicked = null;
  }

  // embaralharButton.addEventListener('click', function(){
  //   for (var i=0; i<cards.length; i++) {
  //     var targetPosition = getRandomInt(0, 24)
  //     var currentCard = cards[i]
  //     var targetCard = cards[targetPosition]
  //     currentCard.parentNode.insertBefore(currentCard, targetCard)

  //     console.log('current')
  //     console.log(cards[i])
  //     console.log('target')
  //     console.log(cards[targetPosition])

    
  //   }
  // })
  

  for (var i=0; i<cards.length; i++) {
    cards[i].addEventListener("click", clickCard)
  }

  function clickCard() {
    if (cardHasTurn(this) === true ) {
      return;
    }


    numberClicked++;

    if (numberClicked>2) {

      numberClicked=1;

      for (var i=0; i<cards.length; i++) {
        if (cardHasSuccess(cards[i])) {
          // não fazer nada pra que ela sempre fique virada, pois cards com
          //success sempre estarão viradas
        } else {
          untapCard(cards[i])
        }
      }
    }
    
    turnCard(this)

    if (clicked !== null && doCardsMatch(this, clicked)) {
      scorePoint(this, clicked)
    }

    clicked = this;

  }
}

window.onload = setUp;

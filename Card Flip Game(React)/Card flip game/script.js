const cards = document.querySelectorAll('.card');
let isFlipped = false;
let firstCard;
let secondCard;
let lockBoard = false;

cards.forEach(card => {
  card.addEventListener('click', flip);
});

function flip() {
  if (lockBoard) return;
  if (this === firstCard) return;

  this.classList.add('flipped');

  if (!isFlipped) {
    isFlipped = true;
    firstCard = this;
  } else {
    isFlipped = false;
    secondCard = this;
    checkForMatch();
  }
}

function checkForMatch() {
  let isMatch = firstCard.dataset.image === secondCard.dataset.image;
  isMatch ? disableCards() : unflipCards();
}

function disableCards() {
  firstCard.removeEventListener('click', flip);
  secondCard.removeEventListener('click', flip);
  resetBoard();
}

function unflipCards() {
  lockBoard = true;
  setTimeout(() => {
    firstCard.classList.remove('flipped');
    secondCard.classList.remove('flipped');
    resetBoard();
  }, 1000);
}

function resetBoard() {
  [isFlipped, lockBoard] = [false, false];
  [firstCard, secondCard] = [null, null];
}

(function shuffle() {
  cards.forEach(card => {
    let randomPos = Math.floor(Math.random() * cards.length);
    card.style.order = randomPos;
  });
})();

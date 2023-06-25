const askBtn = document.getElementById('btn-ask');
const stopBtn = document.getElementById('btn-stop');
const restartBtn = document.getElementById('btn-restart')
const divCards = document.querySelector('.cards');
const counterCards = document.querySelector('.counter-panel');
let textWin = document.querySelector('.textWin');

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let initialValue = 0;

const countNumber = document.querySelector('.number');

function giveCard() {
    let randomCards = Math.floor(Math.random() * cards.length);
    let randomValue = cards[randomCards];
    let newCard = document.createElement('div');
    let numberCard = document.createElement('h1');

    newCard.classList.add('card');
    divCards.appendChild(newCard);
    numberCard.innerText = randomValue;
    newCard.appendChild(numberCard);


    if (initialValue === 0){
        initialValue = randomValue;
    } else{
        initialValue += randomValue;
    }

    countNumber.innerText = initialValue;

    if (initialValue > 21){
        const endGameText = document.createElement('h1');
        endGameText.classList.add('end-game');
        endGameText.innerText = "You lose!";
        textWin.appendChild(endGameText);

        askBtn.style.display = 'none';
        stopBtn.style.display = 'none';
        restartBtn.style.display = 'block';
    } else if (initialValue === 21){
       const winGameText = document.createElement('h1');
       winGameText.classList.add('win-game')
       winGameText.innerText = "You win!"
       textWin.appendChild(winGameText)
       
       askBtn.style.display = 'none';
       stopBtn.style.display = 'none';
       restartBtn.style.display = 'block';
    }

    return initialValue
}



askBtn.addEventListener('click', giveCard);

function restartGame(){
    restartBtn.style.display = 'none';
    askBtn.style.display = 'block';
    stopBtn.style.display = 'block';

    divCards.innerHTML = "";
    countNumber.innerText = "0";

    initialValue = 0
    textWin.innerHTML = "";
}

restartBtn.addEventListener('click', restartGame)

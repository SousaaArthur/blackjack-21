//---------Game variables---------
const askBtn = document.getElementById('btn-ask');
const stopBtn = document.getElementById('btn-stop');
const restartBtn = document.getElementById('btn-restart');
const divCards = document.querySelector('.cards');
const counterCards = document.querySelector('.counter-panel');
let textWin = document.querySelector('.textWin');
const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//Initial value
let initialValue = 0;
const countNumber = document.querySelector('.number');
//Btn stop disabled
stopBtn.disabled = true;

//---------Bet variables----------
const graphic = document.querySelector('.graphic');
const resultBet = document.querySelector('.result-bet');
const moneyUser = document.querySelector('.money');
//------amount of user money------
let money = 500;
const moneyFormat = money.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
const h1Money = document.createElement('h3');
h1Money.innerText = moneyFormat;
h1Money.classList.add('text');
moneyUser.appendChild(h1Money);
const betMoney = document.getElementById('amountMoney');
const betMoneyString = betMoney.value;
const betMoneyFloat = parseFloat(betMoneyString);

function removeLetters(){
  betMoney.value = betMoney.value.replace(/\D/g, "").replace(",", ".");
}


//------Function button giveCard--------
function giveCard() {
  //----Bet config-----
  const betMoneyString = betMoney.value;
  const betMoneyFloat = parseFloat(betMoneyString);

  

  //variable
  let randomCards = Math.floor(Math.random() * cards.length);
  let randomValue = cards[randomCards];
  let newCard = document.createElement('div');
  let numberCard = document.createElement('h1');

  //add new card
  newCard.classList.add('card');
  divCards.appendChild(newCard);
  numberCard.innerText = randomValue;
  newCard.appendChild(numberCard);

  //ensure that initialValue is equal 0 or sum initialValue with randomValue
  if (initialValue === 0) {
    initialValue = randomValue;
  } else {
    initialValue += randomValue;
  }
  //ensure that initalValue is greater than 9 or less than 9
  if (initialValue < 9) {
    stopBtn.disabled = true;
    stopBtn.classList.add('btn-none');
  } else if (initialValue > 9) {
    stopBtn.disabled = false;
    stopBtn.classList.remove('btn-none');
  }

  countNumber.innerText = initialValue;

  if (initialValue > 21) {
    const endGameText = document.createElement('h1');
    endGameText.classList.add('end-game');
    endGameText.innerText = 'You lose!';
    textWin.appendChild(endGameText);

    askBtn.style.display = 'none';
    stopBtn.style.display = 'none';
    restartBtn.style.display = 'block';
    //---------------------------------
    const betLose = document.createElement('p');
    betLose.classList.add('bet-lose');
    betLose.innerText = `You lost! You bet ${betMoneyFloat}R$ and lost ${betMoneyFloat * 3}R$`;
    resultBet.appendChild(betLose);
    graphic.innerHTML = '<i class="fa-solid fa-arrow-down fa-xl"></i>';

    
  } else if (initialValue === 21) {
    const winGameText = document.createElement('h1');
    winGameText.classList.add('win-game');
    winGameText.innerText = 'You win!';
    textWin.appendChild(winGameText);

    askBtn.style.display = 'none';
    stopBtn.style.display = 'none';
    restartBtn.style.display = 'block';
    //---------------------------------
    const betWin = document.createElement('p');
    betWin.classList.add('bet-win');
    betWin.innerText = `You won! You bet ${betMoneyFloat}R$ and won another ${betMoneyFloat * 5}R$`;
    resultBet.appendChild(betWin);
    graphic.innerHTML = '<i class="fa-solid fa-arrow-up fa-xl"></i>';
  }

  return initialValue;
}

askBtn.addEventListener('click', giveCard);

function restartGame() {
  restartBtn.style.display = 'none';
  stopBtn.style.display = 'block';
  stopBtn.classList.add('btn-none');
  askBtn.style.display = 'block';

  stopBtn.disabled = true;

  divCards.innerHTML = '';
  countNumber.innerText = '0';

  initialValue = 0;
  textWin.innerHTML = '';
}

restartBtn.addEventListener('click', restartGame);

function stopGame() {
  const MachineCards = [10, 11, 12, 13, 14, 15, 15, 16, 16, 17, 17, 18, 18, 19, 19, 20, 20];
  let randomCards = Math.floor(Math.random() * MachineCards.length);
  let randomValue = MachineCards[randomCards];
  let machineValue = randomValue;
  const betMoneyString = betMoney.value;
  const betMoneyFloat = parseFloat(betMoneyString);

  if (initialValue > randomValue) {
    const winGameText = document.createElement('h1');
    winGameText.classList.add('win-game');
    winGameText.innerText = 'You win!';
    textWin.appendChild(winGameText);

    askBtn.style.display = 'none';
    stopBtn.style.display = 'none';
    restartBtn.style.display = 'block';
    //---------------------------------
    const betWin = document.createElement('p');
    betWin.classList.add('bet-win');
    betWin.innerText = `You won! You bet ${betMoneyFloat}R$ and won another ${betMoneyFloat}R$`;
    resultBet.appendChild(betWin);
    graphic.innerHTML = '<i class="fa-solid fa-arrow-up fa-xl"></i>';
  } else if (initialValue < randomValue) {
    const endGameText = document.createElement('h1');
    endGameText.classList.add('end-game');
    endGameText.innerText = 'You lose!';
    textWin.appendChild(endGameText);

    askBtn.style.display = 'none';
    stopBtn.style.display = 'none';
    restartBtn.style.display = 'block';
    //---------------------------------
    const betLose = document.createElement('p');
    betLose.classList.add('bet-lose');
    betLose.innerText = `You lost! You bet ${betMoneyFloat}R$ and lost ${betMoneyFloat}R$`;
    resultBet.appendChild(betLose);
    graphic.innerHTML = '<i class="fa-solid fa-arrow-down fa-xl"></i>';
  } else if (initialValue === randomValue) {
    const endGameText = document.createElement('h1');
    endGameText.classList.add('end-game');
    endGameText.innerText = 'You lose!';
    textWin.appendChild(endGameText);

    askBtn.style.display = 'none';
    stopBtn.style.display = 'none';
    restartBtn.style.display = 'block';
    //---------------------------------
    const betLose = document.createElement('p');
    betLose.classList.add('bet-lose');
    betLose.innerText = `You lost! You bet ${betMoneyFloat}R$ and lost ${betMoneyFloat}R$`;
    resultBet.appendChild(betLose);
    graphic.innerHTML = '<i class="fa-solid fa-arrow-down fa-xl"></i>';
  }
}

stopBtn.addEventListener('click', stopGame);

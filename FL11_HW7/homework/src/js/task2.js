let game = confirm('Do you want to play a game?');
game === false ? alert('You did not become a billionaire, but can.') : '';
let random = null;
let randomCounter = 8;
let randomCounterSupGame = 4;
let userAnsw = null;
let prize = null;
let sum = 0;
let continueGame = null;
let againGame = null;
// let prizeArr = [100, 50, 25];
let firstPrize = 100;
let firstPrizeCount = 1;
let secondPrize = 50;
let secondPrizeCount = 2;
let thirdPrize = 25;
let thirdPrizeCount = 3;
// let prizeSupGame = 1;
let i = 1
let counter = 3;
let counterContinueGame = 1;

while (game === true) {
  random = Math.floor(Math.random() * randomCounter);

  for (i; i <= counter; i++) {
    userAnsw = parseInt(
      prompt('enter a number of pocket on which the ball could land ')
    );
    userAnsw === random;
    switch (true) {
      case userAnsw === random && i === firstPrizeCount:
          prize = firstPrize * counterContinueGame;
        break;
      case userAnsw === random && i === secondPrizeCount:
          prize = secondPrize * counterContinueGame;
        break;
      case userAnsw === random && i === thirdPrizeCount:
            prize = thirdPrize * counterContinueGame;
        break;
      default: '';
    }
    
    if (prize !== null || userAnsw === null) { 
      break
     }
  }
  if (prize === null) {
    alert(`Thank you for your participation. Your prize is: ${sum} $`);
    againGame = confirm('Want you play again?');
  } else {
    continueGame = confirm(
      `Congratulation, you won! Your prize is: ${prize}$. Do you want to continue?`);
     
  }
  if (continueGame === false) {
    againGame = confirm('Want you play again?');
    
  }
  if (continueGame === true || againGame === true) {
    counterContinueGame ++;
    randomCounter += randomCounterSupGame;
    game = true;
    sum += prize;
    prize = null;
  } else {
    sum += prize;
    alert(`Thank you for your participation. Your prize is: ${sum}$`);
    game = false;
    prize = null;
    sum = 0;
  }
}

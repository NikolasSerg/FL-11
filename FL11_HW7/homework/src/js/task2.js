let game = confirm('Do you want to play a game?');
game === false ? alert('You did not become a billionaire, but can.') : '';
let random = null;
let randomCounter = 8;
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
let i = 1
let counter = 3;

while (game === true) {
  random = Math.floor(Math.random() * randomCounter);
  console.log(random, ' - random');

  for (i; i <= counter; i++) {
    userAnsw = parseInt(
      prompt('enter a number of pocket on which the ball could land ')
    );
    console.log(userAnsw, ' - userAnsw');
    userAnsw === random;
    switch (true) {
      case userAnsw === random && i === firstPrizeCount:
        prize = firstPrize;
        break;
      case userAnsw === random && i === secondPrizeCount:
        prize = secondPrize;
        break;
      case userAnsw === random && i === thirdPrizeCount:
        prize = thirdPrize;
        break;
      default: '';
      //   alert('Thank you for your participation. Your prize is: … $');
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
      `Congratulation, you won! Your prize is: ${prize}$. Do you want to continue?`
    );
  }
  if (continueGame === false) {
    againGame = confirm('Want you play again?');
  }
  if (continueGame === true || againGame === true) {
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

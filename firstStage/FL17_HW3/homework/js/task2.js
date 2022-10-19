let game = confirm("Do you want to play a game?");
let range = 9;
let totalPrize = 0;
let prize = 100;
if (game === false) {
  alert("You did not become a billionaire, but can.");
}
while (game !== false) {
  let randomNumber = Math.floor(Math.random() * range);
  console.log(randomNumber)
  let attempts = 3;
  let possiblePrize = prize;
  for (attempts; attempts >= 1; attempts--) {
    let numberUser = prompt(`
    Choose a roulette pocket number from 0 to ${range - 1}
    Attempts left: ${attempts}
    Total prize: ${totalPrize}
    Possible prize on current attempt: ${possiblePrize}`);
    if (parseInt(numberUser) === randomNumber) {
      totalPrize = totalPrize + possiblePrize;
      game = confirm(`Congratulation, you won! Your prize is: ${possiblePrize} 
        Do you want to continue?`);
      if (game === true) {
        break;
      }
      if (game === false) {
        alert(`Thank you for your participation. Your prize is: ${totalPrize}`);
        game = confirm("Do you want to play again?");
        if (game === false) {
          break;
        }
      }
    }
    possiblePrize = possiblePrize / 2;
    if (attempts === 1) {
      alert(`Thank you for your participation. Your prize is: ${totalPrize}`);
      game = confirm("Do you want to play again?");
      range = 9;
      prize = 100;
    }
  }
  if (attempts > 1) {
    range = range + 4;
    prize = prize * 2;
  }
}

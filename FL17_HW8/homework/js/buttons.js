let paper = document.querySelector(".game-buttons-1");
let rock = document.querySelector(".game-buttons-2");
let scissors = document.querySelector(".game-buttons-3");
let reset = document.querySelector(".game-buttons-4");
let round = 1;
let wins = 0
let loses = 0

import { drawResult } from "./game.js";
import { deleteGameData } from "./game.js";
import { finalResult } from "./game.js";

export function buttons() {
  let arr = ["Paper", "Rock", "Scissors"];
  paper.addEventListener("click", () => {
    let number = Math.floor(Math.random() * 3);
    const element = arr[number];
    if (element === "Paper") {
      drawResult(round, "DRAW", paper.textContent, element);
      round++;
    }
    if (element === "Rock") {
      drawResult(round, "WON", paper.textContent, element);
      round++;
      wins++
    }
    if (element === "Scissors") {
      drawResult(round, "LOST", paper.textContent, element);
      round++;
      loses++
    }
    if(wins === 3){
        finalResult('WON')
        round = 1
        wins = 0
        loses = 0
        return
    }
    if(loses === 3){
        finalResult('LOST')
        round = 1
        wins = 0
        loses = 0
        return
    }
  });
  rock.addEventListener("click", () => {
    let number = Math.floor(Math.random() * 3);
    const element = arr[number];
    if (element === "Paper") {
      drawResult(round, "LOST", rock.textContent, element);
      round++;
      loses++
    }
    if (element === "Rock") {
      drawResult(round, "DRAW", rock.textContent, element);
      round++;
    }
    if (element === "Scissors") {
      drawResult(round, "WON", rock.textContent, element);
      round++;
      wins++
    }
    if(wins === 3){
        finalResult('WON')
        round = 1
        wins = 0
        loses = 0
        return
    }
    if(loses === 3){
        finalResult('LOST')
        round = 1
        wins = 0
        loses = 0
        return
    }
  });
  scissors.addEventListener("click", () => {
    let number = Math.floor(Math.random() * 3);
    const element = arr[number];
    if (element === "Paper") {
      drawResult(round, "WON", scissors.textContent, element);
      round++;
      wins++
    }
    if (element === "Rock") {
      drawResult(round, "LOST", scissors.textContent, element);
      round++;
      loses++
    }
    if (element === "Scissors") {
      drawResult(round, "DRAW", scissors.textContent, element);
      round++;
    }
    if(wins === 3){
        finalResult('WON')
        round = 1
        wins = 0
        loses = 0
        return
    }
    if(loses === 3){
        finalResult('LOST')
        round = 1
        wins = 0
        loses = 0
        return
    }
  });
  reset.addEventListener('click', () => {
    round = 1
    wins = 0
    loses = 0
    deleteGameData()
  })
}

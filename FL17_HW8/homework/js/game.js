let game = document.querySelector('.game')
export function drawResult(round, result, moveFromUser, moveFromPC){
    let div = document.createElement('div')
    if(result === 'WON') div.className = 'game-result won'
    if(result === 'DRAW') div.className = 'game-result draw'
    if(result === 'LOST') div.className = 'game-result lost'
    div.innerHTML = `Round ${round}, ${moveFromUser} vs ${moveFromPC}, You've ${result}`
    game.appendChild(div)
}
export function deleteGameData(){
    let gameResult = document.querySelectorAll('.game-result')
    for (let i = 0; i < gameResult.length; i++) {
        const element = gameResult[i];
        element.remove()
    }
}
export function finalResult(result){
    let div = document.createElement('div')
    div.className = 'game-result final-result'
    div.innerHTML = `You've ${result} in this game`
    game.appendChild(div)
}
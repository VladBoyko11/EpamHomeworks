/* START TASK 1: Your code goes here */
let tr = document.getElementsByTagName('tr')
let td = document.getElementsByTagName('td')
let specialCell = document.querySelector('.specialCell')
for (let index = 0; index < td.length; index++) {
    if(index !== 0 && index !== Number('3') && index !== Number('5') && index !== Number('6')){
        td[index].addEventListener('click', function(){
            td[index].style.backgroundColor = 'yellow'
        })
    }
}
specialCell.addEventListener('click', function(){
    for (let index = 0; index < td.length; index++) {
        if(window.getComputedStyle(td[index]).backgroundColor === 'rgb(255, 255, 255)'){
            td[index].style.backgroundColor = 'green'
        }
    }
    if(window.getComputedStyle(specialCell).backgroundColor === 'rgb(255, 255, 255)'){
        specialCell.style.backgroundColor = 'green'
    }
})
for (let index = 0; index < td.length; index++) {
    if(index === 0 || index === Number('3') || index === Number('6')){
        td[index].addEventListener('click', function(){
            for (let j = index; j < index + Number('3'); j++) {
                if(window.getComputedStyle(td[j]).backgroundColor !== 'rgb(255, 255, 0)'){
                    console.log('dawd')
                    td[j].style.backgroundColor = 'blue'
                }
                
            }
        })
    }
}
/* END TASK 1 */

/* START TASK 2: Your code goes here */
let form = document.getElementsByTagName('form')
let incorrectDiv = document.getElementById('incorrect') 
let correctDiv = document.getElementById('correct')
let textArea = document.querySelector('#textArea')
let submitBtn = document.querySelector('#submitBtn')

form[0].addEventListener('keypress', function(e){
    let regex = /\+380[0-9]{9}/gmi
    let str = textArea.value + e.key
    let match = [0]
    if(str.match(regex) === null){
        incorrectDiv.style.display = 'flex'
        correctDiv.style.display = 'none'
        textArea.style.border = '1px solid red'
        submitBtn.disabled = 'true'
    } else {
        match = str.match(regex)
        submitBtn.removeAttribute('disabled')
    }
    if(match[0] !== str){
        incorrectDiv.style.display = 'flex'
        correctDiv.style.display = 'none'
        textArea.style.border = '1px solid red'
        submitBtn.disabled = 'true'
    } else {
        submitBtn.removeAttribute('disabled')
    }
});
form[0].addEventListener('submit', function(e){
    e.preventDefault()
    incorrectDiv.style.display = 'none'
    correctDiv.style.display = 'flex'
    textArea.style.border = '1px solid black'
})
/* END TASK 2 */

/* START TASK 3: Your code goes here */
let teamAGoals = 0, teamBGoals = 0
let court = document.getElementById('court'), ball = document.getElementById('ball')
let teamA = document.getElementById('teamA'), teamB = document.getElementById('teamB')
let textTeamA = teamA.innerHTML, textTeamB = teamB.innerHTML
let notificationAboutGoal = document.getElementById('notificationAboutGoal')
let sec3 = 3000
let A = false, B= false
function moveToBeginPosition(ball){
    notificationAboutGoal.addEventListener('notification', function(event){
        if(event.detail.message === 'Team A score!'){
            notificationAboutGoal.innerHTML = event.detail.message
            notificationAboutGoal.style.color = 'blue'
        } else {
            notificationAboutGoal.innerHTML = event.detail.message
            notificationAboutGoal.style.color = 'red'
        }
    })
    notificationAboutGoal.dispatchEvent(new CustomEvent('notification', {
        detail: {message: A ? 'Team A score!' : 'Team B score!'}
    }))

    setTimeout(function(){
        ball.style.left = '280px'
        ball.style.top = '145px'
        notificationAboutGoal.innerHTML = ' '
    }, sec3)
}
court.addEventListener('pointerdown', function(e){
    let halfOfBall = 20
    ball.style.left = `${e.offsetX- halfOfBall}px`
    ball.style.top = `${e.offsetY- halfOfBall}px`
    if(e.offsetX >= '30' && e.offsetX <= '45'){
        if(e.offsetY >= '157' && e.offsetY <= '173'){
            B = true
            A = false
            ball.style.left = `${e.offsetX- halfOfBall}px`
            ball.style.top = `${e.offsetY- halfOfBall}px`
            teamBGoals++
            teamB.innerHTML = textTeamB + teamBGoals
            moveToBeginPosition(ball)
        }
    }
    if(e.offsetX >= '555' && e.offsetX <= '570'){
        if(e.offsetY >= '157' && e.offsetY <= '173'){
            B = false
            A = true
            ball.style.left = `${e.offsetX- halfOfBall}px`
            ball.style.top = `${e.offsetY- halfOfBall}px`
            teamAGoals++
            teamA.innerHTML = textTeamA + teamAGoals
            moveToBeginPosition(ball)
        }
    }
})
/* END TASK 3 */

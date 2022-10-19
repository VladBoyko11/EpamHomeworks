let operator = ''

function addEquationToLogs(equation, operator){
    let div = $('<div>', {
        'class': 'logs-item'
    })
    $('.logs').append(div)
    let circle = $('<div>', {
        'class': 'circle'
    })
    let strEquation = equation[0] + ' ' + operator + ' ' + equation[1] + ' = ' + $('.inputValue').val()
    let p = $('<p>', {
        'class': 'equation'
    })
    p.html(strEquation)
    let closeIcon = $('<span>', {
        'class': 'closeIcon'
    })
    closeIcon.html('<i class="fas fa-times"></i>')
    div.prepend(circle)
    div.append(p)
    div.append(closeIcon)
    $('.logs-item').css('font-size', '20px')
    $('.closeIcon').css('font-size', '30px')
    circle.on('click', function(){
        $(this).toggleClass('toggleColor')
    })
    if(p.html().includes('48')){
        p.css('text-decoration', 'underline')
    }
    closeIcon.on('click', function(){
        $(this).parent().remove()
    })
}

$('.buttons-row-item').on('click', function(){
    let number = this.innerHTML
    if(number === ''){
        return
    } else 
    if(number === 'C'){
        $('.inputValue').val('0')
        return
    }
    if(number === '='){
        let arr = $('.inputValue').val().split(operator)
        if(operator === '/'){
             if(arr[1] === '0'){
                 $('.inputValue').val('ERROR')
                 return
             } else {
                $('.inputValue').val(Number(arr[0]) / Number(arr[1]))
                addEquationToLogs(arr, operator)
                return
             }
            }
        if(operator === '*'){ 
            $('.inputValue').val(Number(arr[0]) * Number(arr[1]))
            addEquationToLogs(arr, operator)
            return
        }
        if(operator === '+'){ 
            $('.inputValue').val(Number(arr[0]) + Number(arr[1]))
            addEquationToLogs(arr, operator)
                return
        }
        if(operator === '-'){
            $('.inputValue').val(Number(arr[0]) - Number(arr[1]))
            addEquationToLogs(arr, operator)
                return
            }
        return
    }
    if(isNaN(number)){
        let lastChar = $('.inputValue').val().slice($('.inputValue').val().length - 1, $('.inputValue').val().length)
        if(isNaN(lastChar)){
            operator = number
            $('.inputValue').val($('.inputValue').val().slice(0, $('.inputValue').val().length - 1) + number)
        } else {
            operator = number
            $('.inputValue').val($('.inputValue').val() + number)
        }
    } else {
        if($('.inputValue').val() !== '0'){
            $('.inputValue').val($('.inputValue').val() + number)
        } else {
            $('.inputValue').val(number)
        }
    }
})
$('.logs').scroll(function(){
    console.log('Scroll Top: ' + $('.logs').scrollTop())
})
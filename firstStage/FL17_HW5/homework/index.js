function isEquals(num1, num2){
    return num1 === num2;
}
function isBigger(num1, num2){
    return num1 > num2
}
function storeNames(...str){
    let array = []
    for (let index = 0; index < str.length; index++) {
        array[index] = str[index]
    }
    return array
}
function getDifference(num1, num2){
    if(num1 > num2){
        return num1 - num2
    }
    if(num1 < num2){
        return num2 - num1
    }
    if(num1 === num2){
        return 0
    }
}
function negativeCount(arr){
    let count = 0
    for (let index = 0; index < arr.length; index++) {
        if(arr[index] < 0){
            count++
        }
    }
    return count
}
function letterCount(str1, str2){
    let arr1 = str1.toLocaleLowerCase().split('')
    let arr2 = str2.toLocaleLowerCase().split('')
    let count = 0
    for (const iter1 of arr1) {
        for (const iter2 of arr2) {
            if(iter1 === iter2){
                count++
            }
        } 
    }
    return count
}
function countPoints(arr){
    let points = 0
    const a = 3
    for (const iterator of arr) {
        let array = iterator.split(':')
        if(Number(array[0]) > Number(array[1])){
            points += a
        }
        if(Number(array[0]) === Number(array[1])){
            points += 1
        }
    }
    return points
}
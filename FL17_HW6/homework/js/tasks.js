// write your code here
function getMaxEventElement(arr){
    let lenght = arr.lenght
    arr.reduce((value, current) => {
        return arr.push(Number(current))
    })
    arr = arr.slice(lenght, arr.lenght)
    let result = Math.max.apply(null, arr)
    return result
}
let a = 3;
let b = 5;
({a, b} = {a: b, b: a})
function getValue(value){
    return value ?? '-'
}
function getObjFromArray(arr){
    return Object.fromEntries(arr)
}
function addUniqueId(obj) {
    let object = Object.assign({}, obj)
    object.id = Symbol(1)
    return object
}
const obj1 = {name: 'Nick'}
function getRegroupedObject(obj) {
    let {university, id, age} = obj.details
    let {name} = obj
    return {university: university, details: {id: id, age: age, name:name}}
}
function getArrayWithUniqueElements(arr) {
    let set = new Set()
    arr.forEach(element => {
        set.add(element)
    });
    return set
}
function hideNumber(phoneNumber) {
    return phoneNumber.slice(Number('6'), Number('10')).padStart(Number('10'), '*')
}
function add(a = function() { 
    return new Error('a is required')
}, b = function() {
     return new Error('b is required')
    }) {
    try{
        if(typeof a === 'function') {
            throw a()
        }
        if(typeof b === 'function') {
            throw b()
        } else { 
            return a + b 
        }
    } catch(error){
        return error
    }
}
function generatorIterableSequence(){
    let iterable = {}
    iterable[Symbol.iterator] = function* generator(){
        yield 'I',
        yield 'love',
        yield 'EPAM'
    };
    return iterable
}

function reverseNumber(num) {
  if(typeof num === 'number'){
    let result = 0;
    while (num) {
      result = result * 10 + num % 10;
      num = num / 10 | 0;
    }
    return result;
  } else {
      return 'Invalid input data'
  }
}
console.log(reverseNumber(12345));
console.log(reverseNumber(-54321));
console.log(reverseNumber('dawdawd'));
console.log('-------------------');
function forEach(arr, func) {
  let array = [];
  for (const key in arr) {
    const element = arr[key];
    array.push(func(element));
  }
  return array;
}
forEach([2, 5, 8], function (el) {
  console.log(el);
});
console.log('-------------------');
function map(arr, func) {
  return forEach(arr, func);
}
console.log(
  map([2, 5, 8], function (el) {
    return el + 3;
  })
);
console.log('-------------------');
function filter(arr, func) {
  let array = [];
  let result = [];
  let i = 0;
  function forArray(el) {
    return el;
  }
  array = forEach(arr, forArray);
  for (let index = 0; index < array.length; index++) {
    if (func(array[index])) {
      result[i] = array[index];
      i++;
    }
  }
  return result;
}
console.log(
  filter([2, 5, 1, 3, 8, 6], function (el) {
    return el > 3;
  })
);
console.log('-------------------');
let data = [
  {
    _id: '5b5e3168c6bf40f2c1235cd6',
    index: 0,
    age: 39,
    eyeColor: 'green',
    name: 'Stein',
    favoriteFruit: 'apple',
  },
  {
    _id: '5b5e3168e328c0d72e4f27d8',
    index: 1,
    age: 38,
    eyeColor: 'blue',
    name: 'Cortez',
    favoriteFruit: 'strawberry',
  },
  {
    _id: '5b5e3168cc79132b631c666a',
    index: 2,
    age: 2,
    eyeColor: 'blue',
    name: 'Suzette',
    favoriteFruit: 'apple',
  },
  {
    _id: '5b5e31682093adcc6cd0dde5',
    index: 3,
    age: 17,
    eyeColor: 'green',
    name: 'Weiss',
    favoriteFruit: 'banana',
  },
];
function getAdultAppleLovers(data) {
  let obj = [];
  let array = [];
  obj = filter(data, function (el) {
    return el.age > 18 && el.favoriteFruit === 'apple';
  });
  for (let index = 0; index < obj.length; index++) {
    array[index] = obj[index].name;
  }
  return array;
}
console.log(getAdultAppleLovers(data));
console.log('-------------------');
function getKeys(obj) {
    let array = [];
    let index = 0;
    for (const key in obj) {
      array[index] = key;
      index++;
    }
    return array;
}
console.log(getKeys({ keyOne: 1, keyTwo: 2, keyThree: 3 }));
console.log('-------------------');
function getValues(obj) {
    let array = [];
    let index = 0;
    for (const key in obj) {
      array[index] = obj[key];
      index++;
    }
    return array;
}
console.log(getValues({ keyOne: 1, keyTwo: 2, keyThree: 3 }));
console.log('-------------------');
function showFormattedDate(dateObj) {
  let array = dateObj.toDateString().split(' ');
  return `It is ${array[2]} of ${array[1]}, ${array[3]}`;
}
console.log(showFormattedDate(new Date()));

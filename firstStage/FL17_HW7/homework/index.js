// Your code goes here
function getAge(dateOfBirth) {
  let milisec = new Date() - dateOfBirth;
  const year1970 = 1970;
  let year = new Date(milisec).getFullYear() - year1970;
  return year;
}
// console.log(getAge(new Date(2000, 9, 9)))
// console.log(getAge(new Date(2000, 9, 10)))
function getWeekDay(date) {
  let days = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday'
  ];
  for (let index = 0; index < days.length; index++) {
    if (new Date(date).getDay() === index) {
      return days[index];
    }
  }
}
// console.log(getWeekDay(Date.now()))
function getAmountDaysToNewYear() {
  let dateNow = new Date(),
    newYear = new Date(`${dateNow.getFullYear()}, 1, 1`);
  const milisecToSec = 1000,
    secToMin = 60,
    minToHours = 60,
    hoursToDays = 24,
    daysYear = 365.25;
  let daysFromNewYear =
    (dateNow - newYear) /
      (milisecToSec * secToMin * minToHours * hoursToDays) |
    0;
  if (daysFromNewYear === 0) {
    return daysYear;
  }
  return daysYear - daysFromNewYear | 0;
}
// console.log(getAmountDaysToNewYear())
function getProgrammersDay(year) {
  const days = 255,
    SecToMilisec = 1000,
    MinToSec = 60,
    HoursToMin = 60,
    DaysToHours = 24;
  let milisec = days * DaysToHours * HoursToMin * MinToSec * SecToMilisec;
  let date = new Date(`${year}, 1, 1`);
  date.setMilliseconds(milisec);
  return (
    date.getDate() +
    ' Sep, ' +
    date.getFullYear() +
    ' (' +
    getWeekDay(date) +
    ')'
  );
}
// console.log(getProgrammersDay(2020))
// console.log(getProgrammersDay(2019))
function howFarIs(day) {
  let days = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday'
  ];
  day = day[0].toUpperCase() + day.slice(1);
  let date = new Date(),
    count = 0,
    daysInWeek = 7,
    indexDay;
  if (getWeekDay(date) === day) {
    return `Hey, today is ${day}`;
  }
  for (let index = 0; index < days.length; index++) {
    if (days[index] === day) {
      indexDay = index;
    }
  }
  indexDay++;
  for (let index = date.getDay() + 1; index <= days.length; index++) {
    if (index === indexDay) {
      return `It's ${count} day(s) left till ${day}.`;
    } else {
      if (index === daysInWeek) {
        index = 0;
      }
      count++;
    }
  }
}
// console.log(howFarIs('Thursday'))
function isValidIdentifier(str) {
  let regexp = /^\D[a-zA-Z_/$\d]+/gim;
  if (str.match(regexp) === null) {
    return false;
  }
  if (regexp.exec(str)[0] === str) {
    return true;
  } else {
    return false;
  }
}
// console.log(isValidIdentifier('myVar!')) // false
// console.log(isValidIdentifier('myVar$')) // true
// console.log(isValidIdentifier('myVar_1')) // true
// console.log(isValidIdentifier('1_myVar')) // false
function capitalize(str) {
  str = str.replace(/[a-z]+/gi, (word) => {
    return word[0].toUpperCase() + word.substr(1);
  });
  return str;
}
// console.log(capitalize('My name is John Smith. I am 27.'))
function isValidAudioFile(file) {
  let regexp =
    /[a-zA-Z]+\.mp3|[a-zA-Z]+\.flac|[a-zA-Z]+\.alac|[a-zA-Z]+\.aac/gim;
  if (file.match(regexp) === null) {
    return false;
  }
  if (regexp.exec(file)[0] === file) {
    return true;
  } else {
    return false;
  }
}
// console.log(isValidAudioFile('file.mp4'))
// console.log(isValidAudioFile('my_file.mp3'))
// console.log(isValidAudioFile('file.mp3'))
// console.log(isValidAudioFile('file.flac'))
function getHexadecimalColors(str) {
  let regexp = /#[a-zA-Z\d]{6}\b|#[a-zA-Z\d]{3}\b/gim;
  if (str.match(regexp) === null) {
    return [];
  }
  return str.match(regexp);
}
// const testString = "color: #3f3; background-color: #AA00ef; and: #abcd"
// console.log(getHexadecimalColors('red and #0000'))
// console.log(getHexadecimalColors(testString))
function isValidPassword(password) {
  let regexp = /(?=.*[A-Z])(?=.*[a-z])(?=.*[\d])[a-zA-Z\d!@#$%^&*]{8,}/;
  return regexp.test(password);
}
// console.log(isValidPassword('agent007')) // false (no uppercase letter)
// console.log(isValidPassword('AGENT007')) // false (no lowercase letter)
// console.log(isValidPassword('AgentOOO')) // false (no numbers)
// console.log(isValidPassword('Age_007')) // false (too short)
// console.log(isValidPassword('Agent007')) // true
function addThousandsSeparators(number) {
  if (Number(number)) {
    number = String(number);
    let regexp = /\B(?=(\d{3})+(?!\d))/g;
    number = number.replace(regexp, ',');
    return number;
  }
}
// console.log(addThousandsSeparators("1234567890"));
// console.log(addThousandsSeparators(1234567890));
function getAllUrlsFromText(text){
let regexp = /(?=http)[a-zA-Z/.!@#$%^&*/://]+/g
    if (text.match(regexp) === null) {
        return [];
    }
    return text.match(regexp)
}
// const text1 = 'We use https://translate.google.com/ to translate some words and phrases from https://angular.io/ ';
// const text2 = 'JavaScript is the best language for beginners!'
// console.log(getAllUrlsFromText(text1))
// console.log(getAllUrlsFromText(text2))

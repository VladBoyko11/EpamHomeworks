let summ = prompt("Input initial amount of money");
while (isNaN(parseFloat(summ))) {
  alert("Invalid input data");
  summ = prompt("Input initial amount of money again");
}
while (summ < 1000) {
  alert("Invalid input data");
  summ = prompt("Input initial amount of money again");
}
summ = parseFloat(summ);
let countYears = prompt("Input number of years");
let flag = true;
while (flag === true) {
    countYears = Number(countYears);
  if (typeof countYears === "number" && countYears >= 1) {
    console.log("adwdawdaw");
    flag = false;
  } else {
    alert("Invalid input data");
    countYears = prompt("Input number of years again");
  }
}
let percent = prompt("Input percentage of a year");
while (isNaN(parseFloat(percent))) {
  alert("Invalid input data");
  percent = prompt("Input percentage of a year again");
}
while (percent > 100) {
  alert("Invalid input data");
  percent = prompt("Input percentage of a year again");
}
percent = parseFloat(percent);
let result = (function calculate(summ, countYears, percent) {
  let res = summ;
  for (let index = 1; index <= countYears; index++) {
    res = res + percent / 100 * res;
  }
  return res;
})(summ, countYears, percent);
alert(`
Initial amount: ${summ}  
Number of years: ${countYears} 
Percentage of year: ${percent}  
Total profit: ${(result - summ).toFixed(2)}  
Total amount: ${result.toFixed(2)}`);

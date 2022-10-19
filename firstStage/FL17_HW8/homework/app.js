const appRoot = document.getElementById('app-root');
let header = document.createElement('header');
document.body.appendChild(header);
let h1 = document.createElement('h1');
h1.className = 'headerCountries';
h1.innerHTML = 'Countries Search';
header.appendChild(h1);
let form = document.createElement('form');
form.className = 'formHeader';
form.action = '#';
let inputsTypeOfSearch = document.createElement('div');
let inputs = document.createElement('div');
inputs.className = 'inputs';
inputsTypeOfSearch.className = 'inputsTypeOfSearch';
let p1 = document.createElement('p');
p1.innerHTML = 'Please choose type of search:';
p1.className = 'p1';
let p2 = document.createElement('p');
p2.innerHTML = 'Please choose search query:';
let label1 = document.createElement('label');
label1.innerHTML = 'By Region';
let label2 = document.createElement('label');
label2.innerHTML = 'By Language';
label1.setAttribute('for', 'inputRegion');
label2.setAttribute('for', 'inputLanguage');
let inputRegion = document.createElement('input');
inputRegion.id = 'inputRegion';
inputRegion.name = 'inputRadio';
inputRegion.type = 'radio';
let inputLanguage = document.createElement('input');
inputLanguage.id = 'inputLanguage';
inputLanguage.name = 'inputRadio';
inputLanguage.innerHTML = 'inputLanguage';
inputLanguage.type = 'radio';
inputsTypeOfSearch.appendChild(p1);
inputs.appendChild(inputRegion);
inputs.appendChild(label1);
let br = document.createElement('br');
inputs.appendChild(br);
inputs.appendChild(inputLanguage);
inputs.appendChild(label2);
form.appendChild(inputsTypeOfSearch);
inputsTypeOfSearch.appendChild(inputs);
document.body.appendChild(form);
let divSelect = document.createElement('div');
divSelect.className = 'divSelect';
let select = document.createElement('select');
select.id = 'select';
select.disabled = 'true';
let arrLanguage = externalService.getLanguagesList();
let i = 0;
for (let index = 0; index < arrLanguage.length; index++) {
  let optionLanguage = document.createElement('option');
  if (index === 0) {
    optionLanguage.innerHTML = 'Select value';
    optionLanguage.className = 'optionLanguage';
  } else {
    optionLanguage.innerHTML = arrLanguage[i];
    i++;
    optionLanguage.className = 'optionLanguage';
  }
  select.appendChild(optionLanguage);
  optionLanguage.style.display = 'none';
}
let arrRegions = externalService.getRegionsList();
i = 0;
for (let index = 0; index < arrRegions.length + 1; index++) {
  let option = document.createElement('option');
  if (index === 0) {
    option.innerHTML = 'Select value';
    option.className = 'optionRegion';
  } else {
    option.innerHTML = arrRegions[i];
    i++;
    option.className = 'optionRegion';
  }
  select.appendChild(option);
}
divSelect.appendChild(p2);
divSelect.appendChild(select);
form.appendChild(divSelect);
inputRegion.addEventListener('input', function () {
  select.removeAttribute('disabled');
  if (this.checked) {
    let optionLanguage = document.querySelectorAll('.optionLanguage');
    for (let index = 0; index < optionLanguage.length; index++) {
      optionLanguage[index].style.display = 'none';
    }
    let option = document.querySelectorAll('.optionRegion');
    for (let index = 0; index < option.length; index++) {
      option[index].style.display = 'block';
    }
    option[0].selected = 'true';
  }
});
inputLanguage.addEventListener('input', function () {
  select.removeAttribute('disabled');
  if (this.checked) {
    let optionLanguage = document.querySelectorAll('.optionLanguage');
    for (let index = 0; index < optionLanguage.length; index++) {
      optionLanguage[index].style.display = 'block';
    }
    let option = document.querySelectorAll('.optionRegion');
    for (let index = 0; index < option.length; index++) {
      option[index].style.display = 'none';
    }
    optionLanguage[0].selected = 'true';
  }
});
let divTable = document.createElement('div');
divTable.className = 'tableForData';
if (select.disabled) {
  divTable.innerHTML = 'No items, please choose search query';
  document.body.appendChild(divTable);
}

function sortCountryName(arrOBJ){
  let tr = 1
  let fl = -1
  arrOBJ.sort((a, b) => a.name > b.name ? tr : fl);
}

function sortArea(arrOBJ){
  arrOBJ.sort((a, b) => Number(a.area) - Number(b.area))
}

function deleteTable(){
  if(document.querySelector('.table')){
    document.body.removeChild(document.querySelector('.table'))
  }
}
function createTable(){
  let table = document.createElement('table')
  table.className = 'table'
  table.setAttribute('border', '1');
  let tr = document.createElement('tr');
  let arrTable = ['Country name', 'Capital', 'World Region', 'Languages', 'Area', 'Flag']
  for (let index = 0; index < arrTable.length; index++) {
    let td = document.createElement('td');
    td.className = `tableHead${index}`
    let span = document.createElement('span')
    span.innerHTML = '&#11021'
    span.className = `arrow${index}`
    let index4 = 4
    let index0 = 0
    if(index === index0 || index === index4){
      td.innerHTML = arrTable[index]
      td.appendChild(span)
    } else {
      td.innerHTML = arrTable[index]; 
    }
    tr.appendChild(td);
  }
  table.appendChild(tr);
  document.body.appendChild(table);
  return table
}
function renderOnPageCountryList(countryList){
  deleteTable()
  let table = createTable()
  for (let index = 0; index < countryList.length; index++) {
    tr = document.createElement('tr');
    let td1 = document.createElement('td')
    td1.innerHTML = countryList[index].name
    tr.appendChild(td1)
    let td2 = document.createElement('td')
    td2.innerHTML = countryList[index].capital
    tr.appendChild(td2)
    let td3 = document.createElement('td')
    td3.innerHTML = countryList[index].region
    tr.appendChild(td3)
    let td4 = document.createElement('td')
    for (const key in countryList[index].languages) {
      if (Object.hasOwnProperty.call(countryList[index].languages, key)) {
        if(countryList[index].languages.length === 1) {
          td4.innerHTML = countryList[index].languages[key]
        } else {
          td4.innerHTML = td4.innerHTML + countryList[index].languages[key] + ', '
        }
      }
    }
    tr.appendChild(td4)
    let td5 = document.createElement('td')
    td5.innerHTML = countryList[index].area
    tr.appendChild(td5)
    let td6 = document.createElement('td')
    td6.innerHTML = `<img src=${countryList[index].flagURL}>`
    tr.appendChild(td6)
    table.appendChild(tr)
  }
  document.body.appendChild(table);
}
select.addEventListener('change', function () {
  if(document.querySelector('.tableForData')){
    document.body.removeChild(document.querySelector('.tableForData'));
  }
  let countryList
  if(inputRegion.checked){
    countryList = externalService.getCountryListByRegion(this.value);
  } else {
    countryList = externalService.getCountryListByLanguage(this.value);
  }
  deleteTable()
  createTable()
  renderOnPageCountryList(countryList)
  let countryName = document.querySelector('.arrow0')
  let area = document.querySelector('.arrow4')
  let flag1 = true
  let flag2 = true
  function clickCountryName(){
    if(flag1){
      sortCountryName(countryList)
      deleteTable()
      renderOnPageCountryList(countryList)
      countryName = document.querySelector('.arrow0')
      countryName.innerHTML = '&#129045'
      document.querySelector('.tableHead0').appendChild(countryName)
      flag1 = false
    } else {
      countryList.reverse()
      deleteTable()
      renderOnPageCountryList(countryList)
      countryName = document.querySelector('.arrow0')
      countryName.innerHTML = '&#129047'
      document.querySelector('.tableHead0').appendChild(countryName)
      flag1 = true
    }
    countryName = document.querySelector('.arrow0')
    countryName.addEventListener('click', clickCountryName)
    area = document.querySelector('.arrow4')
    area.addEventListener('click', clickArea)
  }
  function clickArea(){
    if(flag2){
      sortArea(countryList)
      deleteTable()
      renderOnPageCountryList(countryList)
      area = document.querySelector('.arrow4')
      area.innerHTML = '&#129045'
      document.querySelector('.tableHead4').appendChild(area)
      flag2 = false
    } else {
      countryList.reverse()
      deleteTable()
      renderOnPageCountryList(countryList)
      area = document.querySelector('.arrow4')
      area.innerHTML = '&#129047'
      document.querySelector('.tableHead4').appendChild(area)
      flag2 = true
    }
    area = document.querySelector('.arrow4')
    area.addEventListener('click', clickArea)
    countryName = document.querySelector('.arrow0')
    countryName.addEventListener('click', clickCountryName)
  }
  countryName.addEventListener('click', clickCountryName)
  area.addEventListener('click', clickArea)
});

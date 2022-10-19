const requestURL = 'https://jsonplaceholder.typicode.com/users';

function sendRequest(method, url) {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open(method, url);
    xhr.responseType = 'json';
    xhr.onload = () => {
      if (Math.floor(xhr.status / 1 % Number('10')) === Number('2')) {
        reject(xhr.response);
      } else {
        resolve(xhr.response);
      }
    };
    xhr.send();
  });
}

function addLine(field_label, field_name, i, data) {
    let form = document.getElementById('form' + i);
    let input = document.createElement('input');
    input.name = field_label
    input.value = data[i][field_name];
    if (typeof data[i][field_name] === 'object') {
      for (let key in data[i][field_name]) {
        if (typeof data[i][field_name][key] === 'object') {
          // eslint-disable-next-line guard-for-in
          for (let key2 in data[i][field_name][key]) {
            let input = document.createElement('input');
            input.name = key2
            input.value = data[i][field_name][key][key2] + '';
            input.setAttribute('id', key2 + i);
            form.appendChild(input);
          }
        } else {
          let input = document.createElement('input');
          input.name = key
          input.value = data[i][field_name][key] + ' ';
          input.setAttribute('id', key + i);
          form.appendChild(input);
        }
      }
    } else {
      input.setAttribute('id', field_name + i);
      form.appendChild(input);
    }
  }

  function updateForm(id, body){
    return fetch(`${requestURL}/${id}`, {
      method: 'PUT',
      headers: { 'Content-type': 'application/json; charset=UTF-8'},
      body: JSON.stringify(body)
    })
}
function deleteForm(event, id, body){
  event.target.parentNode.remove();
  return fetch(`${requestURL}/${id}`, {
    method: 'PUT',
    headers: { 'Content-type': 'application/json; charset=UTF-8'},
    body: JSON.stringify(body)
  })
}
function toObject(names, values) {
  let result = {};
  for (let i = 0; i < names.length; i++) {
        result[names[i]] = values[i];
       }
  return result;
}

function spinner(){
  let spinner = document.querySelector('.img-spinner')
  spinner.style.display = 'block'
  document.body.style.opacity = '0.5'
  setTimeout(() => {
    document.body.style.opacity = '1'
    spinner.style.display = 'none'
  }, Number('1500'))
}

sendRequest('GET', requestURL)
  .then((data) => {
    for (let i = 0; i < data.length; i++) {
      let form = document.createElement('form');
      form.setAttribute('id', 'form' + i);
      document.body.appendChild(form);
      let idForm = document.createElement('input')
      idForm.id = `idForm${i}`
        idForm.value = i + 1
        idForm.hidden = 'true'
        form.appendChild(idForm)
      addLine('Name', 'name', i, data);
      addLine('Username', 'username', i, data);
      addLine('Email', 'email', i, data);
      addLine('Address', 'address', i, data);
      addLine('Phone', 'phone', i, data);
      addLine('Website', 'website', i, data);
      addLine('Company', 'company', i, data);
      let but_del = document.createElement('button');
      but_del.innerHTML = 'Delete';
      let but_upd = document.createElement('button');
      but_upd.innerHTML = 'Update';
      form.appendChild(but_del);
      form.appendChild(but_upd);
      but_upd.addEventListener('click', (event) => {
          event.preventDefault()
          spinner()
          let form = but_upd.parentElement
          let id = form.firstChild.value 
          let formObj = new FormData(form)
          let keys = []
          let values = []
          for (const iterator of formObj.keys()) {
            keys.push(iterator)
            values.push(formObj.get(iterator))
          }
          let obj = toObject(keys, values)
          updateForm(id, obj).then((data) => {
            data.json().then(value => { 
              console.log(value) 
            })
        })
      })
      but_del.addEventListener('click', (event) => {
        event.preventDefault();
        spinner();
        let form = but_del.parentElement
          let id = form.firstChild.value 
          let formObj = new FormData(form)
          let keys = []
          let values = []
          for (const iterator of formObj.keys()) {
            keys.push(iterator)
            values.push(formObj.get(iterator))
          }
          let obj = toObject(keys, values)
          deleteForm(event, id, obj).then((data) => {
            data.json().then(value => {
              console.log(value)
            })
          })
      });
    }
  })
  .catch((err) => console.log(err));
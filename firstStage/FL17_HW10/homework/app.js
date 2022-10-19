const root = document.getElementById('root');
let url = new URL('http://127.0.0.1:5500/Practice/fl-17/FL17_HW10/homework#');
url.hash = '/tweet'
history.pushState({page: 1}, 'tweet', url);
let tweetItems = document.getElementById('tweetItems');
let addTweet = document.body.querySelector('.addTweet');
let modifyItemInput = document.getElementById('modifyItemInput'),
saveModifiedItem = document.getElementById('saveModifiedItem');
let list = document.getElementById('list');
let alertMessage = document.getElementById('alertMessage');
let alertMessageText = document.getElementById('alertMessageText');
let modifyItem = document.getElementById('modifyItem');
let navigationButtons = document.getElementById('navigationButtons');
let divLiked = document.createElement('div');
let cancelModification = document.getElementById('cancelModification');
let modifyItemHeader = document.getElementById('modifyItemHeader')
let btnBack = cancelModification.cloneNode();
let keyEdit = 0
btnBack.id = 'btnBack';
btnBack.innerHTML = 'Back';
divLiked.id = 'divLiked';
divLiked.className = 'hidden';
divLiked.appendChild(btnBack);
let ulLiked = document.createElement('ul');
ulLiked.id = 'ulLiked';
divLiked.appendChild(ulLiked);
root.appendChild(divLiked);
let key = 0;
let hidden = document.querySelectorAll('.hidden');
let btnGoToLikedTweets = document.createElement('button');
btnGoToLikedTweets.innerHTML = 'Go to liked';
navigationButtons.appendChild(btnGoToLikedTweets);
btnGoToLikedTweets.addEventListener('click', function () {
  let urlLiked = url;
  urlLiked.hash = '/liked';
  tweetItems.style.display = 'none';
  history.pushState({page: 3}, 'liked', urlLiked);
  history.forward();
  console.log(history);
  divLiked.style.display = 'block';
});
function renderTweetsOnPage(keys) {
  let li = document.createElement('li');
  let btnRemove = document.createElement('button'),
  btnLike = document.createElement('button');
  let span = document.createElement('span')
  if(key === keys){
    span.id = `span${key}`
    span.innerHTML = localStorage.getItem(key);
    li.appendChild(span)
    li.id = key;
  } else {
    span.id = `span${key}`
    span.innerHTML = localStorage.getItem(key);
    li.appendChild(span)
    li.id = key;
  }
  btnRemove.innerHTML = 'remove', btnLike.innerHTML = 'like';
  btnRemove.className = `btnRemove`, btnLike.className = `btnLike`;
  btnLike.style.float = 'right', btnRemove.style.float = 'right';
  li.appendChild(btnLike), li.appendChild(btnRemove);
  li.style.margin = '10px';
  list.appendChild(li);
  let index = li.id
  btnLike.addEventListener('click', function () {
    if (btnLike.innerHTML === 'like') {
      btnLike.innerHTML = 'unlike';
      let liLiked = document.createElement('li');
      liLiked = li.cloneNode();
      liLiked.innerHTML = li.innerHTML;
      liLiked.childNodes[0].id = `spanLiked${index}`
      liLiked.id = `divLiked${index}`;
      ulLiked.appendChild(liLiked);
      alertMessageOnPage(`Hooray! You liked tweet with id ${Number(index) + 1}`);
      liLiked.childNodes['1'].addEventListener('click', function () {
        btnLike.innerHTML = 'like';
        let li = document.getElementById(`divLiked${index}`);
        ulLiked.removeChild(li);
        alertMessageOnPage(
          `Sorry you no longer like tweet with id ${Number(index) + 1}`
        );
      });
      liLiked.childNodes['2'].addEventListener('click', function () {
        let liLike = document.getElementById(`divLiked${index}`);
        ulLiked.removeChild(liLike);
        li.remove();
        localStorage.removeItem(index)
      });
    } else {
      btnLike.innerHTML = 'like';
      let liLike = document.getElementById(`divLiked${index}`);
      ulLiked.removeChild(liLike);
      alertMessageOnPage(`Sorry you no longer like tweet with id ${index + 1}`);
    }
  });
  btnRemove.addEventListener('click', function () {
    let liLike = document.getElementById(`divLiked${index}`);
    if(liLike !== null) {
      ulLiked.removeChild(liLike);
      li.remove();
      localStorage.removeItem(index)  
    } else {
      li.remove();
      localStorage.removeItem(index)
    }
  });
  span.addEventListener('click', function(){
    let urlAdd = url;
    urlAdd.hash = `/edit/:${span.parentNode.id}`;
    tweetItems.style.display = 'none';
    modifyItem.style.display = 'block';
    modifyItemHeader.innerHTML = 'Edit tweet'
    history.pushState({page: 4}, 'edit', urlAdd);
    history.forward();
    modifyItemInput.value = '';
    console.log(history);
    keyEdit = span.parentNode.id
  })
  key++;
}
for (let index = 0; index < localStorage.length; index++) {
  let keys = localStorage.key(index)
  renderTweetsOnPage(keys)
}
function cancelButton() {
  history.back();
  tweetItems.style.display = 'block';
  divLiked.style.display = 'none';
  for (let index = 0; index < hidden.length; index++) {
    hidden[index].style.display = 'none';
  }
}
let sec = 2500;
function alertMessageOnPage(message) {
  alertMessage.style.display = 'block';
  alertMessageText.innerHTML = message;
  setTimeout(function () {
    alertMessage.style.display = 'none';
    alertMessageText.innerHTML = '';
  }, sec);
}
addTweet.addEventListener('click', function () {
  let urlAdd = url;
  urlAdd.hash = '/add';
  tweetItems.style.display = 'none';
  modifyItem.style.display = 'block';
  modifyItemHeader.innerHTML = 'Add tweet'
  history.pushState({page: 2}, 'add', urlAdd);
  history.forward();
  modifyItemInput.value = '';
  console.log(history);
});
cancelModification.addEventListener('click', function () {
  cancelButton();
});
btnBack.addEventListener('click', function(){
  cancelButton();
})
saveModifiedItem.addEventListener('click', function () {
  if(modifyItemHeader.innerHTML === 'Add tweet') {
    let flag = true;
  for (let index = 0; index < localStorage.length; index++) {
    if (modifyItemInput.value === localStorage.getItem(localStorage.key(index))) {
      flag = false;
    }
  }
  if (flag === true) {
    let keys = []
    for (let index = 0; index < localStorage.length; index++) {
      keys[index] = localStorage.key(index)
    }
    keys.sort((a, b) => {
      return a - b
    })
    if(isNaN(Number(keys[keys.length - 1]))){
      key = 0
    } else {
      key = Number(keys[keys.length - 1])
      key++
    }
    localStorage.setItem(key, modifyItemInput.value);
    renderTweetsOnPage(key);
    cancelButton();
  } else {
    let message = 'Error! You can`t tweet about that';
    alertMessageOnPage(message);
  }
  }
  if(modifyItemHeader.innerHTML === 'Edit tweet') {
    let flag = true;
    for (let index = 0; index < localStorage.length; index++) {
    if (modifyItemInput.value === localStorage.getItem(localStorage.key(index))) {
      flag = false;
      }
    }
  if (flag === true) {
    localStorage.setItem(Number(keyEdit), modifyItemInput.value);
    let li = document.getElementById(Number(keyEdit))
    let liLiked = document.getElementById(`divLiked${keyEdit}`)
    if(liLiked !== null){
      let liLiked = document.getElementById(`divLiked${keyEdit}`)
      liLiked.childNodes[0].innerHTML = modifyItemInput.value
    } else {
      console.log('liLiked is null')
    }
    li.childNodes[0].innerHTML = modifyItemInput.value
    cancelButton();
  } else {
    let message = 'Error! You can`t tweet about that';
    alertMessageOnPage(message);
  }
  }
});

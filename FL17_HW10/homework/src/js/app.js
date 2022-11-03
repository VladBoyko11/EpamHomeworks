import {renderTweetsOnPage, alertMessageOnPage, keyEdit} from './renderTweets.js'
import {cancelButton} from './cancelBtn.js'
import {addTweet} from './addTweetBtn.js'
import '../scss/style.scss'

const root = document.getElementById('root');
let url = new URL('http://127.0.0.1:5500/Practice/fl-17/FL17_HW10/homework/src#');
url.hash = '/tweet'
history.pushState({page: 1}, 'tweet', url);
let modifyItemInput = document.getElementById('modifyItemInput')
let saveModifiedItem = document.getElementById('saveModifiedItem');
let navigationButtons = document.getElementById('navigationButtons');
let divLiked = document.createElement('div');
let cancelModification = document.getElementById('cancelModification');
let modifyItemHeader = document.getElementById('modifyItemHeader')
let btnBack = cancelModification.cloneNode();
let btnGoToLikedTweets = document.createElement('button');
let tweetItems = document.getElementById('tweetItems');
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

btnGoToLikedTweets.innerHTML = 'Go to liked';
  navigationButtons.appendChild(btnGoToLikedTweets);
  btnGoToLikedTweets.addEventListener('click', function () {
    let urlLiked = url;
    urlLiked.hash = '/liked';
    tweetItems.style.display = 'none';
    history.pushState({ page: 3 }, 'liked', urlLiked);
    history.forward();
    console.log(history);
    divLiked.style.display = 'block';
  });

for (let index = 0; index < localStorage.length; index++) {
  let keys = localStorage.key(index)
  renderTweetsOnPage(key, keys, url)
  key++
}
addTweet(url)

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
    renderTweetsOnPage(key, keys, url)
    key++
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

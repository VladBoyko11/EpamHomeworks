export function alertMessageOnPage(message) {
  let alertMessage = document.getElementById('alertMessage');
  let alertMessageText = document.getElementById('alertMessageText');
  alertMessage.style.display = 'block';
  alertMessageText.innerHTML = message;
  let sec = 2500;
  setTimeout(function () {
    alertMessage.style.display = 'none';
    alertMessageText.innerHTML = '';
  }, sec);
}
export let keyEdit = 0
export function renderTweetsOnPage(key, keys, url) {
  let ulLiked = document.getElementById('ulLiked');
  let list = document.getElementById('list');
  let li = document.createElement('li');
  let btnRemove = document.createElement('button')
  let btnLike = document.createElement('button');
  let span = document.createElement('span');
  if (key === keys) {
    span.id = `span${key}`;
    span.innerHTML = localStorage.getItem(key);
    li.appendChild(span);
    li.id = key;
  } else {
    span.id = `span${key}`;
    span.innerHTML = localStorage.getItem(key);
    li.appendChild(span);
    li.id = key;
  }
  btnRemove.innerHTML = 'remove', btnLike.innerHTML = 'like';
  btnRemove.className = `btnRemove`, btnLike.className = `btnLike`;
  btnLike.style.float = 'right', btnRemove.style.float = 'right';
  li.appendChild(btnLike), li.appendChild(btnRemove);
  li.style.margin = '10px';
  list.appendChild(li);
  let index = li.id;
  btnLike.addEventListener('click', function () {
    if (btnLike.innerHTML === 'like') {
      btnLike.innerHTML = 'unlike';
      let liLiked = document.createElement('li');
      liLiked = li.cloneNode();
      liLiked.innerHTML = li.innerHTML;
      liLiked.childNodes[0].id = `spanLiked${index}`;
      liLiked.id = `divLiked${index}`;
      ulLiked.appendChild(liLiked);
      alertMessageOnPage(
        `Hooray! You liked tweet with id ${Number(index) + 1}`
      );
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
        localStorage.removeItem(index);
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
    if (liLike !== null) {
      ulLiked.removeChild(liLike);
      li.remove();
      localStorage.removeItem(index);
    } else {
      li.remove();
      localStorage.removeItem(index);
    }
  });
  let tweetItems = document.getElementById('tweetItems');
  let modifyItem = document.getElementById('modifyItem');
  let modifyItemHeader = document.getElementById('modifyItemHeader')
  let modifyItemInput = document.getElementById('modifyItemInput')
  span.addEventListener('click', function () {
    let urlAdd = url;
    urlAdd.hash = `/edit/:${span.parentNode.id}`;
    tweetItems.style.display = 'none';
    modifyItem.style.display = 'block';
    modifyItemHeader.innerHTML = 'Edit tweet';
    history.pushState({ page: 4 }, 'edit', urlAdd);
    history.forward();
    modifyItemInput.value = '';
    console.log(history);
    keyEdit = span.parentNode.id
  });
  key++;
}

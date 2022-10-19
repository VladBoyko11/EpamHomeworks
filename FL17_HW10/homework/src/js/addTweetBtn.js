export function addTweet(url) {
    let addTweet = document.getElementById('addTweet')
    addTweet.addEventListener('click', function () {
    let tweetItems = document.getElementById('tweetItems');
    let modifyItem = document.getElementById('modifyItem');
    let modifyItemHeader = document.getElementById('modifyItemHeader')
    let modifyItemInput = document.getElementById('modifyItemInput')
    let urlAdd = url;
    urlAdd.hash = '/add';
    tweetItems.style.display = 'none';
    modifyItem.style.display = 'block';
    modifyItemHeader.innerHTML = 'Add tweet';
    history.pushState({ page: 2 }, 'add', urlAdd);
    history.forward();
    modifyItemInput.value = '';
    console.log(history);
  });
}

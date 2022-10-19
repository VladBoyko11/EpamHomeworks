export function cancelButton() {
    history.back();
    let tweetItems = document.getElementById('tweetItems');
    let divLiked = document.createElement('div');
    let hidden = document.querySelectorAll('.hidden');
    tweetItems.style.display = 'block';
    divLiked.style.display = 'none';
    for (let index = 0; index < hidden.length; index++) {
      hidden[index].style.display = 'none';
    }
}
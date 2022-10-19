function visitLink(path) {
  if (localStorage.getItem(path)) {
    let index = localStorage.getItem(path);
    let count = Number(index);
    localStorage.setItem(path, ++count);
  } else {
    let index = 0;
    index++;
    localStorage.setItem(path, index);
  }
}

function viewResults() {
  if (!document.querySelector('.results')) {
    let div = document.querySelector('#content');
    let ul = document.createElement('ul');
    ul.className = 'results';
    div.appendChild(ul);
	let count = 0
	if(localStorage.getItem('Page1')){
		count++
	}
	if(localStorage.getItem('Page2')){
		count++
	}
	if(localStorage.getItem('Page3')){
		count++
	}
    for (let index = 1; index <= count; index++) {
      let li = document.createElement('li');
      li.innerHTML =
        `You visited Page${index} ` +
        ' ' +
        localStorage.getItem(`Page${index}`) +
        ' time(s)';
      ul.appendChild(li);
    }
  }
  localStorage.clear();
}

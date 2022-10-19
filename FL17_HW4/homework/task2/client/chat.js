// const WebSocket = require("ws");
const userName = prompt('Enter your name', 'Anonim');
const chat = document.getElementById('chat');
const ws = new WebSocket('ws://127.0.0.1:8080');
ws.onmessage = (message) => {
  let messages = JSON.parse(message.data);
  let arr = [];
  arr.push(messages);
  const messageEl = document.createElement('div');
  messageEl.className = 'messageEl'
  let messageDate = new Date();
  let date = `Когда: ${messageDate.toLocaleTimeString()}`;
  arr.forEach((val) => {
    let messageUser = document.createElement('p')
    messageUser.className = 'messageUser'
    let messageContent = document.createElement('p');
    messageContent.className = 'messageContent'
    let messageTime = document.createElement('p');
    messageTime.className = 'messageTime'
    let clear = document.createElement('div');
    clear.style.clear = 'both';
    messageTime.innerHTML = date;
    messageUser.innerHTML = val.userName
    messageContent.innerHTML = `${val.message}`;
    messageEl.appendChild(messageUser).appendChild(messageContent).appendChild(clear).appendChild(messageTime);
    chat.appendChild(messageEl);
  });
};
const send = (event) => {
  event.preventDefault();
  const message = document.getElementById('message').value;
  document.getElementById('message').value = '';
  ws.send(
    JSON.stringify({
      userName,
      message
    })
  );
  let messageDate = new Date();
  let date = `Когда: ${messageDate.toLocaleTimeString()}`;
  const messageEl = document.createElement('div');
  messageEl.className = 'messageEl2'
  let messageUser = document.createElement('p')
  messageUser.className = 'messageUser'
  let messageContent = document.createElement('p');
  messageContent.className = 'messageContent'
  let messageTime = document.createElement('p');
  messageTime.className = 'messageTime2'
  let clear = document.createElement('div');
  clear.style.clear = 'both';
  messageTime.innerHTML = date;
  messageUser.innerHTML = userName
  messageContent.innerHTML = `${message}`;
  messageEl.appendChild(messageUser).appendChild(messageContent).appendChild(clear).appendChild(messageTime);
  chat.appendChild(messageEl);
  return false;
};
const formEl = document.getElementById('messageForm');
formEl.addEventListener('submit', send);

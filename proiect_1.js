var isEmpty = document.querySelector('.content');
const subject = document.title;

if (isEmpty.innerText === "") {
  isEmpty.innerText=`Nu exista nici un proiect la ${subject}!`;
}
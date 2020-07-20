// Write your code here!
let main = document.querySelector('main');
main.remove();
let element = document.createElement('h1');
element.id='victory';
document.body.appendChild(element);
let newHeader = document.querySelector('h1#victory');
newHeader.innerHTML='latif is the champion ';

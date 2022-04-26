"use strict";
const button = document.querySelector('button');
function clickHandler(message, age) {
    console.log('Clicked' + message);
}
button.addEventListener('click', clickHandler.bind(null, 'Hi', 10));

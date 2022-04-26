const button = document.querySelector('button')!;

function clickHandler(message: string, age: number) {
  console.log('Clicked' + message);
}

button.addEventListener('click', clickHandler.bind(null, 'Hi', 10));
var container = document.getElementById('container');

var header = document.createElement('header');
header.textContent = "Character Counter";
container.appendChild(header);

console.dir(container);

var textForm = document.createElement('form');
var textInput = document.createElement('textarea');
var resetText = document.createElement('input');
container.appendChild(textForm);
textForm.appendChild(textInput);
textForm.appendChild(resetText);
textInput.setAttribute('placeholder', 'type something');
resetText.setAttribute('type', 'reset');
var textLength = 0;

textInput.addEventListener('keyup', function(e) {
  e.preventDefault();
  console.dir(textInput);
  textLength = textInput.value.length;
  characters.textContent = textLength + ' characters';
});

resetText.addEventListener('click', function(e) {
  characters.textContent = '0 characters';
});

var characters = document.createElement('div');
container.appendChild(characters);
characters.textContent = '0 characters';

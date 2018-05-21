
const writeEvent = (text) => {
	//lista
	const parent = document.querySelector('#events');
	//obiekt w liscie
	const el = document.createElement('li');
	el.innerHTML = text;
	parent.appendChild(el);
};

const onFormSubmitted = (e) => {
 e.preventDefault();

 const input = document.querySelector('#chat');
 const text = input.value;
 input.value = '';

 sock.emit('message', text);
};

const addButtonListeners = () => {
	['rock', 'paper', 'scissors'].forEach((id) => {
		const button = document.getElementById(id);
		button.addEventListener('click', () => {
			sock.emit('turn', id);
		});
	});
};

writeEvent('Witaj w grze Papier, Kamień i Nożyce');

const sock = io();
sock.on('message', writeEvent);

document
.querySelector('#chat-form')
.addEventListener('submit', onFormSubmitted);

addButtonListeners();
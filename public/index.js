const title = document.getElementById('title');
const button = document.getElementById('button');

button.addEventListener('click', (event) => {
  title.classList.toggle('changed');
});


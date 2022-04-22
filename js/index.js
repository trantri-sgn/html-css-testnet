const registerBtn = document.querySelector('#register');
const overlay = document.querySelector('#overlay');
const form = document.querySelector('#form');

registerBtn.addEventListener('click', () => {
  overlay.classList.add('active');
});

overlay.addEventListener('click', (e) => {
  if (!form.contains(e.target)) {
    overlay.classList.remove('active');
  }
});

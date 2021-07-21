<<<<<<< HEAD
const checkBox = document.getElementById('agreement');
const submitBtn = document.getElementById('submit-btn');

checkBox.addEventListener('click', (element) => {
  if (element.target.checked === true) {
    submitBtn.disabled = false;
  } else {
    submitBtn.disabled = true;
  }
});
=======
const btnLogin = document.getElementById('login');

btnLogin.addEventListener('click', (event) => {
event.preventDefault();
let login = document.querySelectorAll('.trybewarts-login input')[0].value
let senha = document.querySelectorAll('.trybewarts-login input')[1].value

  if ((login === 'tryber@teste.com') && (senha === '123456')) {
    alert('Olá, Tryber!');
  } else {
    alert('Login ou senha inválidos.');
  }
})

const checkBox = document.getElementById('agreement');
>>>>>>> 024d9056596e9616a5daca7826a7ba33ec29ce10

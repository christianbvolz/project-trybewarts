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
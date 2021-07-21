const checkBox = document.getElementById('agreement');
const submitBtn = document.getElementById('submit-btn');

checkBox.addEventListener('click', (element) => {
  if (element.target.checked === true) {
    submitBtn.disabled = false;
  } else {
    submitBtn.disabled = true;
  }
});

const btnLogin = document.getElementById('login');

btnLogin.addEventListener('click', (event) => {
  event.preventDefault();
  const login = document.querySelectorAll('.trybewarts-login input')[0].value;
  const senha = document.querySelectorAll('.trybewarts-login input')[1].value;

  if ((login === 'tryber@teste.com') && (senha === '123456')) {
    alert('Olá, Tryber!');
  } else {
    alert('Login ou senha inválidos.');
  }
});

const textArea = document.getElementById('textarea');

textArea.addEventListener('keyup', () => {
  const countCharacter = textArea.value.length;
  const counter = document.getElementById('counter');
  const maxLength = textArea.getAttribute('maxlength');
  const currentLength = maxLength - countCharacter;
  counter.innerHTML = `${currentLength}`;
});

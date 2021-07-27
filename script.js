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

function newForm() {
  const main = document.getElementsByTagName('main')[0];
  main.removeChild(document.getElementById('evaluation-form'));
  const form = document.createElement('form');
  form.id = 'evaluation-form';
  form.style.order = -1;
  main.appendChild(form);
  return form;
}

function selectedFamily(family) {
  for (let index = 0; index < family.length; index += 1) {
    if (family[index].checked === true) {
      return family[index].value;
    }
  }
}

function selectedContent(contents) {
  const content = [];
  for (let index = 0; index < contents.length; index += 1) {
    if (contents[index].checked === true) {
      content.push(contents[index].value);
    }
  }
  return content;
}

function selectedRate(rates) {
  for (let index = 0; index < rates.length; index += 1) {
    if (rates[index].checked === true) {
      return rates[index].value;
    }
  }
}

function completedForm(allInputs, form) {
  for (let index = 0; index < allInputs.length; index += 1) {
    const paragraph = document.createElement('p');
    paragraph.className = 'completed-form';
    paragraph.innerHTML = allInputs[index];
    form.appendChild(paragraph);
  }
}

submitBtn.addEventListener('click', (event) => {
  event.preventDefault();
  const firstName = document.getElementById('input-name').value;
  const lastName = document.getElementById('input-lastname').value;
  const fullName = `Nome: ${firstName} ${lastName}`;
  const email = `Email: ${document.getElementById('input-email').value}`;
  const house = `Casa: ${document.getElementById('house').value}`;
  const families = document.getElementsByName('family');
  const family = `Família: ${selectedFamily(families)}`;
  const contents = document.getElementsByClassName('subject');
  const content = `Matérias: ${selectedContent(contents).join(', ')}`;
  const rates = document.getElementsByName('rate');
  const rate = `Avaliação: ${selectedRate(rates)}`;
  const comment = `Observações: ${document.getElementById('textarea').value}`;
  const allInputs = [fullName, email, house, family, content, rate, comment];
  const form = newForm();
  completedForm(allInputs, form);
});

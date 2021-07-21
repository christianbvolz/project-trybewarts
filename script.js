const checkBox = document.getElementById('agreement');
const submitBtn = document.getElementById('submit-btn');

checkBox.addEventListener('click', (element) => {
  if (element.target.checked === true) {
    submitBtn.disabled = false;
  } else {
    submitBtn.disabled = true;
  }
});

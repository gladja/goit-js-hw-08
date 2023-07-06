const inputEmailEl = document.querySelector('input');
const textareaEl = document.querySelector('textarea');
const btnEl = document.querySelector('button');
const feedbackFormEl = document.querySelector('.feedback-form');


// inputEmailEl.addEventListener('input', onEmailValue);
// textareaEl.addEventListener('input', onTextValue);
btnEl.addEventListener('click', onSubmitValue);
feedbackFormEl.addEventListener('input', onValue);

function onValue(event) {
  // console.log(event.target.tagName)
  if(event.target.tagName === 'INPUT') {
    const email = event.target.value;
    localStorage.setItem('email_key', email);
    console.log(email);
  }
}







function onEmailValue(event) {
  const email = event.target.value;

  localStorage.setItem('email_key', email);
}

function onTextValue(event) {
  const text = event.target.value;

  localStorage.setItem('text_key', text);
}

getValueLocalStorage();
function getValueLocalStorage() {
  const saveEmail = localStorage.getItem('email_key');
  const saveText = localStorage.getItem('text_key');

  // console.log(savedEmail);
  if (saveEmail && saveText) {
    inputEmailEl.value = saveEmail;
    textareaEl.value = saveText;
  }
}

// let emailSav = ''
function onSubmitValue(event) {
  event.preventDefault();

   // emailSav = localStorage.getItem('email_key')

   console.log(inputEmailEl.value)
  localStorage.removeItem('email_key');
  inputEmailEl.value = ''
}

// console.log(emailSav);
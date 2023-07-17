import throttle from 'lodash.throttle';

const inputEmailEl = document.querySelector('input');
const textareaEl = document.querySelector('textarea');
const feedbackFormEl = document.querySelector('.feedback-form');
// console.log(feedbackFormEl.elements);
feedbackFormEl.addEventListener('input', throttle(onValue, 500));
feedbackFormEl.addEventListener('submit', onSubmitValue);

// const objState = {};
const STORAGE_LOCAL = 'feedback-form-state';
const localState = JSON.parse(localStorage.getItem(STORAGE_LOCAL));

function onValue(event) {
const objState = {...localState, [event.target.name]: event.target.value};
  // objState[event.target.name] = event.target.value;
  localStorage.setItem(STORAGE_LOCAL, JSON.stringify(objState));

  //? console.log(event.target.value, 'VS', feedbackFormEl.elements.email.value);
}

getValueLocalStorage();
function getValueLocalStorage() {
  const localState = JSON.parse(localStorage.getItem(STORAGE_LOCAL));
  if (!localState) return;

  if (localState.email) {
    inputEmailEl.value = localState.email;
  }
  if (localState.message) {
    textareaEl.value = localState.message;
  }
}

// let emailSav = ''
function onSubmitValue(event) {
  event.preventDefault();
  event.currentTarget.reset()

  const localState = JSON.parse(localStorage.getItem(STORAGE_LOCAL));
  console.log(localState);

  localStorage.removeItem(STORAGE_LOCAL);
}


















// const inputEmailEl = document.querySelector('input');
// const textareaEl = document.querySelector('textarea');
// const btnEl = document.querySelector('button');
// const feedbackFormEl = document.querySelector('.feedback-form');
//
//
// btnEl.addEventListener('click', onSubmitValue);
// feedbackFormEl.addEventListener('input', throttle(onValue, 500));
//
// const objState = {};
// const STORAGE_LOCAL = 'feedback-form-state';
//
// function onValue(event) {
//   objState[event.target.name] = event.target.value;
//   console.log(objState);
//   localStorage.setItem(STORAGE_LOCAL, JSON.stringify(objState));
// }
//
// getValueLocalStorage();
// function getValueLocalStorage() {
//   const localState = JSON.parse(localStorage.getItem(STORAGE_LOCAL));
//   // console.log(newEL);
//   if (!localState) return;
//
//   if (localState.email) {
//     inputEmailEl.value = localState.email;
//   }
//   if (localState.message) {
//     textareaEl.value = localState.message;
//   }
// }
//
// // let emailSav = ''
// function onSubmitValue(event) {
//   event.preventDefault();
//   // event.currentTarget.reset()
//   const localState = JSON.parse(localStorage.getItem(STORAGE_LOCAL));
//   console.log(localState);
//
//   localStorage.removeItem(STORAGE_LOCAL);
//   inputEmailEl.value = '';
//   textareaEl.value = '';
// }






// inputEmailEl.addEventListener('input', onEmailValue);
// textareaEl.addEventListener('input', onTextValue);
// function onEmailValue(event) {
//   const email = event.target.value;
// }
// function onTextValue(event) {
//   const message = event.target.value;
//   // localStorage.setItem('feedback-form-state', JSON.stringify(message))
// }


// localStorage.setItem('feedback-form-state', `{"email":"${email}", "message":"${message}"}`)

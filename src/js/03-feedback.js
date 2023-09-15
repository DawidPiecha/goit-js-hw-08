import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const localStorageKey = 'feedback-form-state';
const throttleDelay = 500;

const saveToLocalStorage = throttle(() => {
  const formObject = {
    email: form.elements.email.value,
    message: form.elements.message.value,
  };
  localStorage.setItem(localStorageKey, JSON.stringify(formObject));
}, throttleDelay);

window.addEventListener('load', () => {
  const savedData = localStorage.getItem(localStorageKey);
  if (savedData) {
    const parsedData = JSON.parse(savedData);
    form.elements.email.value = parsedData.email;
    form.elements.message.value = parsedData.message;
  }
});

form.elements.email.addEventListener('input', () => {
  saveToLocalStorage();
});
form.elements.message.addEventListener('input', () => {
  saveToLocalStorage();
});

form.addEventListener('submit', event => {
  event.preventDefault();
  console.log(localStorageKey, {
    email: form.elements.email.value,
    message: form.elements.message.value,
  });
  localStorage.removeItem(localStorageKey);
  form.reset();
});

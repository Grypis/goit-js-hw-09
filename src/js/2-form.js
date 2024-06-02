const formData = {
  email: '',
  message: '',
};

const formElement = document.querySelector('.feedback-form');
const emailInputElement = formElement.elements.email;
const messageInputElement = formElement.elements.message;
const localStorageKey = 'feedback-form-state';

if (localStorage.getItem(localStorageKey) !== null) {
  emailInputElement.value = JSON.parse(
    localStorage.getItem(localStorageKey)
  ).email;
  formData.email = emailInputElement.value;
  messageInputElement.value = JSON.parse(
    localStorage.getItem(localStorageKey)
  ).message;
  formData.message = messageInputElement.value;
}

formElement.addEventListener('input', event => {
  if (event.target.name === 'email' || event.target.name === 'message') {
    formData[event.target.name] = event.target.value;
    localStorage.setItem(localStorageKey, JSON.stringify(formData));
  }
});

formElement.addEventListener('submit', event => {
  event.preventDefault();
  if (formData.email === '' || formData.message === '') {
    return alert('Fill please all fields');
  }
  console.log(formData);
  localStorage.removeItem(localStorageKey);
  formData.email = '';
  formData.message = '';
  formElement.reset();
});

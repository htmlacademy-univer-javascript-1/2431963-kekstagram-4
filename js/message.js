import {isEscapeKey} from './utils.js';

const successMessageTemplate = document.querySelector('#success').content.querySelector('.success');
const errorMessageTemplate = document.querySelector('#error').content.querySelector('.error');

export const checkTypeMessage = () => document.querySelector('.success, .error');

const onMessageEscapeKeydown = (evt) => {
  if (isEscapeKey(evt) && checkTypeMessage()) {
    evt.preventDefault();
    closeMessageBox();
  }
};

const onMessageOutsideClick = (evt) => {
  const messageElement = checkTypeMessage();
  if (evt.target === messageElement) {
    closeMessageBox();
  }
};

function closeMessageBox () {
  document.removeEventListener('keydown', onMessageEscapeKeydown);
  document.removeEventListener('click', onMessageOutsideClick);
  const messageElement = checkTypeMessage();
  if (messageElement) {
    messageElement.remove();
  }
}

export const openMessageBox = (typeMessage) => {
  const message = typeMessage === 'success' ? successMessageTemplate.cloneNode(true) : errorMessageTemplate.cloneNode(true);
  const messageButton = message.querySelector(`.${typeMessage}__button`);
  document.body.append(message);

  messageButton.addEventListener('click', () => {
    closeMessageBox();
  });

  document.addEventListener('keydown', onMessageEscapeKeydown);
  document.addEventListener('click', onMessageOutsideClick);
};

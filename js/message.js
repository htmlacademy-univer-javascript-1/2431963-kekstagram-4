import {isEscapeKey} from './utils.js';

//Находим темлеты #success и #error и получаем их содержимое
const successMessageTemplate = document.querySelector('#success').content.querySelector('.success');
const errorMessageTemplate = document.querySelector('#error').content.querySelector('.error');

//Находит элемент с классом или success или error, нас странице он всегда один
export const checkTypeMessage = () => document.querySelector('.success, .error');

//Функция закрытия окна, удаляем обработчики и сам эелемент
const closeMessage = () => {
  document.removeEventListener('keydown', onMessageEscapeKeydown);
  document.removeEventListener('click', onMessageOutsideClick);
  const messageElement = checkTypeMessage();
  if (messageElement) {
    messageElement.remove();
  }
};

//Обработка ECS
function onMessageEscapeKeydown (evt) {
  if (isEscapeKey(evt) && checkTypeMessage()) {
    evt.preventDefault();
    closeMessage();
  }
}

//Обработка клика вне информационного окна
function onMessageOutsideClick (evt) {
  const messageElement = checkTypeMessage();
  if (evt.target === messageElement) {
    closeMessage();
  }
}

//Открыть инофрмационное окно и добавить обработчики
export const openMessage = (typeMessage) => {
  const message = typeMessage === 'success' ? successMessageTemplate.cloneNode(true) : errorMessageTemplate.cloneNode(true);
  const messageButton = message.querySelector(`.${typeMessage}__button`);
  document.body.append(message);

  messageButton.addEventListener('click', () => {
    closeMessage();
  });

  document.addEventListener('keydown', onMessageEscapeKeydown);
  document.addEventListener('click', onMessageOutsideClick);
};

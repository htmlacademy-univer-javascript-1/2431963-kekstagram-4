import {renderItemDetails} from './big-item.js';
import {isEscapeKey, isEnterKey} from './utils.js';

const body = document.querySelector('body');
const openDialogElement = document.querySelector('.big-picture');
const closeDialogElement = document.querySelector('.big-picture__cancel');

const onDocumentKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    hideFormBigItem();
  }
};

function hideFormBigItem () {
  openDialogElement.classList.add('hidden');
  body.classList.remove('modal-open');
  document.removeEventListener('keydown', onDocumentKeydown);
  if (document.querySelector('.comments-loader') !== null) {
    document.querySelector('.comments-loader').remove();
  }
}

export const showFormBigItem = (item) => {
  openDialogElement.classList.remove('hidden');
  body.classList.add('modal-open');
  document.addEventListener('keydown', onDocumentKeydown);
  renderItemDetails(item, openDialogElement);
};

export const initFormBigItem = () => {
  closeDialogElement.addEventListener('click', () => {
    hideFormBigItem();
  });

  closeDialogElement.addEventListener('keydown', (evt) => {
    if (isEnterKey(evt)) {
      hideFormBigItem();
    }
  });
};

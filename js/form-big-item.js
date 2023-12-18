import {renderItemDetails} from './big-item.js';
import {isEscapeKey, isEnterKey} from './utils.js';

const body = document.querySelector('body');
const itemOpenDialogElement = document.querySelector('.big-picture');
const itemCloseDialogElement = document.querySelector('.big-picture__cancel');
const commentList = document.querySelector('.social__comments');

const createMoreButton = () => {
  const loadMoreButton = document.createElement('button');
  loadMoreButton.setAttribute('type', 'button');
  loadMoreButton.classList.add('social__comments-loader');
  loadMoreButton.classList.add('comments-loader');
  loadMoreButton.textContent = 'Загрузить еще';
  commentList.after(loadMoreButton);
};

const onDocumentKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    hidePopup();
  }
};

function hidePopup () {
  itemOpenDialogElement.classList.add('hidden');
  body.classList.remove('modal-open');
  document.removeEventListener('keydown', onDocumentKeydown);
  document.querySelector('.comments-loader').remove();
}

export const showPopup = (itemData) => {
  itemOpenDialogElement.classList.remove('hidden');
  body.classList.add('modal-open');
  document.addEventListener('keydown', onDocumentKeydown);
  if(document.querySelector('.comments-loader') === null) {
    createMoreButton();
  }
  renderItemDetails(itemData, itemOpenDialogElement);
};

export const initFormBigItem = () => {
  itemCloseDialogElement.addEventListener('click', () => {
    hidePopup();
  });

  itemCloseDialogElement.addEventListener('keydown', (evt) => {
    if (isEnterKey(evt)) {
      hidePopup();
    }
  });
};

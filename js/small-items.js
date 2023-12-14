//Место куда будем добавлять элементы
import {filterRandom, sortByMostDiscussed} from './filter.js';

const itemsContainer = document.querySelector('.pictures');
//Заготовка элемента для заполнения данными
const itemTemplate = document.querySelector('#picture')
  .content
  .querySelector('.picture');
//Блок с кнопками фильтра
const filter = document.querySelector('.img-filters');

//Функция создает элемент с данными
const createSmallItem = (data) => {
  const {id, url, description, likes, comments} = data;
  const userItem = itemTemplate.cloneNode(true);
  const userItemImg = userItem.querySelector('.picture__img');
  userItemImg.src = url;
  userItemImg.alt = description;
  userItemImg.dataset.thumbnailId = id;
  const userItemComments = userItem.querySelector('.picture__comments');
  userItemComments.textContent = comments.length;
  const userItemLikes = userItem.querySelector('.picture__likes');
  userItemLikes.textContent = likes;
  return userItem;
};

//Функция для создания и отрисовки элементов
export const renderSmallItems = (items) => {
  //Копируем входной массив
  let newItems = items.slice();
  //Находим актинвую кнопку
  const activeFilterButton = filter.querySelector('.img-filters__button--active').id;
  //Находим картинки отрисованные в данный момент
  const currentItems = itemsContainer.querySelectorAll('.picture');
  //Фильтруем
  if(activeFilterButton === 'filter-random') {
    newItems = filterRandom(newItems);
  } else if(activeFilterButton === 'filter-discussed') {
    newItems = sortByMostDiscussed(newItems);
  }
  //Удаляем отрисованные в данный момент картинки
  currentItems.forEach((item) => item.remove());
  const fragment = document.createDocumentFragment();
  newItems.forEach((item) => {
    const element = createSmallItem(item);
    fragment.append(element);
  });
  itemsContainer.append(fragment);
};

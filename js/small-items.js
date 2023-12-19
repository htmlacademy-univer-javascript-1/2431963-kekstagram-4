import {filterRandom, sortByMostDiscussed} from './filter.js';

//Место куда будем добавлять элементы
const itemsContainer = document.querySelector('.pictures');
//Заготовка элемента для заполнения данными
const itemTemplate = document.querySelector('#picture').content.querySelector('.picture');
//Блок с кнопками фильтра
const filterSection = document.querySelector('.img-filters');

//Функция создает элемент с данными
const createSmallItem = (item) => {
  const {id, url, description, likes, comments} = item;

  const previewItem = itemTemplate.cloneNode(true);
  const previewItemImg = previewItem.querySelector('.picture__img');
  previewItemImg.src = url;
  previewItemImg.alt = description;
  previewItemImg.dataset.thumbnailId = id;

  const previewItemComments = previewItem.querySelector('.picture__comments');
  previewItemComments.textContent = comments.length;

  const previewItemLikes = previewItem.querySelector('.picture__likes');
  previewItemLikes.textContent = likes;

  return previewItem;
};

//Функция для создания и отрисовки элементов
export const renderSmallItems = (items) => {
  //Копируем входной массив
  let newItems = items.slice();
  //Находим актинвую кнопку
  const activeFilterButton = filterSection.querySelector('.img-filters__button--active').id;
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
  const fragmentSmallItems = document.createDocumentFragment();
  newItems.forEach((item) => {
    const element = createSmallItem(item);
    fragmentSmallItems.append(element);
  });
  itemsContainer.append(fragmentSmallItems);
};

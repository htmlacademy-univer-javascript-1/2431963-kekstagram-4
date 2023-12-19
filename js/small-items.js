import {filterRandom, sortByMostDiscussed} from './filter.js';

const itemsContainer = document.querySelector('.pictures');
const itemTemplate = document.querySelector('#picture').content.querySelector('.picture');
const filterSection = document.querySelector('.img-filters');

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

export const renderSmallItems = (items) => {
  let newItems = items.slice();
  const activeFilterButton = filterSection.querySelector('.img-filters__button--active').id;
  const currentItems = itemsContainer.querySelectorAll('.picture');
  if(activeFilterButton === 'filter-random') {
    newItems = filterRandom(newItems);
  } else if(activeFilterButton === 'filter-discussed') {
    newItems = sortByMostDiscussed(newItems);
  }
  currentItems.forEach((item) => item.remove());
  const fragmentSmallItems = document.createDocumentFragment();
  newItems.forEach((item) => {
    const element = createSmallItem(item);
    fragmentSmallItems.append(element);
  });
  itemsContainer.append(fragmentSmallItems);
};

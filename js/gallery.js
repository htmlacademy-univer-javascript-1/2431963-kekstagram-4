import {renderSmallItems} from './small-items.js';
import {initFormBigItem, showPopup} from './form-big-item.js';

const pictures = document.querySelector('.pictures');

export const initGallery = (items) => {
  renderSmallItems(items);
  initFormBigItem();
  const onPictureClick = (evt) => {
    if(evt.target.closest('.picture')) {
      const currentItem = items.find((item) => item.id === +evt.target.dataset.thumbnailId);
      showPopup(items[currentItem.id]);
    }
  };
  pictures.addEventListener('click', onPictureClick);
};

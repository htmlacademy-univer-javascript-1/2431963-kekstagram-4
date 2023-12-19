import {renderSmallItems} from './small-items.js';
import {initFormBigItem, showFormBigItem} from './form-big-item.js';

const pictures = document.querySelector('.pictures');

export const initGallery = (items) => {
  renderSmallItems(items);
  initFormBigItem();
  document.querySelector('.comments-loader').remove();
  const onPictureClick = (evt) => {
    if(evt.target.closest('.picture')) {
      const currentPicture = items.find((item) => item.id === +evt.target.dataset.thumbnailId);
      if (typeof currentPicture !== 'undefined') {
        showFormBigItem(items[currentPicture.id]);
      }
    }
  };
  pictures.addEventListener('click', onPictureClick);
};

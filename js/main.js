import {getData} from './api.js';
import {initGallery} from './gallery.js';
import {hidePopup, initFormUpload} from './form-upload.js';
import {showAlert} from './utils.js';
import {initValidation} from './validation.js';

const GALLERY_ITEM_COUNT = 25;

getData()
  .then((photos) => {
    initGallery(photos.slice(0, GALLERY_ITEM_COUNT));
  })
  .catch((err) => {
    showAlert(err.message);
  });

initFormUpload(initValidation, hidePopup);


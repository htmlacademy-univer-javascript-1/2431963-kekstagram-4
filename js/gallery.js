import {getItems} from './data.js';
import {renderSmallItems} from './small-items.js';
import {showPopup} from './form-big-item.js';

//Получаем данные
const usersItems = getItems();

//Создать и вывести элементы на страницу
renderSmallItems(usersItems);

const pictures = document.querySelector('.pictures');
const onPictureClick = (evt) => {
  if(evt.target.closest('.picture')) {
    const currentItem = usersItems.find((item) => item.id === +evt.target.dataset.thumbnailId);
    showPopup(usersItems[currentItem.id - 1]);
  }
};

pictures.addEventListener('click', onPictureClick);

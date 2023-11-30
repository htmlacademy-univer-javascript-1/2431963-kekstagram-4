//Место куда будем добавлять элементы
const itemsContainer = document.querySelector('.pictures');
//Заготовка элемента для заполнения данными
const itemTemplate = document.querySelector('#picture')
  .content
  .querySelector('.picture');

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
  const fragment = document.createDocumentFragment();
  items.forEach((item) => {
    const element = createSmallItem(item);
    fragment.append(element);
  });
  itemsContainer.append(fragment);
};

const COMMENT_COUNT = 5;
const AVATAR_SIZE = 35;

const commentList = document.querySelector('.social__comments');
const counterRenderedCommentsElement = document.querySelector('.comments-current');

//Создать комментарий
const createComment = (comment) => {
  const {avatar, name, message} = comment;

  const commentLiElement = document.createElement('li');
  commentLiElement.classList.add('social__comment');

  const commentImageElement = document.createElement('img');
  commentImageElement.classList.add('social__picture');
  commentImageElement.src = avatar;
  commentImageElement.alt = name;
  commentImageElement.width = AVATAR_SIZE;
  commentImageElement.height = AVATAR_SIZE;

  const commentParagraphElement = document.createElement('p');
  commentParagraphElement.classList.add('social__text');
  commentParagraphElement.textContent = message;

  commentLiElement.append(commentImageElement);
  commentLiElement.append(commentParagraphElement);

  return commentLiElement;
};

//Добавить комментарий в список
const addComment = (comment) => {
  commentList.append(createComment(comment));
};

//Вычислить счетчик загруженных комментариев
const calcCounterLoadedComments = (marker, length) => marker > length ? length : marker;

//Скрыть кнопку загрузки скрытых комментариев (Загрузить еще)
const hideLoadMoreButton = () => {
  document.querySelector('.comments-loader').classList.add('hidden');
};

//Фунция обратного вызова для обработки загрузки скрытых комментариев
const onLoadMore = (items) => (evt) => {
  evt.preventDefault();

  let marker = commentList.childNodes.length;
  items.slice(marker, marker + COMMENT_COUNT).forEach((comment) => {
    addComment(comment);
  });
  marker += COMMENT_COUNT;

  counterRenderedCommentsElement.textContent = calcCounterLoadedComments(marker, items.length);

  if(marker >= items.length) {
    hideLoadMoreButton();
  }
};

//Отобразить комментарии, загруженные по умолчанию
const renderVisibleComments = (comments) => {
  comments.forEach((comment) => {
    addComment(comment);
  });
  hideLoadMoreButton();
  counterRenderedCommentsElement.textContent = comments.length;
};

//Отобразить скрытые комментарии
const renderInvisibleComments = (comments) => {
  comments.slice(0, COMMENT_COUNT).forEach((comment) => {
    addComment(comment);
  });
  counterRenderedCommentsElement.textContent = calcCounterLoadedComments(commentList.childNodes.length, comments.length);
  document.querySelector('.comments-loader').addEventListener('click', onLoadMore(comments));
};

//Отобразить комментарии
const renderComments = (comments) => {
  commentList.innerHTML = '';

  if(comments.length <= COMMENT_COUNT) {
    renderVisibleComments(comments);
  } else {
    renderInvisibleComments(comments);
  }
};

//Отобразить полную информацию о фотографии
export const renderItemDetails = (item, outputContainer) => {
  const {comments, description, likes, url} = item;

  const bigImage = outputContainer.querySelector('.big-picture__img img');
  bigImage.src = url;
  bigImage.alt = description;

  outputContainer.querySelector('.social__caption').textContent = description;
  outputContainer.querySelector('.likes-count').textContent = likes;
  outputContainer.querySelector('.comments-count').textContent = comments.length;

  renderComments(comments);
};

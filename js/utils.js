const ALERT_SHOW_TIME = 5000;

const ALERT_STYLES = {
  zIndex : '100',
  position : 'absolute',
  left : '0',
  top : '0',
  right : '0',
  padding : '10px 3px',
  fontSize : '30px',
  lineHeight : '36px',
  textAlign : 'center',
  backgroundColor : '#232321',
  color: '#ffffff'
};

//Функция для проверки длины строки.
export const checkLength = (array, maxLength) => array.length <= maxLength;

// Функция для проверки на уникальные значения в массиве
export const checkRepeats = (array) => {
  const itemsInUpperCase = array.map((item) => item.toUpperCase());
  const arrayNoRepeats = new Set(itemsInUpperCase);
  return arrayNoRepeats.size === itemsInUpperCase.length;
};

//Функция проверки нажатой клавиши Esc
export const isEscapeKey = (evt) => evt.key === 'Escape';

//Функция проверки нажатой клавиши Enter
export const isEnterKey = (evt) => evt.key === 'Enter';

//Функция для удаления последнего символа в строке
export const removeLastCharacter = (string) => string ? string.slice(0, -1) : string;

// Функция для вывода окна с сообщением
export const showAlert = (message) => {
  const alertContainer = document.createElement('div');
  Object.assign(alertContainer.style, ALERT_STYLES);
  alertContainer.textContent = message;
  document.body.append(alertContainer);

  setTimeout(() => {
    alertContainer.remove();
  }, ALERT_SHOW_TIME);
};

export const debounce = (callback, timeoutDelay = 500) => {
  let timeoutId;

  return (...rest) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => callback.apply(this, rest), timeoutDelay);
  };
};

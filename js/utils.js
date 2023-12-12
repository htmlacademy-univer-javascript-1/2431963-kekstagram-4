//Функция для проверки длины строки.
export const checkLength = (array, maxLength) => array.length <= maxLength;

export const checkRepeats = (array) => {
  const toUpper = array.map((item) => item.toUpperCase());
  const arrayNoRepeats = new Set(toUpper);
  return arrayNoRepeats.size === toUpper.length;
};

//Функция получения уникального идентификатора (автоинкремент)
export const createIdGenerator = (start = 0) => {
  let lastGeneratedId = start;

  return function() {
    lastGeneratedId += 1;
    return lastGeneratedId;
  };
};

//Функция получения уникального идентификатора (начинает сначала при достижении заданного значения)
export const createCircleGenerator = (maxCount) => {
  let lastGeneratedId = 0;

  return function() {
    if(lastGeneratedId >= maxCount) {
      lastGeneratedId = 0;
      return lastGeneratedId++;
    }
    return lastGeneratedId++;
  };
};

//Функция получения случайного значения в заданных пределах
export const getRandomInteger = (min, max) => {
  const lower = Math.ceil(Math.min(Math.abs(min), Math.abs(max)));
  const upper = Math.floor(Math.max(Math.abs(min), Math.abs(max)));
  const result = Math.random() * (upper - lower + 1) + lower;

  return Math.floor(result);
};

//Функция получения случайного элемента массива
export const getRandomArrayElement = (elements) => (
  elements[getRandomInteger(0, elements.length - 1)]
);

//Функция проверки нажатой клавиши Esc
export const isEscapeKey = (evt) => evt.key === 'Escape';

//Функция проверки нажатой клавиши Enter
export const isEnterKey = (evt) => evt.key === 'Enter';

export const removeLastCharacter = (string) => string ? string.slice(0, -1) : string;

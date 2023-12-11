//Функция для проверки длины строки.
export const checkLength = (array, maxLength) => array.length <= maxLength;

export const checkRepeats = (array) => {
  const toUpper = array.map((item) => item.toUpperCase());
  const arrayNoRepeats = new Set(toUpper);
  return arrayNoRepeats.size === toUpper.length;
};

//Функция для проверки, является ли строка палиндромом.
export const isPalindrome = (text) => {
  const prepareText = text.toLowerCase().replace(/[^a-zа-яё]/gi, '');
  const reverseText = prepareText.split('').reverse().join('');
  return reverseText === prepareText;
};

//Функция извлечения цифр из строки
export const findNumbers = (value) => {
  const inputValue = String(value);
  const digits = inputValue.replace(/[^0-9]/g, '');
  if(digits.length !== 0) {
    return parseInt(digits, 10);
  }
  return NaN;
};

//Функция установки минимальной длины строки
export const setMinLengthString = (text, minLength, addCharacters) => {
  const inputText = text.toString();
  const inputAddCharacters = addCharacters.toString();
  const requiredPad = minLength - inputText.length;
  if(requiredPad > 0) {
    return inputAddCharacters.slice(0, requiredPad % inputAddCharacters.length)
      + inputAddCharacters.repeat(requiredPad / inputAddCharacters.length)
      + inputText;
  }
  return inputText;
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

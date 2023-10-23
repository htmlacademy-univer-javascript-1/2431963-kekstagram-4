import { getRandomInteger, getRandomArrayElement, createIdGenerator } from './util.js';

const PICTURE_COUNT = 25;
const AVATAR_COUNT = 6;
const LIKE_MIN_COUNT = 15;
const LIKE_MAX_COUNT = 200;
const COMMENT_COUNT = 30;
const ONE_MESSAGE = 1;
const TWO_MESSAGE = 2;
const COMMENT_LINES = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];

const DESCRIPTIONS = [
  'Нормуль #norm',
  'Это так круто, я в полном восторге от этого дома! #wow #great',
  'Вы выбрали идеальный материал для этого дома, он просто волшебный! #ideal',
  'Невероятно, как вы можете создавать такие шедевры! #masterpiece',
  'Вы всегда впечатляете нас своими проектами, продолжайте в том же духе! #woow',
  'Этот дом - настоящее произведение искусства, вы удивительны! #house',
  'Ваши проекты всегда уникальны и неповторимы, это просто удивительно! #fantastic',
  'Такая красота, я просто не могу отвести глаз от этого дома! #beautiful',
  'Вы всегда даете нам лучшее из лучшего, спасибо за это! #best',
  'Этот дом - настоящий шедевр, вы точно знаете, как удивлять нас своей работой! #work'];

const NAMES = ['Женёк', 'Анатолий', 'Jack', 'Константин', 'Яна', 'Евдокия'];

const generateCommentId = createIdGenerator();

const createMessage = () => Array.form (
  {length: getRandomInteger(ONE_MESSAGE, TWO_MESSAGE) },
  () => getRandomArrayElement(COMMENT_LINES),
).join(' ');

const createComment = () => ({
  id: generateCommentId(),
  avatar: `img/avatar-${getRandomInteger(1, AVATAR_COUNT)}.svg`,
  message: createMessage(),
  name:getRandomArrayElement(NAMES),
});

const createPicture = (index) => ({
  id: index,
  url: `photos/${index}.jpg`,
  description: getRandomArrayElement(DESCRIPTIONS),
  likes: getRandomInteger(LIKE_MIN_COUNT, LIKE_MAX_COUNT),
  comments: Array.from(
    {length: getRandomInteger(0, COMMENT_COUNT) },
    createComment,
  ),
});

const getPictures = () => Array.from(
  { length: PICTURE_COUNT },
  (_, pictureIndex) => createPicture(pictureIndex + 1),
);

export { getPictures };

'use strict';

const COUNT_PHOTO = 25;
const Likes = {
  MIN: 15,
  MAX: 200
};
const Comments = {
  MIN: 1,
  MAX: 6
};
const Id = {
  MIN: 0,
  MAX: 999
};
const Avatar = {
  MIN: 1,
  MAX: 6
};

let anyString = 'вышеперечисленное';
let photos = [];
let names = [
  'Дмитрий',
  'Станислав',
  'Михаил',
  'Олег',
  'Борис',
  'Сергей',
  'Владислав',
  'Валерий',
  'Ян',
  'Ильдар',
  'Иван'
];
let filtersPhoto = [
  'original',
  'x-pro II',
  'Lomo-fi',
  'toaster',
  'brannan',
  'inkwell',
  'poprocket',
  'nashville',
  'gotham',
  'earlybird',
  'sutro',
  'walden',
  'hefe',
  '1977'
];
let messages = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];

// Функция для получения целого рандомного числа из диапазона включительно.
const randomNumber = (min, max) => {
  if(min >= max || min < 0){
    return -1;
  }
  return Math.floor(Math.random() * (max - min + 1) + min);
};

// Функция для проверки максимальной длины строки .
const stringLength = (text, count) => {
  return text.length < count;
};

randomNumber(1, 10);
stringLength(anyString, 100);


// Функция для выбора случайного элемента массива
const getRandomElementArr = (array) => {
  return array[randomNumber(0, array.length - 1)];
};

// Функция добавления комментария
const addComments = () => {
  const comments = [];

  for(let i = 0; i < randomNumber(Comments.MIN, Comments.MAX); i++){
    comments.push({
      id: randomNumber(Id.MIN, Id.MAX),
      avatar: 'img/avatar-' + randomNumber(Avatar.MIN, Avatar.MAX) + '.svg',
      message: getRandomElementArr(messages),
      name: getRandomElementArr(names),
    });
  }
  return comments;
};

// Функция добавления Фото
const addPhotos = () => {
  for(let i = 0; i < COUNT_PHOTO; i++){
    photos.push({
      id: i,
      url: 'photos/' + (i + 1) + '.jpg',
      photoFilter: getRandomElementArr(filtersPhoto),
      likes: randomNumber(Likes.MIN, Likes.MAX),
      comments: addComments(),
    });
  }
};
addPhotos();


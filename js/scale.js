import {removeLastCharacter} from './utils.js';

const ScaleOptions = {
  MIN: 25,
  MAX: 100,
  BY_DEFAULT: 100,
  STEP: 25
};

const scaleControls = document.querySelector('.scale');
const scaleSmaller = scaleControls.querySelector('.scale__control--smaller');
const scaleBigger = scaleControls.querySelector('.scale__control--bigger');
const scaleValue = scaleControls.querySelector('.scale__control--value');
const imagePreview = document.querySelector('.img-upload__preview img');

const setValuesScale = (scale) => {
  scaleValue.value = `${scale}%`;
  imagePreview.style.transform = `scale(${scale / 100})`;
};

const resetValuesScale = () => {
  imagePreview.style.transform = '';
  scaleValue.value = `${ScaleOptions.BY_DEFAULT}%`;
};

const getScale = () => {
  const currentValue = scaleValue.value;
  return Number(removeLastCharacter(currentValue));
};

const setScaleSmaller = () => {
  const scale = getScale();
  if(scale > ScaleOptions.MIN) {
    const newScale = scale - ScaleOptions.STEP;
    setValuesScale(newScale);
  }
};

const setScaleBigger = () => {
  const scale = getScale();
  if(scale < ScaleOptions.MAX) {
    const newScale = scale + ScaleOptions.STEP;
    setValuesScale(newScale);
  }
};

const addListeners = () => {
  scaleSmaller.addEventListener('click', setScaleSmaller);
  scaleBigger.addEventListener('click', setScaleBigger);
};

const removeListeners = () => {
  scaleSmaller.removeEventListener('click', setScaleSmaller);
  scaleBigger.removeEventListener('click', setScaleBigger);
};

export const initScale = () => {
  resetValuesScale();
  addListeners();
};

export const resetScale = () => {
  resetValuesScale();
  removeListeners();
};

import { codeOptionTypes } from './constants';

export const delay = (time) => new Promise((res) => setTimeout(res, time));

export const getCodeOptionTypesToArray = () => {
  return Object.keys(codeOptionTypes).map((key) => codeOptionTypes[key]);
};

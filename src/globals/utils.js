import { codeOptionTypes, userRolesArray } from './constants';

export const delay = (time) => new Promise((res) => setTimeout(res, time));

export const getCodeOptionTypesToArray = () => {
  return Object.keys(codeOptionTypes).map((key) => codeOptionTypes[key]);
};

export const getUserRolesCategories = () => {
  const itemIds = [];
  const registerItemId = (item) => {
    if (item.children?.length) {
      itemIds.push(item.id);
      item.children.forEach(registerItemId);
    }
  };
  userRolesArray.forEach(registerItemId);
  return itemIds;
};

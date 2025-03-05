import { codeOptionTypes, userRoles } from './constants';

export const delay = (time) => new Promise((res) => setTimeout(res, time));

export const getCodeOptionTypesToArray = () => {
  return Object.keys(codeOptionTypes).map((key) => codeOptionTypes[key]);
};

// export const getUserRolesToArray = (roles) => {
//   return Object.entries(roles).map(([key, value]) => );
// };
export const getAllCategoriesOfUserRoles = () => {
  const itemIds = [];
  const registerItemId = (item) => {
    if (item.children?.length) {
      itemIds.push(item.id);
      item.children.forEach(registerItemId);
    }
  };
  userRoles.forEach(registerItemId);
  return itemIds;
};

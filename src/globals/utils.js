import { codeOptionTypes, roleObjectArray } from './constants';

export const delay = (time) => new Promise((res) => setTimeout(res, time));

export const getCodeOptionTypesToArray = () => {
  return Object.keys(codeOptionTypes).map((key) => codeOptionTypes[key]);
};

export const getRolesCategories = () => {
  const itemIds = [];
  const registerItemId = (item) => {
    if (item.children?.length) {
      itemIds.push(item.id);
      item.children.forEach(registerItemId);
    }
  };
  roleObjectArray.forEach(registerItemId);
  return itemIds;
};

export const getRolesById = (itemId) => {
  const getRoleObject = (roles) => {
    let foundRoleObject = null;
    for (const role of roles) {
      if (role.id === itemId) {
        foundRoleObject = role;
        break;
      }
      if (role.children && role.children.length > 0) {
        foundRoleObject = getRoleObject(role.children);
        if (foundRoleObject) {
          break;
        }
      }
    }
    return foundRoleObject;
  };
  const getRolesByObject = (roleObject) => {
    if (roleObject.children && roleObject.children.length > 0) {
      return roleObject.children.reduce((total, role) => total.concat(getRolesByObject(role)), []);
    } else {
      return [roleObject.id];
    }
  };
  const foundRoleObject = getRoleObject(roleObjectArray);
  if (!foundRoleObject) {
    return [];
  }
  return getRolesByObject(foundRoleObject);
};

export const getRolesByData = (roles) => {
  const foundRoles = [];
  const callback = (roleObject) => {
    const haveAll = getRolesById(roleObject.id).every((r) => roles.includes(r));
    if (haveAll) {
      foundRoles.push(roleObject.id);
    }
    if (roleObject.children && roleObject.children.length > 0) {
      roleObject.children.forEach(callback);
    }
  };
  roleObjectArray.forEach(callback);
  return foundRoles;
};

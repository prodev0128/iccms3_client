import {
  depStatusTabs,
  personalStatusTabs,
  receiptStatusTabs,
  sidebarCategory,
  totalStatusTabs,
} from '../../../../../globals/constants';

const useStatusTabs = (type) => {
  switch (type) {
    case sidebarCategory.RECEIPT:
      return receiptStatusTabs;
    case sidebarCategory.DEP:
      return depStatusTabs;
    case sidebarCategory.PERSONAL:
      return personalStatusTabs;
    case sidebarCategory.TOTAL:
      return totalStatusTabs;
    default:
      return [];
  }
};

export default useStatusTabs;

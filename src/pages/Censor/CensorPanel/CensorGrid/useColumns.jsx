import { sidebarCategory } from '../../../../globals/constants';
import useDepColumns from '../../Dep/CensorGrid/useColumns';
import useReceiptColumns from '../../Receipt/CensorGrid/useColumns';
import useTotalColumns from '../../Total/CensorGrid/useColumns';

const useColumns = (type) => {
  switch (type) {
    case sidebarCategory.RECEIPT:
      return useReceiptColumns;
    case sidebarCategory.DEP:
      return useDepColumns;
    case sidebarCategory.TOTAL:
      return useTotalColumns;
    default:
      return [];
  }
};

export default useColumns;

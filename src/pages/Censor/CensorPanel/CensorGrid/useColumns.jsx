import { useMemo } from 'react';

import { sidebarCategory } from '../../../../globals/constants';
import { useCodes } from '../../../../redux/selectors';
import useDepColumnActions from '../../Dep/CensorGrid/useColumnActions';
import useReceiptColumnActions from '../../Receipt/CensorGrid/useColumnActions';
import useTotalColumnActions from '../../Total/CensorGrid/useColumnActions';

const useColumns = (actions, type) => {
  const { individualCodes } = useCodes();
  const { dep: deps = [], fileType: fileTypes = [], status = [] } = individualCodes;

  const useColumnActions = useMemo(() => {
    switch (type) {
      case sidebarCategory.RECEIPT:
        return useReceiptColumnActions;
      case sidebarCategory.DEP:
        return useDepColumnActions;
      case sidebarCategory.TOTAL:
        return useTotalColumnActions;
      default:
        return useTotalColumnActions;
    }
  }, [type]);

  return [
    useColumnActions(actions),
    { field: 'name', headerName: 'Name', width: 150 },
    {
      field: 'fileType',
      headerName: 'Type',
      width: 150,
      valueFormatter: (value) => (fileTypes.find((fileType) => fileType.value === value) || {}).name,
    },
    {
      field: 'status',
      headerName: 'Status',
      width: 150,
      valueFormatter: (value) => (status.find((status) => status.value === value) || {}).name,
    },
    {
      field: 'dep',
      headerName: 'Dep',
      width: 150,
      valueFormatter: (value) => (deps.find((dep) => dep.value === value) || {}).name,
    },
    {
      field: 'censor',
      headerName: 'Censor',
      width: 150,
      valueFormatter: (value) => (deps.find((dep) => dep.value === value) || {}).name,
    },
  ];
};

export default useColumns;

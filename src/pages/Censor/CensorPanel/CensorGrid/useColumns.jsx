import { useMemo } from 'react';

import { sidebarCategory } from '../../../../globals/constants';
import { useCodes, useUsers } from '../../../../redux/selectors';
import useDepColumnActions from '../../Dep/CensorGrid/useColumnActions';
import usePersonalColumnActions from '../../Personal/CensorGrid/useColumnActions';
import useReceiptColumnActions from '../../Receipt/CensorGrid/useColumnActions';
import useTotalColumnActions from '../../Total/CensorGrid/useColumnActions';

const useColumns = (actions, type) => {
  const { users } = useUsers();
  const { individualCodes } = useCodes();
  const { dataType: dataTypes = [], dep: deps = [], org: orgs = [], status = [] } = individualCodes;

  const useColumnActions = useMemo(() => {
    switch (type) {
      case sidebarCategory.RECEIPT:
        return useReceiptColumnActions;
      case sidebarCategory.DEP:
        return useDepColumnActions;
      case sidebarCategory.PERSONAL:
        return usePersonalColumnActions;
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
      field: 'dataType',
      headerName: 'Type',
      width: 150,
      valueFormatter: (value) => (dataTypes?.find((dataType) => dataType.value === value) || {}).name,
    },
    {
      field: 'status',
      headerName: 'Status',
      width: 150,
      valueFormatter: (value) => (status?.find((status) => status.value === value) || {}).name,
    },
    {
      field: 'dep',
      headerName: 'Dep',
      width: 150,
      valueFormatter: (value) => (deps?.find((dep) => dep.value === value) || {}).name,
    },
    {
      field: 'censor',
      headerName: 'Censor',
      width: 150,
      valueFormatter: (value) => (users?.find((user) => user.userID === value) || {}).name,
    },
    {
      field: 'checker',
      headerName: 'Checker',
      width: 150,
      valueFormatter: (value) => (users?.find((user) => user.userID === value) || {}).name,
    },
    {
      field: 'org',
      headerName: 'Org',
      width: 150,
      valueFormatter: (value) => (orgs?.find((org) => org.value === value) || {}).name,
    },
  ];
};

export default useColumns;

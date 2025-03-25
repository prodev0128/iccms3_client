import { sidebarCategory } from '../../../../globals/constants';
import { useCodes, useUsers } from '../../../../redux/selectors';
import useDepColumnActions from '../../Dep/InvoiceGridUtils/useColumnActions';
import usePersonalColumnActions from '../../Personal/InvoiceGridUtils/useColumnActions';
import useReceiptColumnActions from '../../Receipt/InvoiceGridUtils/useColumnActions';
import useTotalColumnActions from '../../Total/InvoiceGridUtils/useColumnActions';

const useColumns = (type) => {
  const { users } = useUsers();
  const { individualCodes } = useCodes();
  const { dataType: dataTypes = [], dep: deps = [], org: orgs = [], status = [] } = individualCodes;

  const columnActions = {
    [sidebarCategory.RECEIPT]: useReceiptColumnActions(),
    [sidebarCategory.DEP]: useDepColumnActions(),
    [sidebarCategory.PERSONAL]: usePersonalColumnActions(),
    [sidebarCategory.TOTAL]: useTotalColumnActions(),
  };

  return [
    columnActions[type],
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

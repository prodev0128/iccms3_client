import { AppRegistrationTwoTone } from '@mui/icons-material';

import GridActionItem from '../../../../components/CustomDataGrid/GridActionItem';
import { invoiceActions } from '../../../../globals/constants';
import { useCodes } from '../../../../redux/selectors';
import MenuToolbar from './MenuToolbar';

const useColumns = (actions) => {
  const { individualCodes } = useCodes();
  const { fileType: fileTypes = [], status = [] } = individualCodes;

  return [
    {
      field: 'actions',
      renderCell: ({ row }) => (
        <>
          <GridActionItem
            visible
            icon={AppRegistrationTwoTone}
            key="Register"
            label="Register"
            onClick={() => actions.updateInvoicesStatus([row.id], { action: invoiceActions.REGISTER, work: true })}
          />
          <GridActionItem
            cancel
            visible
            icon={AppRegistrationTwoTone}
            key="Unregister"
            label="Unregister"
            onClick={() => actions.updateInvoicesStatus([row.id], { action: invoiceActions.UNREGISTER, work: true })}
          />
        </>
      ),
      renderHeader: (params) => <MenuToolbar actions={actions} />,
      width: 160,
      filterable: false,
      editable: false,
      sortable: false,
    },
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
  ];
};

export default useColumns;

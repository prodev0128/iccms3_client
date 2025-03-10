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
      type: 'actions',
      width: 160,
      renderHeader: () => <MenuToolbar actions={actions} />,
      renderCell: ({ row }) => (
        <>
          <GridActionItem
            icon={AppRegistrationTwoTone}
            label="Register"
            onClick={() => actions.updateInvoicesStatus({ ids: [row.id], action: invoiceActions.REGISTER })}
          />
          <GridActionItem
            cancel
            icon={AppRegistrationTwoTone}
            label="Unregister"
            onClick={() => actions.updateInvoicesStatus({ ids: [row.id], action: invoiceActions.UNREGISTER })}
          />
        </>
      ),
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

import { AppRegistrationTwoTone } from '@mui/icons-material';

import GridActionItem from '../../../../components/CustomDataGrid/GridActionItem';
import { invoiceActions } from '../../../../globals/constants';
import MenuToolbar from './MenuToolbar';

const useColumnActions = (actions) => {
  return {
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
      </>
    ),
  };
};

export default useColumnActions;

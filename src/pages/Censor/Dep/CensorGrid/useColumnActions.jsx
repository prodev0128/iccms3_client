import { FlightTwoTone, GroupTwoTone, TransferWithinAStationTwoTone } from '@mui/icons-material';
import { useCallback } from 'react';

import GridActionItem from '../../../../components/CustomDataGrid/GridActionItem';
import { invoiceActions } from '../../../../globals/constants';
import { useAuth, useCodes } from '../../../../redux/selectors';
import MenuToolbar from './MenuToolbar';

const useColumnActions = (actions) => {
  const { user: me } = useAuth();
  const { individualCodes } = useCodes();
  const { action: cenActions = [] } = individualCodes;

  const checkStatus = useCallback(
    (cenAction, status) => {
      const action = cenActions?.find((action) => action.value === cenAction);
      return action?.options?.prevStatus === status;
    },
    [cenActions],
  );

  return {
    field: 'actions',
    type: 'actions',
    width: 160,
    renderHeader: () => <MenuToolbar actions={actions} />,
    renderCell: ({ row }) => (
      <>
        <GridActionItem
          cancel
          icon={FlightTwoTone}
          label="Untransfer"
          visible={checkStatus(invoiceActions.UNTRANSFER, row.status)}
          onClick={() => actions.updateInvoicesStatus({ ids: [row.id], action: invoiceActions.UNTRANSFER })}
        />
        <GridActionItem
          icon={GroupTwoTone}
          label="Assign"
          visible={checkStatus(invoiceActions.ASSIGN, row.status)}
          onClick={() => actions.updateInvoicesStatus({ ids: [row.id], action: invoiceActions.ASSIGN })}
        />
        <GridActionItem
          cancel
          icon={GroupTwoTone}
          label="Unassign"
          visible={checkStatus(invoiceActions.UNASSIGN, row.status)}
          onClick={() => actions.updateInvoicesStatus({ ids: [row.id], action: invoiceActions.UNASSIGN })}
        />
        <GridActionItem
          icon={TransferWithinAStationTwoTone}
          label="Receive"
          visible={checkStatus(invoiceActions.RECEIVE, row.status)}
          onClick={() => actions.updateInvoicesStatus({ ids: [row.id], action: invoiceActions.RECEIVE })}
        />
      </>
    ),
  };
};

export default useColumnActions;

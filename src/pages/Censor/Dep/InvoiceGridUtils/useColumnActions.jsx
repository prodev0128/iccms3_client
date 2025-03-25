import { FlightTwoTone, GroupTwoTone, TransferWithinAStationTwoTone } from '@mui/icons-material';
import { useCallback } from 'react';

import GridActionItem from '../../../../components/CustomDataGrid/GridActionItem';
import { invoiceActions } from '../../../../globals/constants';
import { useCodes } from '../../../../redux/selectors';
import useActions from '../../CensorPanel/InvoicesGrid/useActions';
import MenuToolbar from './MenuToolbar';

const useColumnActions = () => {
  const actions = useActions();
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
    renderHeader: () => <MenuToolbar />,
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
        <GridActionItem
          cancel
          icon={TransferWithinAStationTwoTone}
          label="Unreceive"
          visible={checkStatus(invoiceActions.UNRECEIVE, row.status)}
          onClick={() => actions.updateInvoicesStatus({ ids: [row.id], action: invoiceActions.UNRECEIVE })}
        />
      </>
    ),
  };
};

export default useColumnActions;

import { AppRegistrationTwoTone, FlightTwoTone, OnlinePredictionTwoTone } from '@mui/icons-material';
import { useCallback } from 'react';

import GridActionItem from '../../../../components/CustomDataGrid/GridActionItem';
import { invoiceActions } from '../../../../globals/constants';
import { useCodes } from '../../../../redux/selectors';
import MenuToolbar from './MenuToolbar';

const useColumnActions = (actions, censorActions) => {
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
          icon={AppRegistrationTwoTone}
          label="Register"
          visible={checkStatus(invoiceActions.REGISTER, row.status)}
          onClick={() => actions.updateInvoicesStatus({ ids: [row.id], action: invoiceActions.REGISTER })}
        />
        <GridActionItem
          cancel
          icon={AppRegistrationTwoTone}
          label="Unregister"
          visible={checkStatus(invoiceActions.UNREGISTER, row.status)}
          onClick={() => actions.updateInvoicesStatus({ ids: [row.id], action: invoiceActions.UNREGISTER })}
        />
        <GridActionItem
          icon={FlightTwoTone}
          label="Transfer"
          visible={checkStatus(invoiceActions.TRANSFER, row.status)}
          onClick={() => actions.updateInvoicesStatus({ ids: [row.id], action: invoiceActions.TRANSFER })}
        />
        <GridActionItem
          cancel
          icon={FlightTwoTone}
          label="Untransfer"
          visible={checkStatus(invoiceActions.UNTRANSFER, row.status)}
          onClick={() => actions.updateInvoicesStatus({ ids: [row.id], action: invoiceActions.UNTRANSFER })}
        />
        <GridActionItem
          icon={OnlinePredictionTwoTone}
          label="Out"
          visible={checkStatus(invoiceActions.OUT, row.status)}
          onClick={() => actions.updateInvoicesStatus({ ids: [row.id], action: invoiceActions.OUT })}
        />
        <GridActionItem
          cancel
          icon={OnlinePredictionTwoTone}
          label="Unout"
          visible={checkStatus(invoiceActions.UNOUT, row.status)}
          onClick={() => actions.updateInvoicesStatus({ ids: [row.id], action: invoiceActions.UNOUT })}
        />
      </>
    ),
  };
};

export default useColumnActions;

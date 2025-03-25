import { ApprovalTwoTone, SafetyCheckTwoTone, SpellcheckTwoTone } from '@mui/icons-material';
import { useCallback } from 'react';

import GridActionItem from '../../../../components/CustomDataGrid/GridActionItem';
import { invoiceActions } from '../../../../globals/constants';
import { useAuth, useCodes } from '../../../../redux/selectors';
import useActions from '../../CensorPanel/InvoicesGrid/useActions';
import MenuToolbar from './MenuToolbar';

const useColumnActions = () => {
  const actions = useActions();
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
    renderHeader: () => <MenuToolbar />,
    renderCell: ({ row }) => (
      <>
        <GridActionItem
          icon={SafetyCheckTwoTone}
          label="Censor"
          visible={checkStatus(invoiceActions.CENSOR, row.status) && row.censor === me.userID}
          onClick={() => actions.censorInvoices({ ids: [row.id] })}
        />
        <GridActionItem
          icon={ApprovalTwoTone}
          label="Censor Done"
          visible={checkStatus(invoiceActions.CENSOR, row.status) && row.censor === me.userID}
          onClick={() => actions.updateInvoicesStatus({ ids: [row.id], action: invoiceActions.CENSOR })}
        />
        <GridActionItem
          cancel
          icon={ApprovalTwoTone}
          label="Uncensor"
          visible={checkStatus(invoiceActions.UNCENSOR, row.status) && row.censor === me.userID}
          onClick={() => actions.updateInvoicesStatus({ ids: [row.id], action: invoiceActions.UNCENSOR })}
        />
        <GridActionItem
          icon={SpellcheckTwoTone}
          label="Check"
          visible={checkStatus(invoiceActions.CHECK, row.status) && row.checker === me.userID}
          onClick={() => actions.updateInvoicesStatus({ ids: [row.id], action: invoiceActions.CHECK })}
        />
        <GridActionItem
          cancel
          icon={SpellcheckTwoTone}
          label="Uncheck"
          visible={checkStatus(invoiceActions.UNCHECK, row.status) && row.checker === me.userID}
          onClick={() => actions.updateInvoicesStatus({ ids: [row.id], action: invoiceActions.UNCHECK })}
        />
      </>
    ),
  };
};

export default useColumnActions;

import { AppRegistrationTwoTone, DeleteTwoTone, ExpandMoreTwoTone } from '@mui/icons-material';
import { Divider, IconButton, Menu } from '@mui/material';
import { useMemo, useState } from 'react';

import CustomMenuItem from '../../../../components/CustomMenu/CustomMenuItem';
import { invoiceActions } from '../../../../globals/constants';
import { useInvoices } from '../../../../redux/selectors';
import useActions from '../../CensorPanel/InvoicesGrid/useActions';

const MenuToolbar = () => {
  const actions = useActions();
  const { selectedInvoices } = useInvoices();
  const selectedInvoiceIds = useMemo(() => selectedInvoices?.map((invoice) => invoice.id), [selectedInvoices]);

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <IconButton color="primary" onClick={handleClick}>
        <ExpandMoreTwoTone />
      </IconButton>

      <Menu anchorEl={anchorEl} open={open} sx={{ p: 0 }} onClose={handleClose}>
        <CustomMenuItem
          color="primary"
          icon={AppRegistrationTwoTone}
          label="Register"
          onClick={() => {
            actions.updateInvoicesStatus({ ids: selectedInvoiceIds, action: invoiceActions.REGISTER });
            handleClose();
          }}
        />
        <CustomMenuItem
          cancel
          color="primary"
          icon={AppRegistrationTwoTone}
          label="Unregister"
          onClick={() => {
            actions.updateInvoicesStatus({ ids: selectedInvoiceIds, action: invoiceActions.UNREGISTER });
            handleClose();
          }}
        />
        <Divider />
        <CustomMenuItem
          color="error"
          icon={DeleteTwoTone}
          label="Remove"
          onClick={() => {
            actions.fetchInvoices();
            handleClose();
          }}
        />
      </Menu>
    </>
  );
};

export default MenuToolbar;

import { DeleteTwoTone, EditTwoTone, ExpandMoreTwoTone, VisibilityTwoTone } from '@mui/icons-material';
import { Divider, IconButton, Menu, MenuItem } from '@mui/material';
import PropTypes from 'prop-types';
import { useState } from 'react';

import Text from '../../../../components/Text';

const MenuToolbar = ({ actions }) => {
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
        <MenuItem
          onClick={() => {
            actions.fetchInvoices();
            handleClose();
          }}
        >
          <VisibilityTwoTone color="primary" />
          <Text color="primary" sx={{ pl: 1 }}>
            View
          </Text>
        </MenuItem>
        <MenuItem
          onClick={() => {
            actions.fetchInvoices();
            handleClose();
          }}
        >
          <EditTwoTone color="primary" />
          <Text color="primary" sx={{ pl: 1 }}>
            Edit
          </Text>
        </MenuItem>
        <Divider />
        <MenuItem
          onClick={() => {
            actions.fetchInvoices();
            handleClose();
          }}
        >
          <DeleteTwoTone color="error" />
          <Text color="error" sx={{ pl: 1 }}>
            Remove
          </Text>
        </MenuItem>
      </Menu>
    </>
  );
};

MenuToolbar.propTypes = {
  actions: PropTypes.object.isRequired,
};

export default MenuToolbar;

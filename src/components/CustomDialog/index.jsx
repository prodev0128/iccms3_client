import { Dialog } from '@mui/material';
import { useDialogs } from '@toolpad/core';
import PropTypes from 'prop-types';
import { useCallback } from 'react';

import PaperComponent from './PageComponent';

const CustomDialog = ({ children, confirmWithoutSaving = false, draggable = false, onClose, open }) => {
  const dialogs = useDialogs();

  const onConfirmClose = useCallback(async () => {
    if (!confirmWithoutSaving) {
      onClose();
      return;
    }
    const confirmed = await dialogs.confirm('Are you discard the changes?', {
      title: 'Confirm',
      okText: 'Discard',
      cancelText: 'Cancel',
    });
    if (confirmed) {
      onClose();
    }
  }, [onClose, confirmWithoutSaving, dialogs]);

  return (
    <Dialog
      fullWidth
      aria-labelledby="draggable-dialog-title"
      open={open}
      PaperComponent={draggable ? PaperComponent : null}
      onClose={onConfirmClose}
    >
      {children}
    </Dialog>
  );
};

CustomDialog.propTypes = {
  children: PropTypes.node.isRequired,
  confirmWithoutSaving: PropTypes.bool,
  draggable: PropTypes.bool,
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
};

export default CustomDialog;

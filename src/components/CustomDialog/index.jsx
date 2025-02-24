import { Dialog } from '@mui/material';
import { useDialogs } from '@toolpad/core';
import PropTypes from 'prop-types';
import { useCallback } from 'react';

import PaperComponent from './PageComponent';

const CustomDialog = ({ children, confirmWithoutSaving = false, draggable = false, onClose, open }) => {
  const dialogs = useDialogs();

  const onConfirmClose = useCallback(async () => {
    if (!confirmWithoutSaving) {
      return;
    }
    const confirmed = await dialogs.confirm('Are you discard the changes?', {
      okText: 'Discard',
      cancelText: 'Cancel',
    });
    if (!confirmed) {
      return;
    }
    onClose(null);
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
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
  confirmWithoutSaving: PropTypes.bool,
  draggable: PropTypes.bool,
};

export default CustomDialog;

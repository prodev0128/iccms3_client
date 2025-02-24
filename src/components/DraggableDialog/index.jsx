import { Dialog } from '@mui/material';
import PropTypes from 'prop-types';

import PaperComponent from './PageComponent';

const DraggableDialog = ({ children, onClose, open }) => {
  return (
    <Dialog
      fullWidth
      aria-labelledby="draggable-dialog-title"
      open={open}
      PaperComponent={PaperComponent}
      onClose={() => onClose(null)}
    >
      {children}
    </Dialog>
  );
};

DraggableDialog.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
};

export default DraggableDialog;

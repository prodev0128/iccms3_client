import { Paper } from '@mui/material';
import { useRef } from 'react';

import Draggable from 'react-draggable';

const PaperComponent = (props) => {
  const nodeRef = useRef(null);
  return (
    <Draggable cancel={'[class*="MuiDialogContent-root"]'} handle="#draggable-dialog-title" nodeRef={nodeRef}>
      <Paper {...props} ref={nodeRef} />
    </Draggable>
  );
};

export default PaperComponent;

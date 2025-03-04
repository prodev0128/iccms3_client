import { IconButton, Tooltip } from '@mui/material';
import PropTypes from 'prop-types';

import CustomIcon from '../CustomIcon';

const GridActionItem = ({ cancel = false, color = 'inherit', icon, label, onClick, visible }) => {
  return visible ? (
    <Tooltip title={label}>
      <IconButton color="primary" onClick={onClick}>
        <CustomIcon cancel={cancel} color={color} icon={icon} />
      </IconButton>
    </Tooltip>
  ) : (
    <></>
  );
};

GridActionItem.propTypes = {
  cancel: PropTypes.bool,
  color: PropTypes.string,
  icon: PropTypes.elementType.isRequired,
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  visible: PropTypes.bool.isRequired,
};

export default GridActionItem;

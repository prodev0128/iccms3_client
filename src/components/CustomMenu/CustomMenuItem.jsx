import { MenuItem } from '@mui/material';
import PropTypes from 'prop-types';

import CustomIcon from '../CustomIcon';
import Text from '../Text';

const CustomMenuItem = ({ cancel = false, color, icon, label, onClick }) => {
  return (
    <MenuItem onClick={onClick}>
      <CustomIcon cancel={cancel} color={color} icon={icon} />
      <Text color={color} sx={{ pl: 1 }}>
        {label}
      </Text>
    </MenuItem>
  );
};

CustomMenuItem.propTypes = {
  cancel: PropTypes.bool,
  color: PropTypes.string.isRequired,
  icon: PropTypes.elementType.isRequired,
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default CustomMenuItem;

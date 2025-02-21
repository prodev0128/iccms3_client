import { Tooltip } from '@mui/material';
import { GridActionsCellItem } from '@mui/x-data-grid-pro';
import PropTypes from 'prop-types';

const GridAction = ({ icon, label, onClick, visible }) => {
  return (
    <GridActionsCellItem
      icon={<Tooltip title={label}>{icon}</Tooltip>}
      label={label}
      sx={{ display: visible ? 'block' : 'none' }}
      onClick={onClick}
    />
  );
};

GridAction.propTypes = {
  icon: PropTypes.element.isRequired,
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  visible: PropTypes.bool.isRequired,
};

export default GridAction;

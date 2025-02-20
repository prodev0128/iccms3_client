import { Tooltip } from '@mui/material';
import { GridActionsCellItem } from '@mui/x-data-grid-pro';
import PropTypes from 'prop-types';

const GridAction = ({ icon, label, onClick }) => {
  return <GridActionsCellItem icon={<Tooltip title={label}>{icon}</Tooltip>} label={label} onClick={onClick} />;
};

GridAction.propTypes = {
  icon: PropTypes.element.isRequired,
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default GridAction;

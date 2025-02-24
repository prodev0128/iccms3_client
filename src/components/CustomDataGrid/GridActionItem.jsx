import { Tooltip } from '@mui/material';
import { GridActionsCellItem } from '@mui/x-data-grid-pro';
import PropTypes from 'prop-types';

const GridActionItem = ({ icon, label, onClick, visible }) => {
  return visible ? (
    <GridActionsCellItem icon={<Tooltip title={label}>{icon}</Tooltip>} label={label} onClick={onClick} />
  ) : (
    <></>
  );
};

GridActionItem.propTypes = {
  icon: PropTypes.element.isRequired,
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  visible: PropTypes.bool.isRequired,
};

export default GridActionItem;

import { RefreshTwoTone } from '@mui/icons-material';
import { IconButton, Tooltip } from '@mui/material';
import PropTypes from 'prop-types';

const Toolbar = ({ fetchFiles }) => {
  return (
    <>
      <Tooltip arrow title="Refresh">
        <IconButton color="primary" onClick={() => fetchFiles()}>
          <RefreshTwoTone />
        </IconButton>
      </Tooltip>
    </>
  );
};

Toolbar.propTypes = {
  fetchFiles: PropTypes.func.isRequired,
};

export default Toolbar;

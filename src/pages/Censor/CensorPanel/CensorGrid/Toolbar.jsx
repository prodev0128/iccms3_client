import { RefreshTwoTone } from '@mui/icons-material';
import { IconButton, Tooltip } from '@mui/material';
import PropTypes from 'prop-types';

const Toolbar = ({ actions }) => {
  return (
    <>
      <Tooltip arrow title="Refresh">
        <IconButton
          color="primary"
          onClick={() => {
            actions.fetchInvoices();
            actions.fetchIndividualCodes();
          }}
        >
          <RefreshTwoTone />
        </IconButton>
      </Tooltip>
    </>
  );
};

Toolbar.propTypes = {
  actions: PropTypes.object.isRequired,
};

export default Toolbar;

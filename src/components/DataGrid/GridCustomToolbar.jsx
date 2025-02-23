import { Box } from '@mui/material';
import { GridToolbarContainer, GridToolbarQuickFilter } from '@mui/x-data-grid-pro';
import PropTypes from 'prop-types';

const GridCustomToolbar = ({ toolbar }) => {
  return (
    <GridToolbarContainer>
      <GridToolbarQuickFilter
        placeholder={'Search............'}
        sx={{
          '& .MuiInputBase-root': { height: '50px', padding: '10px' },
        }}
      />
      <Box sx={{ flexGrow: 1 }} />
      {toolbar}
    </GridToolbarContainer>
  );
};

GridCustomToolbar.propTypes = {
  toolbar: PropTypes.element.isRequired,
};

export default GridCustomToolbar;

import { Box } from '@mui/material';
import { GridToolbarQuickFilter } from '@mui/x-data-grid-pro';

const QuickSearchToolbar = () => {
  return (
    <Box
      sx={{
        p: 0.5,
        pb: 0,
      }}
    >
      <GridToolbarQuickFilter
        placeholder={'Search............'}
        sx={{
          '& .MuiInputBase-root': { height: '50px', padding: '10px' },
        }}
      />
    </Box>
  );
};

export default QuickSearchToolbar;

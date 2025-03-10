import { RefreshTwoTone } from '@mui/icons-material';
import { IconButton, Tooltip } from '@mui/material';

const useToolbar = (actions) => {
  return (
    <>
      <Tooltip arrow title="Refresh">
        <IconButton
          color="primary"
          onClick={() => {
            actions.fetchIndividualCodes();
            actions.fetchInvoices();
          }}
        >
          <RefreshTwoTone />
        </IconButton>
      </Tooltip>
    </>
  );
};

export default useToolbar;

import { RefreshTwoTone } from '@mui/icons-material';
import { IconButton, Tooltip } from '@mui/material';

const useToolbar = (actions) => {
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

export default useToolbar;

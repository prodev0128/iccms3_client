import { RefreshTwoTone } from '@mui/icons-material';
import { IconButton, Tooltip } from '@mui/material';

import useActions from './useActions';

const Toolbar = () => {
  const { fetchIndividualCodes, fetchInvoices } = useActions();

  return (
    <>
      <Tooltip arrow title="Refresh">
        <IconButton
          color="primary"
          onClick={() => {
            fetchInvoices();
            fetchIndividualCodes();
          }}
        >
          <RefreshTwoTone />
        </IconButton>
      </Tooltip>
    </>
  );
};

export default Toolbar;

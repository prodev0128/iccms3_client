import { RefreshTwoTone } from '@mui/icons-material';
import { IconButton, Tooltip } from '@mui/material';

import useActions from './useActions';

const Toolbar = () => {
  const { fetchDepUsers, fetchIndividualCodes, fetchInvoices } = useActions();

  return (
    <>
      <Tooltip arrow title="Refresh">
        <IconButton
          color="primary"
          onClick={() => {
            fetchInvoices();
            fetchIndividualCodes();
            fetchDepUsers();
          }}
        >
          <RefreshTwoTone />
        </IconButton>
      </Tooltip>
    </>
  );
};

export default Toolbar;

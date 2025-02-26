import { AddTwoTone, RefreshTwoTone } from '@mui/icons-material';
import { IconButton, Tooltip } from '@mui/material';

const useToolbar = (actions) => {
  return (
    <>
      <Tooltip arrow title="Refresh">
        <IconButton color="primary" onClick={actions.fetchCodes}>
          <RefreshTwoTone />
        </IconButton>
      </Tooltip>
      <Tooltip arrow title="Add Code">
        <IconButton color="primary" onClick={actions.createCode}>
          <AddTwoTone />
        </IconButton>
      </Tooltip>
    </>
  );
};

export default useToolbar;

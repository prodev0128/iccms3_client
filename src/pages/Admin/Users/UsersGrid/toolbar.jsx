import { AddTwoTone, RefreshTwoTone } from '@mui/icons-material';
import { IconButton, Tooltip } from '@mui/material';

const useToolbar = (actions) => {
  return (
    <>
      <Tooltip arrow title="Toggle Menu">
        <IconButton color="primary" onClick={actions.fetchUsers}>
          <RefreshTwoTone />
        </IconButton>
      </Tooltip>
      <Tooltip arrow title="Toggle Menu">
        <IconButton color="primary" onClick={actions.createUser}>
          <AddTwoTone />
        </IconButton>
      </Tooltip>
    </>
  );
};

export default useToolbar;

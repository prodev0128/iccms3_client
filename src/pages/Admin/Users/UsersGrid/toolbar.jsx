import { AddTwoTone, RefreshTwoTone } from '@mui/icons-material';
import { IconButton, Tooltip } from '@mui/material';

const useToolbar = (actions) => {
  return (
    <>
      <Tooltip arrow title="Refresh">
        <IconButton
          color="primary"
          onClick={() => {
            actions.fetchUsers();
            actions.fetchIndividualCodes();
          }}
        >
          <RefreshTwoTone />
        </IconButton>
      </Tooltip>
      <Tooltip arrow title="Add User">
        <IconButton color="primary" onClick={actions.createUser}>
          <AddTwoTone />
        </IconButton>
      </Tooltip>
    </>
  );
};

export default useToolbar;

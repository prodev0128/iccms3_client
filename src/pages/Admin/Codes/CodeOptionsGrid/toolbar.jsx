import { AddTwoTone, RefreshTwoTone } from '@mui/icons-material';
import { IconButton, Tooltip } from '@mui/material';

const useToolbar = (actions) => {
  return (
    <>
      <Tooltip arrow title="Refresh">
        <IconButton color="primary" onClick={actions.fetchCodeOptions}>
          <RefreshTwoTone />
        </IconButton>
      </Tooltip>
      <Tooltip arrow title="Add Code Option">
        <IconButton color="primary" onClick={actions.createCodeOption}>
          <AddTwoTone />
        </IconButton>
      </Tooltip>
    </>
  );
};

export default useToolbar;

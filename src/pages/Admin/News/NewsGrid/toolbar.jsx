import { AddTwoTone, RefreshTwoTone } from '@mui/icons-material';
import { IconButton, Tooltip } from '@mui/material';

const useToolbar = (actions) => {
  return (
    <>
      <Tooltip arrow title="Refresh">
        <IconButton color="primary" onClick={actions.fetchNews}>
          <RefreshTwoTone />
        </IconButton>
      </Tooltip>
      <Tooltip arrow title="Add News">
        <IconButton color="primary" onClick={actions.createNews}>
          <AddTwoTone />
        </IconButton>
      </Tooltip>
    </>
  );
};

export default useToolbar;

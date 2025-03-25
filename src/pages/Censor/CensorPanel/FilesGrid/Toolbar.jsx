import { RefreshTwoTone } from '@mui/icons-material';
import { IconButton, Tooltip } from '@mui/material';

import useActions from './useActions';

const Toolbar = () => {
  const { fetchFiles } = useActions();

  return (
    <>
      <Tooltip arrow title="Refresh">
        <IconButton color="primary" onClick={() => fetchFiles()}>
          <RefreshTwoTone />
        </IconButton>
      </Tooltip>
    </>
  );
};

export default Toolbar;

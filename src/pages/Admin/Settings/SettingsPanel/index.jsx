import { AddTwoTone, RefreshTwoTone } from '@mui/icons-material';
import { Box, Grid2, IconButton, Tooltip } from '@mui/material';

import { useSettings } from '../../../../redux/selectors';
import useActions from './actions';
import SettingItem from './SettingItem';

const SettingsPanel = () => {
  const { settings } = useSettings();
  const actions = useActions();

  return (
    <Box sx={{ p: 2 }}>
      <Box sx={{ display: 'flex', justifyContent: 'end' }}>
        <Tooltip arrow title="Add">
          <IconButton color="primary" onClick={actions.createSetting}>
            <AddTwoTone />
          </IconButton>
        </Tooltip>
        <Tooltip arrow title="Refresh">
          <IconButton color="primary" onClick={actions.fetchSettings}>
            <RefreshTwoTone />
          </IconButton>
        </Tooltip>
      </Box>
      <Grid2 container spacing={2} sx={{ height: 500 }}>
        {settings.map((setting, index) => (
          <Grid2 key={index} size={12}>
            <SettingItem actions={actions} setting={setting} />
          </Grid2>
        ))}
      </Grid2>
    </Box>
  );
};

export default SettingsPanel;

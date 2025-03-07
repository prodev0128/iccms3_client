import { AddTwoTone, RefreshTwoTone } from '@mui/icons-material';
import { Box, Card, Grid2, IconButton, Tooltip } from '@mui/material';

import { useSettings } from '../../../../redux/selectors';
import useActions from './actions';
import SettingItem from './SettingItem';

const SettingsPanel = () => {
  const { settings } = useSettings();
  const actions = useActions();

  return (
    <Card sx={{ m: 2, p: 2 }}>
      <Box sx={{ p: 2, display: 'flex', justifyContent: 'end' }}>
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
      <Box sx={{ height: 500 }}>
        <Grid2 container spacing={2}>
          {settings.map((setting, index) => (
            <Grid2 key={index} size={12}>
              <SettingItem actions={actions} setting={setting} />
            </Grid2>
          ))}
        </Grid2>
      </Box>
    </Card>
  );
};

export default SettingsPanel;

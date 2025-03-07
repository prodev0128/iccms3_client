import { DeleteTwoTone, EditTwoTone, RefreshTwoTone } from '@mui/icons-material';
import { Box, Grid2, IconButton, Tooltip } from '@mui/material';
import PropTypes from 'prop-types';

import DynamicFormField from '../../../../components/DynamicFormField';

const SettingItem = ({ actions, setting }) => {
  return (
    <Grid2 container>
      <Grid2 size={10}>
        <DynamicFormField option={{}} value={setting.value} onChange={() => {}} />
      </Grid2>
      <Grid2 size={2}>
        <Box sx={{ p: 2, display: 'flex', justifyContent: 'end' }}>
          <Tooltip arrow title="Edit">
            <IconButton color="primary" onClick={() => actions.updateSetting(setting)}>
              <EditTwoTone />
            </IconButton>
          </Tooltip>
          <Tooltip arrow title="Delete">
            <IconButton color="error" onClick={() => actions.deleteSetting(setting)}>
              <DeleteTwoTone />
            </IconButton>
          </Tooltip>
        </Box>
      </Grid2>
    </Grid2>
  );
};

SettingItem.propTypes = {
  setting: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired,
};

export default SettingItem;

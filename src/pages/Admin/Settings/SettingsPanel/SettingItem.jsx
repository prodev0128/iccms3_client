import { DeleteTwoTone, EditTwoTone } from '@mui/icons-material';
import { Grid, IconButton, Tooltip } from '@mui/material';
import PropTypes from 'prop-types';

import DynamicFormField from '../../../../components/DynamicFormField';

const SettingItem = ({ actions, setting }) => {
  return (
    <Grid container sx={{ px: 2, py: 1 }}>
      <Grid size={10} sx={{ display: 'flex', alignItems: 'center' }}>
        <DynamicFormField label={setting.name} type={setting.type} value={setting.value} onChange={(f) => f} />
      </Grid>
      <Grid size={2} sx={{ display: 'flex', justifyContent: 'end' }}>
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
      </Grid>
    </Grid>
  );
};

SettingItem.propTypes = {
  setting: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired,
};

export default SettingItem;

import { DeleteTwoTone, EditTwoTone } from '@mui/icons-material';
import { Grid2, IconButton, Tooltip } from '@mui/material';
import PropTypes from 'prop-types';

import DynamicFormField from '../../../../components/DynamicFormField';

const SettingItem = ({ actions, setting }) => {
  return (
    <Grid2 container sx={{ px: 2, py: 1 }}>
      <Grid2 size={10} sx={{ display: 'flex', alignItems: 'center' }}>
        <DynamicFormField label={setting.name} type={setting.type} value={setting.value} onChange={(f) => f} />
      </Grid2>
      <Grid2 size={2} sx={{ display: 'flex', justifyContent: 'end' }}>
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
      </Grid2>
    </Grid2>
  );
};

SettingItem.propTypes = {
  setting: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired,
};

export default SettingItem;

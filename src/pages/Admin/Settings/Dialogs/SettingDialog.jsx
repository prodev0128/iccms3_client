import { AddTwoTone } from '@mui/icons-material';
import { Button, DialogActions, DialogContent, DialogTitle, Grid2, IconButton, TextField } from '@mui/material';
import PropTypes from 'prop-types';
import { useMemo, useState } from 'react';
import * as Yup from 'yup';

import CustomDialog from '../../../../components/CustomDialog';
import SingleSelect from '../../../../components/CustomSelect/SingleSelect';
import DynamicFormField from '../../../../components/DynamicFormField';
import { codeOptionTypes, settingTypes } from '../../../../globals/constants';

const schema = Yup.object({
  key: Yup.string().required('Key is required'),
  name: Yup.string().required('Name is required'),
  type: Yup.string().required('Type is required'),
  value: Yup.mixed().required('Value is required'),
});

const SettingDialog = ({ onClose, open, payload }) => {
  const [data, setData] = useState(payload.data || {});
  const [errors, setErrors] = useState({});
  const [confirmWithoutSaving, setConfirmWithoutSaving] = useState(false);

  const title = useMemo(() => `${payload.type} CodeOption`, [payload]);

  const validateAndSave = async () => {
    try {
      await schema.validate(data, { abortEarly: false });
      setErrors({});
      onClose(data);
    } catch (err) {
      const newErrors = {};
      err.inner.forEach((e) => {
        newErrors[e.path] = e.message;
      });
      setErrors(newErrors);
    }
  };

  const updateData = (key, value) => {
    setConfirmWithoutSaving(true);
    setData((prevData) => ({ ...prevData, [key]: value }));
  };

  return (
    <CustomDialog draggable confirmWithoutSaving={confirmWithoutSaving} maxWidth="lg" open={open} onClose={onClose}>
      <DialogTitle style={{ cursor: 'move' }}>{title}</DialogTitle>
      <DialogContent>
        <Grid2 container spacing={2} sx={{ pt: 2 }}>
          <Grid2 size={{ sm: 6, xs: 12 }}>
            <TextField
              fullWidth
              error={!!errors.key}
              helperText={errors.key}
              label="key"
              placeholder="key"
              value={data?.key || ''}
              onChange={(e) => updateData('key', e.target.value)}
            />
          </Grid2>
          <Grid2 size={{ sm: 6, xs: 12 }}>
            <TextField
              fullWidth
              error={!!errors.name}
              helperText={errors.name}
              label="name"
              placeholder="name"
              value={data?.name || ''}
              onChange={(e) => updateData('name', e.target.value)}
            />
          </Grid2>
          <Grid2 size={{ sm: 6, xs: 12 }}>
            <SingleSelect
              error={!!errors.type}
              helperText={errors.type}
              label="type"
              options={settingTypes}
              value={data?.type}
              onChange={(value) => updateData('type', value)}
            />
          </Grid2>
          <Grid2 size={{ sm: 6, xs: 12 }}>
            <TextField
              fullWidth
              error={!!errors.value}
              helperText={errors.value}
              label="value"
              placeholder="value"
              value={data?.value || ''}
              onChange={(e) => updateData('value', e.target.value)}
            />
          </Grid2>
        </Grid2>
      </DialogContent>
      <DialogActions>
        <Button color="primary" variant="contained" onClick={validateAndSave}>
          Save
        </Button>
        <Button color="secondary" variant="outlined" onClick={() => onClose()}>
          Cancel
        </Button>
      </DialogActions>
    </CustomDialog>
  );
};

SettingDialog.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  payload: PropTypes.object.isRequired,
};

export default SettingDialog;

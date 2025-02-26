import { Button, DialogActions, DialogContent, DialogTitle, Grid2, TextField } from '@mui/material';
import PropTypes from 'prop-types';
import { useMemo, useState } from 'react';
import * as Yup from 'yup';

import CustomDialog from '../../../../components/CustomDialog';

const schema = Yup.object({
  name: Yup.string().required('Name is required'),
  value: Yup.string().required('Value is required'),
});

const CodeDialog = ({ onClose, open, payload }) => {
  const [data, setData] = useState(payload.data || {});
  const [errors, setErrors] = useState({});
  const [confirmWithoutSaving, setConfirmWithoutSaving] = useState(false);

  const title = useMemo(() => `${payload.type} Code`, [payload]);

  const updateData = (key, value) => {
    setConfirmWithoutSaving(true);
    setData((prevData) => ({ ...prevData, [key]: value }));
  };

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

  return payload.option ? (
    <CustomDialog confirmWithoutSaving={confirmWithoutSaving} draggable={true} open={open} onClose={() => onClose()}>
      <DialogTitle style={{ cursor: 'move' }}>{title}</DialogTitle>
      <DialogContent>
        <Grid2 container spacing={2} sx={{ pt: 2 }}>
          <Grid2 size={12}>
            <TextField disabled fullWidth label="type" placeholder="type" value={payload.option.name || ''} />
          </Grid2>
          <Grid2 size={{ sm: 6, xs: 12 }}>
            <TextField
              fullWidth
              error={!!errors.name}
              helperText={errors.name}
              label="name"
              placeholder="name"
              value={data.name || ''}
              onChange={(e) => updateData('name', e.target.value)}
            />
          </Grid2>
          <Grid2 size={{ sm: 6, xs: 12 }}>
            <TextField
              fullWidth
              error={!!errors.value}
              helperText={errors.value}
              label="value"
              placeholder="value"
              value={data.value || ''}
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
  ) : (
    <></>
  );
};

CodeDialog.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  payload: PropTypes.object.isRequired,
};

export default CodeDialog;

import { Button, DialogActions, DialogContent, DialogTitle, Grid2 } from '@mui/material';
import PropTypes from 'prop-types';
import { useState } from 'react';
import * as Yup from 'yup';

import CustomDialog from '../../../../components/CustomDialog';
import SingleSelect from '../../../../components/CustomSelect/SingleSelect';

const schema = Yup.object({
  dep: Yup.string().required('Dep is required'),
});

const TransferDialog = ({ onClose, open, payload }) => {
  const { dep: deps = [] } = payload.individualCodes || {};

  const [data, setData] = useState({});
  const [errors, setErrors] = useState({});
  const [confirmWithoutSaving, setConfirmWithoutSaving] = useState(false);

  const title = 'Transfer Dialog';

  const updateData = (key, value) => {
    setConfirmWithoutSaving(true);
    setData((prevData) => ({ ...prevData, [key]: value }));
  };

  const validate = async (key) => {
    try {
      await schema.validateAt(key, data);
      setErrors((prevError) => ({ ...prevError, [key]: undefined }));
    } catch (error) {
      setErrors((prevError) => ({ ...prevError, [key]: error.message }));
    }
  };

  const validateAndSave = async () => {
    try {
      await schema.validate(data, { abortEarly: false });
      setErrors({});
      onClose(data);
    } catch (error) {
      const newErrors = {};
      error.inner.forEach((e) => {
        newErrors[e.path] = e.message;
      });
      setErrors(newErrors);
    }
  };

  return (
    <CustomDialog draggable confirmWithoutSaving={confirmWithoutSaving} open={open} onClose={onClose}>
      <DialogTitle style={{ cursor: 'move' }}>{title}</DialogTitle>
      <DialogContent>
        <Grid2 container spacing={2} sx={{ pt: 2 }}>
          <Grid2 size={12}>
            <SingleSelect
              haveDisableOption
              error={!!errors.dep}
              helperText={errors.dep}
              label="dep *"
              options={deps}
              value={data.dep}
              onBlur={() => validate('dep')}
              onChange={({ value }) => updateData('dep', value)}
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

TransferDialog.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  payload: PropTypes.object.isRequired,
};

export default TransferDialog;

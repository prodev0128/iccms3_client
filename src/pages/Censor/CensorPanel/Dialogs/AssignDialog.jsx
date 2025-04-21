import { Button, DialogActions, DialogContent, DialogTitle, Grid } from '@mui/material';
import PropTypes from 'prop-types';
import { useMemo, useState } from 'react';
import * as Yup from 'yup';

import CustomDialog from '../../../../components/CustomDialog';
import SingleSelect from '../../../../components/CustomSelect/SingleSelect';
import { useUsers } from '../../../../redux/selectors';

const schema = Yup.object({
  censor: Yup.string().required('Censor is required'),
  checker: Yup.string().required('Checker is required'),
});

const AssignDialog = ({ onClose, open }) => {
  const { depUsers = [] } = useUsers();
  const users = useMemo(
    () => depUsers.map((user) => ({ value: user.userID, name: user.name, isActive: user.isActive })),
    [depUsers],
  );

  const [data, setData] = useState({ censor: '', checker: '' });
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
        <Grid container spacing={2} sx={{ pt: 2 }}>
          <Grid size={{ sm: 6, xs: 12 }}>
            <SingleSelect
              haveDisableOption
              error={!!errors.censor}
              helperText={errors.censor}
              label="censor *"
              options={users}
              value={data.censor}
              onBlur={() => validate('censor')}
              onChange={({ value }) => updateData('censor', value)}
            />
          </Grid>
          <Grid size={{ sm: 6, xs: 12 }}>
            <SingleSelect
              haveDisableOption
              error={!!errors.checker}
              helperText={errors.checker}
              label="checker *"
              options={users}
              value={data.checker}
              onBlur={() => validate('checker')}
              onChange={({ value }) => updateData('checker', value)}
            />
          </Grid>
        </Grid>
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

AssignDialog.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
};

export default AssignDialog;

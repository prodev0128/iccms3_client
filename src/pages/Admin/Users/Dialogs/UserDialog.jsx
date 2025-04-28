import { Button, DialogActions, DialogContent, DialogTitle, Grid2, TextField } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers';
import PropTypes from 'prop-types';
import { useMemo, useState } from 'react';
import * as Yup from 'yup';

import CustomDialog from '../../../../components/CustomDialog';
import SingleSelect from '../../../../components/CustomSelect/SingleSelect';
import { getDateFromObject, getUTCDate } from '../../../../globals/utils';

const schema = Yup.object({
  userID: Yup.string().required('UserID is required'),
  name: Yup.string().required('Name is required'),
  gender: Yup.string().required('Gender is required'),
  birthday: Yup.string().required('Birthday is required'),
  job: Yup.string().required('Job is required'),
  stampNo: Yup.number().positive('StampNo must be positive').required('StampNo is required'),
  dep: Yup.string().required('Dep is required'),
});

const UserDialog = ({ onClose, open, payload }) => {
  const { dep: deps = [], gender: genders = [], job: jobs = [] } = payload.individualCodes || {};

  const [data, setData] = useState(payload.data || {});
  const [errors, setErrors] = useState({});
  const [confirmWithoutSaving, setConfirmWithoutSaving] = useState(false);

  const title = useMemo(() => `${payload.type} User`, [payload]);

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
          <Grid2 size={{ sm: 6, xs: 12 }}>
            <TextField
              fullWidth
              error={!!errors.userID}
              helperText={errors.userID}
              label="userID *"
              placeholder="userID"
              value={data.userID || ''}
              onBlur={() => validate('userID')}
              onChange={(e) => updateData('userID', e.target.value)}
            />
          </Grid2>
          <Grid2 size={{ sm: 6, xs: 12 }}>
            <TextField
              fullWidth
              error={!!errors.name}
              helperText={errors.name}
              label="name *"
              placeholder="name"
              value={data.name || ''}
              onBlur={() => validate('name')}
              onChange={(e) => updateData('name', e.target.value)}
            />
          </Grid2>
          <Grid2 size={{ sm: 6, xs: 12 }}>
            <SingleSelect
              haveDisableOption
              error={!!errors.gender}
              helperText={errors.gender}
              label="gender *"
              options={genders}
              value={data.gender}
              onBlur={() => validate('gender')}
              onChange={({ value }) => updateData('gender', value)}
            />
          </Grid2>
          <Grid2 size={{ sm: 6, xs: 12 }}>
            <DatePicker
              label="birthday *"
              value={data.birthday ? getUTCDate(data.birthday) : null}
              slotProps={{
                textField: {
                  error: !!errors.birthday,
                  helperText: errors.birthday,
                  onBlur: () => validate('birthday'),
                },
              }}
              onChange={(value) => updateData('birthday', value ? getDateFromObject(value) : null)}
            />
          </Grid2>
          <Grid2 size={{ sm: 6, xs: 12 }}>
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
          <Grid2 size={{ sm: 6, xs: 12 }}>
            <SingleSelect
              haveDisableOption
              error={!!errors.job}
              helperText={errors.job}
              label="job *"
              options={jobs}
              value={data.job}
              onBlur={() => validate('job')}
              onChange={({ value }) => updateData('job', value)}
            />
          </Grid2>
          <Grid2 size={{ sm: 6, xs: 12 }}>
            <TextField
              fullWidth
              error={!!errors.stampNo}
              helperText={errors.stampNo}
              label="stampNo *"
              placeholder="stampNo"
              type="number"
              value={data.stampNo || ''}
              onBlur={() => validate('stampNo')}
              onChange={(e) => updateData('stampNo', e.target.valueAsNumber || 0)}
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

UserDialog.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  payload: PropTypes.object.isRequired,
};

export default UserDialog;

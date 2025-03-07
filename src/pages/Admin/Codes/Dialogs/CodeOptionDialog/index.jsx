import { AddTwoTone } from '@mui/icons-material';
import { Button, DialogActions, DialogContent, DialogTitle, Grid2, IconButton, TextField } from '@mui/material';
import PropTypes from 'prop-types';
import { useMemo, useState } from 'react';
import * as Yup from 'yup';

import CustomDialog from '../../../../../components/CustomDialog';
import GroupBox from '../../../../../components/GroupBox';
import ExtraOptionItem from './ExtraOptionItem';

const schema = Yup.object({
  type: Yup.string().required('Type is required'),
  name: Yup.string().required('Name is required'),
});

const CodeOptionDialog = ({ onClose, open, payload }) => {
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

  const handleAddOption = () => {
    updateData('options', [...data.options, {}]);
  };

  const handleRemoveOption = (index) => {
    setData((prevData) => {
      const options = [...prevData.options];
      options.splice(index, 1);
      return { ...prevData, options: [...options] };
    });
  };

  const updateOptionsData = (index, key, value) => {
    setData((prevData) => {
      const options = [...prevData.options];
      const newOptions = options.map((option, i) => (index === i ? { ...option, [key]: value } : { ...option }));
      return { ...prevData, options: newOptions };
    });
  };

  return (
    <CustomDialog draggable confirmWithoutSaving={confirmWithoutSaving} maxWidth="lg" open={open} onClose={onClose}>
      <DialogTitle style={{ cursor: 'move' }}>{title}</DialogTitle>
      <DialogContent>
        <Grid2 container spacing={2} sx={{ pt: 2 }}>
          <Grid2 size={{ sm: 6, xs: 12 }}>
            <TextField
              fullWidth
              error={!!errors.type}
              helperText={errors.type}
              label="type"
              placeholder="type"
              value={data?.type || ''}
              onChange={(e) => updateData('type', e.target.value)}
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
          <Grid2 size={12}>
            <GroupBox
              label="options"
              toolbar={
                <IconButton onClick={handleAddOption}>
                  <AddTwoTone />
                </IconButton>
              }
            >
              <Grid2 container spacing={2}>
                {data?.options?.map((option, index) => (
                  <Grid2 key={index} size={12}>
                    <ExtraOptionItem
                      handleRemoveOption={() => handleRemoveOption(index)}
                      option={option}
                      updateOptionsData={(key, value) => updateOptionsData(index, key, value)}
                    />
                  </Grid2>
                ))}
              </Grid2>
            </GroupBox>
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

CodeOptionDialog.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  payload: PropTypes.object.isRequired,
};

export default CodeOptionDialog;

import { Button, DialogActions, DialogContent, DialogTitle, Grid, TextField } from '@mui/material';
import PropTypes from 'prop-types';
import { useMemo, useState } from 'react';
import * as Yup from 'yup';

import CustomDialog from '../../../../components/CustomDialog';

const schema = Yup.object({
  title: Yup.string().required('Title is required'),
  content: Yup.string().required('Content is required'),
});

const NewsDialog = ({ onClose, open, payload }) => {
  const [data, setData] = useState(payload.data || {});
  const [errors, setErrors] = useState({});
  const [confirmWithoutSaving, setConfirmWithoutSaving] = useState(false);

  const title = useMemo(() => `${payload.type} News`, [payload]);

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
    <CustomDialog draggable confirmWithoutSaving={confirmWithoutSaving} maxWidth="md" open={open} onClose={onClose}>
      <DialogTitle style={{ cursor: 'move' }}>{title}</DialogTitle>
      <DialogContent>
        <Grid container spacing={2} sx={{ pt: 2 }}>
          <Grid size={12}>
            <TextField
              fullWidth
              error={!!errors.title}
              helperText={errors.title}
              label="title"
              placeholder="title"
              value={data?.title || ''}
              onChange={(e) => updateData('title', e.target.value)}
            />
          </Grid>
          <Grid size={12}>
            <TextField
              fullWidth
              multiline
              error={!!errors.content}
              helperText={errors.content}
              label="content"
              maxRows={10}
              minRows={5}
              placeholder="content"
              value={data?.content || ''}
              onChange={(e) => updateData('content', e.target.value)}
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

NewsDialog.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  payload: PropTypes.object.isRequired,
};

export default NewsDialog;

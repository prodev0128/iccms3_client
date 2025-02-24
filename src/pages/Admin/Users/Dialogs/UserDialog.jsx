import { Button, DialogActions, DialogContent, DialogTitle, Grid2, TextField } from '@mui/material';
import PropTypes from 'prop-types';
import { useMemo, useState } from 'react';

import CustomDialog from '../../../../components/CustomDialog';

const UserDialog = ({ onClose, open, payload }) => {
  const [confirmWithoutSaving, setConfirmWithoutSaving] = useState(false);
  const [data, setData] = useState(payload.data || {});
  const title = useMemo(() => `${payload.type} User`, [payload]);

  const updateData = (key, value) => {
    setConfirmWithoutSaving(true);
    setData((prevData) => ({ ...prevData, [key]: value }));
  };

  return (
    <CustomDialog
      confirmWithoutSaving={confirmWithoutSaving}
      draggable={true}
      open={open}
      onClose={() => onClose(null)}
    >
      <DialogTitle style={{ cursor: 'move' }}>{title}</DialogTitle>
      <DialogContent>
        <Grid2 container spacing={2} sx={{ pt: 2 }}>
          <Grid2 size={{ sm: 6, xs: 12 }}>
            <TextField
              fullWidth
              label="userID"
              placeholder="userID"
              value={data.userID || ''}
              onChange={(e) => updateData('userID', e.target.value)}
            />
          </Grid2>
          <Grid2 size={{ sm: 6, xs: 12 }}>
            <TextField
              fullWidth
              label="name"
              placeholder="name"
              value={data.name || ''}
              onChange={(e) => updateData('name', e.target.value)}
            />
          </Grid2>
        </Grid2>
      </DialogContent>
      <DialogActions>
        <Button color="primary" variant="contained" onClick={() => onClose(data)}>
          Save
        </Button>
        <Button color="secondary" variant="outlined" onClick={() => onClose(null)}>
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

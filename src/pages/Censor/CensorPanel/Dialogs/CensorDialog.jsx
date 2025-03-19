import {
  Button,
  ButtonGroup,
  DialogActions,
  DialogContent,
  DialogTitle,
  Grid2,
  List,
  ListItemButton,
} from '@mui/material';
import PropTypes from 'prop-types';
import { useCallback, useEffect } from 'react';

import CustomDialog from '../../../../components/CustomDialog';
import { debounceTime } from '../../../../globals/constants';
import useDebounceCallback from '../../../../hooks/useDebounceCallback';
import { useFiles } from '../../../../redux/selectors';
import useFileActions from '../CensorGrid/useFileActions';

const CensorDialog = ({ onClose, open, payload }) => {
  const { files, selectedFile } = useFiles();
  const { fetchFiles, selectFile } = useFileActions();

  const { ids = [] } = payload.data;

  const debouncedFetchFiles = useDebounceCallback(
    useCallback(async () => {
      fetchFiles(ids);
    }, [ids, fetchFiles]),
    debounceTime,
  );

  useEffect(() => {
    debouncedFetchFiles();
  }, [debouncedFetchFiles]);

  const title = 'Censor Dialog';

  return (
    <CustomDialog draggable maxWidth="" open={open} onClose={() => {}}>
      <DialogTitle style={{ cursor: 'move' }}>{title}</DialogTitle>
      <DialogContent sx={{ minHeight: 'calc(100vh - 180px)' }}>
        <Grid2 container spacing={1}>
          <Grid2 size={3}>
            <List sx={{ width: '100%', border: '1px solid black' }}>
              {files.map((file) => (
                <ListItemButton key={file.id} selected={selectedFile.id === file.id} onClick={() => selectFile(file)}>
                  {file.name}
                </ListItemButton>
              ))}
            </List>
            <ButtonGroup fullWidth aria-label="Basic button group" variant="outlined">
              <Button color="primary">Public</Button>
              <Button>Private</Button>
              <Button color="error">Recycle</Button>
            </ButtonGroup>
          </Grid2>
          <Grid2 size={9}></Grid2>
        </Grid2>
      </DialogContent>
      <DialogActions>
        <Button color="primary" variant="outlined" onClick={() => onClose()}>
          Close
        </Button>
      </DialogActions>
    </CustomDialog>
  );
};

CensorDialog.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  payload: PropTypes.object.isRequired,
};

export default CensorDialog;

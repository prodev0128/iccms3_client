import {
  Box,
  Button,
  ButtonGroup,
  DialogActions,
  DialogContent,
  DialogTitle,
  Grid2,
  List,
  ListItemButton,
  Typography,
} from '@mui/material';
import PropTypes from 'prop-types';
import { useCallback, useEffect, useMemo } from 'react';

import CustomDialog from '../../../../components/CustomDialog';
import { debounceTime } from '../../../../globals/constants';
import useDebounceCallback from '../../../../hooks/useDebounceCallback';
import { useCodes, useFiles } from '../../../../redux/selectors';
import useFileActions from '../CensorGrid/useFileActions';

const CensorDialog = ({ onClose, open, payload }) => {
  const {
    individualCodes: { cenFlag: cenFlags = [] },
  } = useCodes();
  const activeCenFlags = useMemo(() => cenFlags.filter((item) => item.isActive), [cenFlags]);
  const { files, selectedFile } = useFiles();
  const { fetchFiles, selectFile, updateFile } = useFileActions();

  const { ids = [] } = payload.data;

  const debouncedFetchFiles = useDebounceCallback(
    useCallback(() => {
      fetchFiles(ids);
    }, [ids, fetchFiles]),
    debounceTime,
  );

  useEffect(() => {
    debouncedFetchFiles();
  }, [debouncedFetchFiles]);

  useEffect(() => {
    if (!selectedFile.id && files.length) {
      selectFile(files[0]);
    }
  }, [files, selectedFile, selectFile]);

  const title = 'Censor Dialog';

  return (
    <CustomDialog draggable maxWidth="" open={open} onClose={() => {}}>
      <DialogTitle style={{ cursor: 'move' }}>{title}</DialogTitle>
      <DialogContent sx={{ minHeight: 'calc(100vh - 180px)' }}>
        <Grid2 container spacing={1}>
          <Grid2 size={3}>
            <List sx={{ width: '100%', border: '1px solid black' }}>
              {files.map((file, index) => (
                <ListItemButton key={file.id} selected={selectedFile.id === file.id} onClick={() => selectFile(file)}>
                  <Typography sx={{ pr: 2 }}>{index + 1}</Typography>
                  <Typography sx={{ pr: 2 }}>{file.name}</Typography>
                  <Typography>{file.cenFlag || ''}</Typography>
                </ListItemButton>
              ))}
            </List>
            <ButtonGroup fullWidth aria-label="Basic button group" variant="outlined">
              {activeCenFlags.map((item) => (
                <Button
                  color="primary"
                  key={item.id}
                  onClick={() => updateFile({ id: selectedFile.id, cenFlag: item.value })}
                >
                  {item.name} ({item.options?.shortcut})
                </Button>
              ))}
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

import { Button, ButtonGroup, DialogActions, DialogContent, DialogTitle, Grid2 } from '@mui/material';
import PropTypes from 'prop-types';
import { useCallback, useEffect, useMemo } from 'react';

import CustomDialog from '../../../../components/CustomDialog';
import useDebounceCallback from '../../../../hooks/useDebounceCallback';
import { useCodes, useFiles } from '../../../../redux/selectors';
import FilesGrid from '../FilesGrid';
import useActions from '../FilesGrid/useActions';

const CensorDialog = ({ onClose, open, payload }) => {
  const {
    individualCodes: { cenFlag: cenFlags = [] },
  } = useCodes();
  const activeCenFlags = useMemo(() => cenFlags.filter((item) => item.isActive), [cenFlags]);
  const { files, selectedFile } = useFiles();
  const { censorFiles, fetchFiles, selectFile } = useActions();

  const { ids = [] } = payload.data;

  const debouncedFetchFiles = useDebounceCallback(
    useCallback(() => {
      fetchFiles(ids);
    }, [ids, fetchFiles]),
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
            <FilesGrid rows={files} />
            <ButtonGroup fullWidth aria-label="Basic button group" variant="outlined">
              {activeCenFlags.map((item) => (
                <Button
                  color="primary"
                  key={item.id}
                  onClick={() => censorFiles({ id: selectedFile.id, cenFlag: item.value })}
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

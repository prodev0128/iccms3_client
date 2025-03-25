import { Box, Button, ButtonGroup, DialogActions, DialogContent, DialogTitle } from '@mui/material';
import PropTypes from 'prop-types';
import { useCallback, useEffect, useMemo } from 'react';

import CustomDialog from '../../../../components/CustomDialog';
import ResizableBox from '../../../../components/ResizableBox';
import useDebounceCallback from '../../../../hooks/useDebounceCallback';
import { useCodes, useFiles } from '../../../../redux/selectors';
import FilesGrid from '../FilesGrid';
import useActions from '../FilesGrid/useActions';

const CensorDialog = ({ onClose, open, payload }) => {
  const {
    individualCodes: { cenFlag: cenFlags = [] },
  } = useCodes();
  const activeCenFlags = useMemo(() => cenFlags.filter((item) => item.isActive), [cenFlags]);
  const { files, selectedFiles } = useFiles();
  const { censorFiles, fetchFiles, setSelectedFiles } = useActions();

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
    if (!selectedFiles.length && files.length) {
      setSelectedFiles([files[0]]);
    }
  }, [files, selectedFiles, setSelectedFiles]);

  const title = 'Censor Dialog';

  return (
    <CustomDialog draggable maxWidth="" open={open} onClose={() => {}}>
      <DialogTitle style={{ cursor: 'move' }}>{title}</DialogTitle>
      <DialogContent sx={{ minHeight: 'calc(100vh - 180px)' }}>
        <ResizableBox sx={{ width: '100%', height: '100%' }}>
          <Box>
            <FilesGrid />
            <ButtonGroup fullWidth aria-label="Basic button group" variant="outlined">
              {activeCenFlags.map((item) => (
                <Button
                  color="primary"
                  key={item.id}
                  onClick={() => censorFiles({ ids: selectedFiles, cenFlag: item.value })}
                >
                  {item.name} ({item.options?.shortcut})
                </Button>
              ))}
            </ButtonGroup>
          </Box>
          <Box sx={{ border: 'solid 1px' }}>Hi</Box>
        </ResizableBox>
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

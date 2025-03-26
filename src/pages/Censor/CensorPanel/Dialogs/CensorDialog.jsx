import { Box, Button, ButtonGroup, DialogActions, DialogContent, DialogTitle } from '@mui/material';
import PropTypes from 'prop-types';
import { useCallback, useEffect, useMemo } from 'react';

import CustomDialog from '../../../../components/CustomDialog';
import MediaViewer from '../../../../components/MediaViewer';
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
  const { censorFiles, fetchFiles, fetchMedia, setSelectedFiles } = useActions();

  const { invoiceIds = [] } = payload.data;

  useEffect(() => {
    if (selectedFiles.length) {
      fetchMedia(selectedFiles[selectedFiles.length - 1].path);
    }
  }, [selectedFiles, fetchMedia]);

  const debouncedFetchFiles = useDebounceCallback(
    useCallback(() => {
      setSelectedFiles([]);
      fetchFiles(invoiceIds);
    }, [invoiceIds, fetchFiles, setSelectedFiles]),
  );

  useEffect(() => {
    debouncedFetchFiles();
  }, [debouncedFetchFiles]);

  useEffect(() => {
    if (files.length) {
      setSelectedFiles([files[0]]);
    }
  }, [files, setSelectedFiles]);

  const title = 'Censor Dialog';

  return (
    <CustomDialog draggable maxWidth="" open={open} onClose={() => {}}>
      <DialogTitle style={{ cursor: 'move' }}>{title}</DialogTitle>
      <DialogContent sx={{ minHeight: 'calc(100vh - 180px)' }}>
        <ResizableBox initialWidth={500}>
          <Box>
            <FilesGrid fetchFiles={debouncedFetchFiles} />
            <ButtonGroup fullWidth aria-label="Basic button group" variant="outlined">
              {activeCenFlags.map((item) => (
                <Button
                  color="primary"
                  key={item.id}
                  onClick={() => {
                    censorFiles({ ids: selectedFiles.map((file) => file.id), cenFlag: item.value });
                    debouncedFetchFiles();
                  }}
                >
                  {item.name} ({item.options?.shortcut})
                </Button>
              ))}
            </ButtonGroup>
          </Box>
          <Box sx={{ border: 'solid 1px' }}>
            <MediaViewer />
          </Box>
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

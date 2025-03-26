import { Box, CircularProgress } from '@mui/material';
import { useMemo } from 'react';

import { getExtension } from '../../globals/utils';
import { useFiles, useMedia } from '../../redux/selectors';
import ImageViewer from './ImageViewer';
import PdfViewer from './PdfViewer';

const MediaViewer = () => {
  const { selectedFiles } = useFiles();
  const { blobUrl, status } = useMedia();

  const type = useMemo(() => {
    if (!selectedFiles.length) {
      return 'none';
    }
    const extension = getExtension(selectedFiles[0].name).toLowerCase();
    switch (extension) {
      case '.png':
      case '.jpg':
        return 'image';
      case '.pdf':
        return 'pdf';
      default:
        return 'other';
    }
  }, [selectedFiles]);

  if (type === 'none') {
    return (
      <Box sx={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        Select a file to view.
      </Box>
    );
  }

  if (status === 'loading') {
    return (
      <Box sx={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <CircularProgress />
      </Box>
    );
  }

  if (status === 'failed') {
    return (
      <Box sx={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        Failed to load media.
      </Box>
    );
  }

  if (type === 'image') {
    return <ImageViewer src={blobUrl} />;
  }

  if (type === 'pdf') {
    return <PdfViewer src={blobUrl} />;
  }

  return (
    <Box sx={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      Unsupported media type. {selectedFiles[0].name}
    </Box>
  );
};

export default MediaViewer;

import { Box, CircularProgress } from '@mui/material';
import { useMemo } from 'react';

import { getExtension } from '../../globals/utils';
import { useFiles, useMedia } from '../../redux/selectors';
import IframeView from './IframeView';
import OfficeView from './OfficeVIew';

const MediaViewer = () => {
  const { selectedFiles } = useFiles();
  const { blobUrl, status } = useMedia();
  const src = encodeURIComponent(blobUrl);

  const type = useMemo(() => {
    if (!selectedFiles.length) {
      return 'none';
    }
    const extension = getExtension(selectedFiles[0].name);
    switch (extension) {
      case '.pdf':
      case '.mp3':
      case '.mp4':
      case '.txt':
      case '.png':
      case '.jpg':
        return 'iframe';
      case '.doc':
      case '.docx':
      case '.ppt':
      case '.pptx':
      case '.xls':
      case '.xlsx':
        return 'office';
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

  if (type === 'iframe') {
    return <IframeView src={src} />;
  }

  if (type === 'office') {
    return <OfficeView src={src} />;
  }

  return (
    <Box sx={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      Unsupported media type. {selectedFiles[0].name}
    </Box>
  );
};

export default MediaViewer;

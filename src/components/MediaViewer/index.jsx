import { Box } from '@mui/material';

import { useFiles } from '../../redux/selectors';
import ImageViewer from './ImageViewer';
import PdfViewer from './PdfViewer';

const MediaViewer = () => {
  const { selectedFiles } = useFiles();
  if (!selectedFiles.length) {
    return (
      <Box sx={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        Select a file to view.
      </Box>
    );
  }

  const file = selectedFiles[0];
  const type = 'picture';
  const src = 'http://localhost:3134/media?fileName=' + file.path;

  if (type === 'picture') {
    return <ImageViewer src={src} />;
  }

  if (type === 'pdf') {
    return <PdfViewer src={src} />;
  }

  return (
    <Box sx={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      Unsupported media type.
    </Box>
  );
};

export default MediaViewer;

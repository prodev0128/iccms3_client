import ZoomInIcon from '@mui/icons-material/ZoomIn';
import { Box, IconButton } from '@mui/material';
import Dialog from '@mui/material/Dialog';
import PropTypes from 'prop-types';
import { useState } from 'react';

const ImageViewer = ({ src }) => {
  const [zoomOpen, setZoomOpen] = useState(false);

  return (
    <Box
      sx={{
        position: 'relative',
        width: '100%',
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f0f0f0',
      }}
    >
      <img
        alt="Selected"
        src={src}
        style={{
          maxWidth: '100%',
          maxHeight: '100%',
          objectFit: 'contain',
          cursor: 'zoom-in',
        }}
        onClick={() => setZoomOpen(true)}
      />

      <IconButton
        sx={{ position: 'absolute', top: 16, right: 16, backgroundColor: '#fff' }}
        onClick={() => setZoomOpen(true)}
      >
        <ZoomInIcon />
      </IconButton>

      <Dialog maxWidth="xl" open={zoomOpen} onClose={() => setZoomOpen(false)}>
        <Box
          sx={{
            padding: 2,
            backgroundColor: '#000',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <img
            alt="Zoomed"
            src={src}
            style={{
              maxWidth: '90vw',
              maxHeight: '90vh',
              objectFit: 'contain',
            }}
          />
        </Box>
      </Dialog>
    </Box>
  );
};

ImageViewer.propTypes = {
  src: PropTypes.string.isRequired,
};

export default ImageViewer;

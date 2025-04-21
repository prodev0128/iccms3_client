import { Box } from '@mui/material';
import PropTypes from 'prop-types';

const IframeView = ({ src }) => {
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
      <iframe height="100%" src={src} title="PDF" width="100%" />
    </Box>
  );
};

IframeView.propTypes = {
  src: PropTypes.string.isRequired, // Expecting a blob URL like "blob:..." or a file URL/path
};

export default IframeView;

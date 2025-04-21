import { Box } from '@mui/material';
import PropTypes from 'prop-types';
import React from 'react';
import FileViewer from 'react-file-viewer';

import { getExtension } from '../../globals/utils';

const OfficeView = ({ src }) => {
  const extension = getExtension(src);
  //
  // switch (extension) {
  //   case 'docx':
  //     return <DocxViewer fileUrl={src} />;
  //   case 'xlsx':
  //     return <XlsxViewer fileUrl={src} />;
  //   case 'pptx':
  //     return <PptxViewer fileUrl={src} />;
  //   // Add other cases (doc, xls, ppt) if you have partial solutions
  //   default:
  //     return <div>Unsupported file format: {extension}</div>;
  // }
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
      <FileViewer filePath={encodeURIComponent(src)} fileType="docx" />
    </Box>
  );
};

OfficeView.propTypes = {
  src: PropTypes.string.isRequired, // Expecting a blob URL like "blob:..." or a file URL/path
};

export default OfficeView;

import React from 'react';

// Import your specialized viewer components
import DocxViewer from './DocxViewer'; // uses SheetJS
import PptxViewer from './PptxViewer'; // uses docx-preview or mammoth
import XlsxViewer from './XlsxViewer'; // uses PPTX4JS (or any suitable library)

// Helper to extract extension from a file URL or path
function getExtension(fileUrl = '') {
  const parts = fileUrl.split('.');
  return parts[parts.length - 1].toLowerCase();
}

const OfficeViewer = ({ fileUrl }) => {
  const extension = getExtension(fileUrl);

  switch (extension) {
    case 'docx':
      return <DocxViewer fileUrl={fileUrl} />;
    case 'xlsx':
      return <XlsxViewer fileUrl={fileUrl} />;
    case 'pptx':
      return <PptxViewer fileUrl={fileUrl} />;
    // Add other cases (doc, xls, ppt) if you have partial solutions
    default:
      return <div>Unsupported file format: {extension}</div>;
  }
};

export default OfficeViewer;

import PropTypes from 'prop-types';
import { useState } from 'react';
import { Document, Page } from 'react-pdf';

const PdfViewer = ({ src }) => {
  const [pageNumber, setPageNumber] = useState(1);
  const [numPages, setNumPages] = useState(null);
  return (
    <>
      <Document
        file={{ url: src, httpHeaders: { Authorization: `Bearer ${localStorage.getItem('accessToken')}` } }}
        onLoadSuccess={({ numPages }) => setNumPages(numPages)}
      >
        <Page pageNumber={pageNumber} />
      </Document>
      <div>
        <button onClick={() => setPageNumber((p) => Math.max(p - 1, 1))}>Prev</button>
        <span>
          {' '}
          Page {pageNumber} of {numPages}{' '}
        </span>
        <button onClick={() => setPageNumber((p) => Math.min(p + 1, numPages))}>Next</button>
      </div>
    </>
  );
};

PdfViewer.propTypes = {
  src: PropTypes.object.isRequired,
};

export default PdfViewer;

import React, { useEffect, useState } from 'react';
import * as XLSX from 'xlsx';

const XlsxViewer = ({ fileUrl }) => {
  const [sheetHtml, setSheetHtml] = useState('');

  useEffect(() => {
    if (!fileUrl) return;

    fetch(fileUrl)
      .then((res) => res.arrayBuffer())
      .then((ab) => {
        // Parse the data
        const workbook = XLSX.read(new Uint8Array(ab), { type: 'array' });
        // Just pick the first sheet for demonstration
        const firstSheetName = workbook.SheetNames[0];
        const worksheet = workbook.Sheets[firstSheetName];
        // Generate an HTML string
        const htmlString = XLSX.utils.sheet_to_html(worksheet);
        setSheetHtml(htmlString);
      })
      .catch((err) => console.error('Error reading xlsx:', err));
  }, [fileUrl]);

  // Dangerously set HTML from sheet_to_html
  return <div dangerouslySetInnerHTML={{ __html: sheetHtml }} />;
};

export default XlsxViewer;

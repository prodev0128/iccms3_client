import React, { useEffect, useRef } from 'react';

import { renderAsync } from 'docx-preview';

const DocxViewer = ({ fileUrl }) => {
  const containerRef = useRef(null);

  useEffect(() => {
    if (!fileUrl) return;

    fetch(fileUrl)
      .then((response) => response.arrayBuffer())
      .then((arrayBuffer) => {
        // renderAsync places the HTML representation into containerRef.current
        renderAsync(arrayBuffer, containerRef.current, null, {
          // Options object if needed
        });
      })
      .catch((err) => console.error('Error rendering docx:', err));
  }, [fileUrl]);

  // docx-preview will insert HTML content into this div
  return <div ref={containerRef} />;
};

export default DocxViewer;

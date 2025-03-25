import { Box } from '@mui/material';
import PropTypes from 'prop-types';
import React, { useRef, useState } from 'react';

const ResizableBox = ({ children, initialWidth = 300, minWidth = 100 }) => {
  const containerRef = useRef(null);
  const isResizing = useRef(false);
  const [leftWidth, setLeftWidth] = useState(initialWidth);

  const handleMouseDown = () => {
    isResizing.current = true;
    document.body.style.cursor = 'col-resize';
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);
  };

  const handleMouseMove = (e) => {
    if (!isResizing.current || !containerRef.current) return;
    const containerRect = containerRef.current.getBoundingClientRect();
    const newWidth = e.clientX - containerRect.left;
    const maxWidth = containerRect.width - minWidth;
    setLeftWidth(Math.min(Math.max(newWidth, minWidth), maxWidth));
  };

  const handleMouseUp = () => {
    isResizing.current = false;
    document.body.style.cursor = 'default';
    document.removeEventListener('mousemove', handleMouseMove);
    document.removeEventListener('mouseup', handleMouseUp);
  };

  const [first, second] = React.Children.toArray(children);

  return (
    <Box
      ref={containerRef}
      sx={{
        display: 'flex',
        width: '100%',
        height: '100%',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <Box
        sx={{
          width: leftWidth,
          minWidth,
          overflow: 'auto',
        }}
      >
        {first}
      </Box>

      <Box
        sx={{
          width: '5px',
          cursor: 'col-resize',
          backgroundColor: 'rgba(0,80,160,0.5)',
          '&:hover': {
            backgroundColor: 'rgba(80,80,200)',
          },
        }}
        onMouseDown={handleMouseDown}
      />

      <Box
        sx={{
          flex: 1,
          overflow: 'auto',
        }}
      >
        {second}
      </Box>
    </Box>
  );
};

ResizableBox.propTypes = {
  children: PropTypes.node.isRequired,
  initialWidth: PropTypes.number,
  minWidth: PropTypes.number,
};

export default ResizableBox;

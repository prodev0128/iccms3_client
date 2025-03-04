import { Box, FormLabel } from '@mui/material';
import PropTypes from 'prop-types';

const GroupBoxWithLabel = ({ children, label, toolbar }) => {
  return (
    <Box
      sx={{
        position: 'relative',
        border: '1px solid #ccc',
        borderRadius: 'inherit',
        padding: '1rem',
      }}
    >
      <FormLabel
        sx={{
          position: 'absolute',
          top: '-8px', // Move label up when focused or filled
          left: '16px',
          backgroundColor: 'white',
          fontSize: '12px', // Shrink font when label floats
        }}
      >
        {label}
      </FormLabel>
      <Box>{toolbar}</Box>
      {children}
    </Box>
  );
};

GroupBoxWithLabel.propTypes = {
  label: PropTypes.string.isRequired,
  toolbar: PropTypes.element,
  children: PropTypes.node.isRequired,
};

export default GroupBoxWithLabel;

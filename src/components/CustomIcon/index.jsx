import { Box, useTheme } from '@mui/material';
import PropTypes from 'prop-types';

const CustomIcon = ({ cancel = false, color = 'inherit', icon: Icon }) => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        position: 'relative',
        display: 'inline-flex',
      }}
    >
      <Icon color={color} />
      {cancel && (
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            width: '100%',
            height: '2px',
            backgroundColor: theme.palette[color]?.main || theme.palette.text.primary,
            transform: 'translate(-50%, -50%) rotate(45deg)',
          }}
        />
      )}
    </Box>
  );
};

CustomIcon.propTypes = {
  cancel: PropTypes.bool,
  color: PropTypes.string,
  icon: PropTypes.elementType.isRequired,
};

export default CustomIcon;

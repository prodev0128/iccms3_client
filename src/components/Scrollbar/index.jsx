import { Box, useTheme } from '@mui/material';
import PropTypes from 'prop-types';
import { Scrollbars } from 'react-custom-scrollbars-2';

const Scrollbar = ({ children, ...rest }) => {
  const theme = useTheme();

  return (
    <Scrollbars
      autoHide
      renderThumbVertical={() => {
        return (
          <Box
            sx={{
              '&:hover': {
                background: `${theme.colors.alpha.black[30]}`,
              },
              background: `${theme.colors.alpha.black[10]}`,
              borderRadius: `${theme.general.borderRadiusLg}`,
              transition: `${theme.transitions.create(['background'])}`,

              width: 5,
            }}
          />
        );
      }}
      {...rest}
    >
      {children}
    </Scrollbars>
  );
};

Scrollbar.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

export default Scrollbar;

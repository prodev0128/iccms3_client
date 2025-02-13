import { styled } from '@mui/material/styles';
import clsx from 'clsx';
import PropTypes from 'prop-types';

const TextWrapper = styled('span')(
  ({ theme }) => `
      display: inline-block;
      align-items: center;

      &.flexItem {
        display: inline-flex;
      }
      
      &.MuiText {

        &-black {
          color: ${theme.palette.common.black}
        }

        &-primary {
          color: ${theme.palette.primary.main}
        }
        
        &-secondary {
          color: ${theme.palette.secondary.main}
        }
        
        &-success {
          color: ${theme.palette.success.main}
        }
        
        &-warning {
          color: ${theme.palette.warning.main}
        }
              
        &-error {
          color: ${theme.palette.error.main}
        }
        
        &-info {
          color: ${theme.palette.info.main}
        }
      }
`,
);

const Text = ({ children, color = 'secondary', flex, ...rest }) => {
  return (
    <TextWrapper className={clsx(`MuiText-${color}`, { flexItem: flex })} {...rest}>
      {children}
    </TextWrapper>
  );
};

Text.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  color: PropTypes.oneOf(['primary', 'secondary', 'error', 'warning', 'success', 'info', 'black']),
  flex: PropTypes.any,
};

export default Text;

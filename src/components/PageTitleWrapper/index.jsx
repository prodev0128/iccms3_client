import { Box, styled } from '@mui/material';
import PropTypes from 'prop-types';

const PageTitle = styled(Box)(
  ({ theme }) => `
    padding: ${theme.spacing(4)};
  `,
);

const PageTitleWrapper = ({ children }) => {
  return (
    <>
      <PageTitle className="MuiPageTitle-wrapper">{children}</PageTitle>
    </>
  );
};

PageTitleWrapper.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PageTitleWrapper;

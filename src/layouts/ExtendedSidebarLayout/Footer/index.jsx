import { Box, Card, Link, styled, Typography } from '@mui/material';

const FooterWrapper = styled(Card)(
  ({ theme }) => `
    border-radius: 0;
    margin-top: ${theme.spacing(4)};
  `,
);

const Footer = () => {
  return (
    <FooterWrapper className="footer-wrapper">
      <Box
        alignItems="center"
        display={{ md: 'flex', xs: 'block' }}
        justifyContent="space-between"
        p={4}
        textAlign={{ md: 'left', xs: 'center' }}
      >
        <Box>
          <Typography variant="subtitle1">
            &copy; 2025 - International Communication Censor Management System
          </Typography>
        </Box>
        <Typography
          variant="subtitle1"
          sx={{
            pt: { md: 0, xs: 2 },
          }}
        >
          Crafted by{' '}
          <Link href="http://bloomui.com" rel="noopener noreferrer" target="_blank">
            BloomUI.com
          </Link>
        </Typography>
      </Box>
    </FooterWrapper>
  );
};

export default Footer;

import { Box, Card, Container, Link, styled, Typography } from '@mui/material';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import { Link as RouterLink } from 'react-router';

import Logo from '../../../components/Logo';
import Scrollbar from '../../../components/Scrollbar';
import LoginForm from './LoginForm';

const Content = styled(Box)(
  () => `
    display: flex;
    flex: 1;
    width: 100%;
  `,
);

const MainContent = styled(Box)(
  ({ theme }) => `
    padding-left: 440px;
    width: 100%;
    display: flex;
    align-items: center;

    ${theme.breakpoints.down('md')} {
      padding-left: 0;
    }
  `,
);

const SidebarWrapper = styled(Box)(
  ({ theme }) => `
    position: fixed;
    left: 0;
    top: 0;
    height: 100%;
    background: ${theme.colors.alpha.white[100]};
    width: 440px;
  `,
);

const SidebarContent = styled(Box)(
  ({ theme }) => `
    display: flex;
    flex-direction: column;
    padding: ${theme.spacing(6)};
  `,
);

const TypographyH1 = styled(Typography)(
  ({ theme }) => `
    font-size: ${theme.typography.pxToRem(33)};
`,
);

const LoginCover = () => {
  const { t } = useTranslation();

  return (
    <>
      <Helmet>
        <title>Login - Cover</title>
      </Helmet>
      <Content>
        <SidebarWrapper
          sx={{
            display: { md: 'flex', xs: 'none' },
          }}
        >
          <Scrollbar>
            <SidebarContent>
              <Logo />
              <Box mt={6}>
                <TypographyH1
                  variant="h1"
                  sx={{
                    mb: 7,
                  }}
                >
                  {t('International Communication Censor Management System')}
                </TypographyH1>
                <Typography
                  variant="subtitle1"
                  sx={{
                    my: 3,
                  }}
                >
                  {t(
                    'Choose between JSON Web Token, Firebase, AWS Amplify or Auth0. Regular login/register functionality is also available.',
                  )}
                </Typography>
                <Typography color="text.primary" fontWeight="bold" variant="subtitle1">
                  {t('Want to switch auth methods?')}
                </Typography>
                <Typography variant="subtitle1">
                  {t('It only takes seconds. There is a documentation section showing how to do exactly that')}.{' '}
                  <Link component={RouterLink} to="/docs">
                    Read docs
                  </Link>
                </Typography>
              </Box>
            </SidebarContent>
          </Scrollbar>
        </SidebarWrapper>
        <MainContent>
          <Container
            maxWidth="sm"
            sx={{
              alignItems: 'center',
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            <Card
              sx={{
                my: 4,
                p: 4,
              }}
            >
              <Box textAlign="center">
                <Typography
                  variant="h2"
                  sx={{
                    mb: 1,
                  }}
                >
                  {t('Sign in')}
                </Typography>
                <Typography
                  color="text.secondary"
                  fontWeight="normal"
                  variant="h4"
                  sx={{
                    mb: 3,
                  }}
                >
                  {t('Fill in the fields below to sign into your account.')}
                </Typography>
              </Box>
              <LoginForm />
              <Box my={4}>
                <Typography color="text.primary" component="span" fontWeight="bold" variant="subtitle2">
                  {t('Don’t have an account, yet?')}
                </Typography>{' '}
                <Link component={RouterLink} to="/account/register">
                  <b>Sign up here</b>
                </Link>
              </Box>
            </Card>
          </Container>
        </MainContent>
      </Content>
    </>
  );
};

export default LoginCover;

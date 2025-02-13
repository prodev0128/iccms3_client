import { Alert, Box, Card, Container, Link, styled, Tooltip, Typography } from '@mui/material';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import { Link as RouterLink } from 'react-router';

import Logo from '../../../../../components/Logo';
import Scrollbar from '../../../../../components/Scrollbar';
import useAuth from '../../../../../hooks/useAuth';
import AmplifyLogin from '../LoginAmplify';
import Auth0Login from '../LoginAuth0';
import FirebaseAuthLogin from '../LoginFirebaseAuth';
import JWTLogin from '../LoginJWT';

const icons = {
  Amplify: '/static/images/logo/amplify.svg',
  Auth0: '/static/images/logo/auth0.svg',
  FirebaseAuth: '/static/images/logo/firebase.svg',
  JWT: '/static/images/logo/jwt.svg',
};

const Content = styled(Box)(
  () => `
    display: flex;
    flex: 1;
    width: 100%;
`,
);

const MainContent = styled(Box)(
  () => `
  padding: 0 0 0 440px;
  width: 100%;
  display: flex;
  align-items: center;
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

const CardImg = styled(Card)(
  ({ theme }) => `
    border-radius: 100%;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    position: relative;
    border: 1px solid ${theme.colors.alpha.black[10]};
    transition: ${theme.transitions.create(['border'])};
    position: absolute;

    &:hover {
      border-color: ${theme.colors.primary.main};
    }
`,
);

const TypographyH1 = styled(Typography)(
  ({ theme }) => `
    font-size: ${theme.typography.pxToRem(33)};
`,
);

const LoginCover = () => {
  const { method } = useAuth();
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
                <Box
                  sx={{
                    height: 120,
                    position: 'relative',
                    width: 300,
                  }}
                >
                  <Tooltip arrow placement="top" title="Auth0">
                    <CardImg
                      sx={{
                        height: 80,
                        left: -20,
                        top: -40,
                        width: 80,
                      }}
                    >
                      <img alt="Auth0" src={icons.Auth0} width={40} />
                    </CardImg>
                  </Tooltip>
                  <Tooltip arrow placement="top" title="Firebase">
                    <CardImg
                      sx={{
                        height: 90,
                        left: 70,
                        width: 90,
                      }}
                    >
                      <img alt="Firebase" src={icons.FirebaseAuth} width={50} />
                    </CardImg>
                  </Tooltip>
                  <Tooltip arrow placement="top" title="JSON Web Token">
                    <CardImg
                      sx={{
                        height: 110,
                        left: 170,
                        top: -30,
                        width: 110,
                      }}
                    >
                      <img alt="JSON Web Token" src={icons.JWT} width={80} />
                    </CardImg>
                  </Tooltip>
                  <Tooltip arrow placement="top" title="AWS Amplify">
                    <CardImg
                      sx={{
                        bottom: 0,
                        height: 70,
                        right: -55,
                        width: 70,
                      }}
                    >
                      <img alt="Amplify" src={icons.Amplify} width={50} />
                    </CardImg>
                  </Tooltip>
                </Box>
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
              {method === 'Auth0' && <Auth0Login />}
              {method === 'FirebaseAuth' && <FirebaseAuthLogin />}
              {method === 'JWT' && <JWTLogin />}
              {method === 'Amplify' && <AmplifyLogin />}
              <Box my={4}>
                <Typography color="text.primary" component="span" fontWeight="bold" variant="subtitle2">
                  {t('Don’t have an account, yet?')}
                </Typography>{' '}
                <Link component={RouterLink} to="/account/register">
                  <b>Sign up here</b>
                </Link>
              </Box>
              {method !== 'Auth0' && (
                <Tooltip title={t('Used only for the live preview demonstration !')}>
                  <Alert severity="warning">
                    Use <b>demo@example.com</b> and password <b>TokyoPass1@</b>
                  </Alert>
                </Tooltip>
              )}
            </Card>
          </Container>
        </MainContent>
      </Content>
    </>
  );
};

export default LoginCover;

import {
  Box,
  Button,
  Checkbox,
  CircularProgress,
  Divider,
  FormControlLabel,
  FormHelperText,
  Link,
  styled,
  TextField,
  Typography,
} from '@mui/material';
import { Formik } from 'formik';
import { useTranslation } from 'react-i18next';
import { Link as RouterLink } from 'react-router';
import * as Yup from 'yup';

import useAuth from '../../../../hooks/useAuth';
import useRefMounted from '../../../../hooks/useRefMounted';

const ImgWrapper = styled('img')(
  ({ theme }) => `
    margin-right: ${theme.spacing(1)};
`,
);

const LoginFirebaseAuth = () => {
  const { signInWithEmailAndPassword, signInWithGoogle } = useAuth();
  const isMountedRef = useRefMounted();
  const { t } = useTranslation();

  const handleGoogleClick = async () => {
    try {
      await signInWithGoogle();
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
      <Button fullWidth size="large" variant="outlined" onClick={handleGoogleClick}>
        <ImgWrapper alt="Google" src="/static/images/logo/google.svg" />
        Sign in with Google
      </Button>
      <Divider
        sx={{
          mb: 2,
          mt: 4,
        }}
      >
        {t('or')}
      </Divider>
      <Formik
        initialValues={{
          email: '',
          password: '',
          submit: null,
          terms: false,
        }}
        validationSchema={Yup.object().shape({
          email: Yup.string()
            .email(t('The email provided should be a valid email address'))
            .max(255)
            .required(t('The email field is required')),
          password: Yup.string().max(255).required(t('The password field is required')),
          terms: Yup.boolean().oneOf([true], t('You must agree to our terms and conditions')),
        })}
        onSubmit={async (values, { setErrors, setStatus, setSubmitting }) => {
          try {
            await signInWithEmailAndPassword(values.email, values.password);

            if (isMountedRef.current) {
              setStatus({ success: true });
              setSubmitting(false);
            }
          } catch (err) {
            console.error(err);
            if (isMountedRef.current) {
              setStatus({ success: false });
              setErrors({ submit: err.message });
              setSubmitting(false);
            }
          }
        }}
      >
        {({ errors, handleBlur, handleChange, handleSubmit, isSubmitting, touched, values }) => (
          <form noValidate onSubmit={handleSubmit}>
            <TextField
              fullWidth
              error={Boolean(touched.email && errors.email)}
              helperText={touched.email && errors.email}
              label={t('Email address')}
              margin="normal"
              name="email"
              placeholder={t('Your email address here...')}
              type="email"
              value={values.email}
              variant="outlined"
              onBlur={handleBlur}
              onChange={handleChange}
            />
            <TextField
              fullWidth
              error={Boolean(touched.password && errors.password)}
              helperText={touched.password && errors.password}
              label={t('Password')}
              margin="normal"
              name="password"
              placeholder={t('Your password here...')}
              type="password"
              value={values.password}
              variant="outlined"
              onBlur={handleBlur}
              onChange={handleChange}
            />
            <Box alignItems="center" display="flex" justifyContent="space-between">
              <FormControlLabel
                control={<Checkbox checked={values.terms} color="primary" name="terms" onChange={handleChange} />}
                label={
                  <>
                    <Typography variant="body2">
                      {t('I accept the')}{' '}
                      <Link component="a" href="#">
                        {t('terms and conditions')}
                      </Link>
                      .
                    </Typography>
                  </>
                }
              />
              <Link component={RouterLink} to="/account/recover-password">
                <b>{t('Lost password?')}</b>
              </Link>
            </Box>
            {Boolean(touched.terms && errors.terms) && <FormHelperText error>{errors.terms}</FormHelperText>}
            <Button
              fullWidth
              color="primary"
              disabled={isSubmitting}
              size="large"
              startIcon={isSubmitting ? <CircularProgress size="1rem" /> : null}
              type="submit"
              variant="contained"
              sx={{
                mt: 3,
              }}
            >
              {t('Sign in')}
            </Button>
          </form>
        )}
      </Formik>
    </>
  );
};

export default LoginFirebaseAuth;

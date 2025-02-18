import {
  Box,
  Button,
  Checkbox,
  CircularProgress,
  FormControlLabel,
  FormHelperText,
  Link,
  TextField,
  Typography,
} from '@mui/material';
import { Formik } from 'formik';
import { useTranslation } from 'react-i18next';
import { Link as RouterLink } from 'react-router';
import * as Yup from 'yup';

import useAuth from '../../../hooks/useAuth';
import useRefMounted from '../../../hooks/useRefMounted';

const LoginJWT = () => {
  const { login } = useAuth();
  const isMountedRef = useRefMounted();
  const { t } = useTranslation();

  return (
    <Formik
      initialValues={{
        email: 'demo@example.com',
        password: 'TokyoPass1@',
        submit: null,
        terms: true,
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
          await login(values.email, values.password);

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
            autoFocus
            fullWidth
            error={Boolean(touched.email && errors.email)}
            helperText={touched.email && errors.email}
            label={t('Email address')}
            margin="normal"
            name="email"
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
  );
};

export default LoginJWT;

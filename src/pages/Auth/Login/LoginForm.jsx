import { Button, CircularProgress, TextField } from '@mui/material';
import { Formik } from 'formik';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import * as Yup from 'yup';

import { login } from '../../../redux/actions/auth';

const LoginForm = () => {
  const dispatch = useDispatch();
  const { t } = useTranslation();

  return (
    <Formik
      initialValues={{
        password: '12345678',
        submit: null,
        userID: 'admin',
      }}
      validationSchema={Yup.object().shape({
        password: Yup.string().max(255).required(t('The password field is required')),
        userID: Yup.string().max(255).required(t('The userID field is required')),
      })}
      onSubmit={(values, { setErrors, setStatus, setSubmitting }) => {
        setSubmitting(true);
        try {
          dispatch(login({ password: values.password, userID: values.userID }));
          setStatus({ success: true });
        } catch (error) {
          setStatus({ success: false });
          setErrors({ submit: error.message });
        } finally {
          setSubmitting(false);
        }
      }}
    >
      {({ errors, handleBlur, handleChange, handleSubmit, isSubmitting, touched, values }) => (
        <form noValidate onSubmit={handleSubmit}>
          <TextField
            autoFocus
            fullWidth
            error={Boolean(touched.userID && errors.userID)}
            helperText={touched.userID && errors.userID}
            label={t('User ID')}
            margin="normal"
            name="userID"
            type="text"
            value={values.userID}
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

export default LoginForm;

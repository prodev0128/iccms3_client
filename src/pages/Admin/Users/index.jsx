import { Box } from '@mui/material';
import { Helmet } from 'react-helmet-async';

import PageTitleWrapper from '../../../components/PageTitleWrapper';
import PageHeader from './PageHeader';
import UsersGrid from './UsersGrid';

const Users = () => {
  return (
    <>
      <Helmet>
        <title>Users Page</title>
      </Helmet>
      <PageTitleWrapper>
        <PageHeader />
      </PageTitleWrapper>
      <Box sx={{ height: 600, p: 1, width: '100%' }}>
        <UsersGrid />
      </Box>
    </>
  );
};

export default Users;

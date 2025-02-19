import { Box } from '@mui/material';
import { Helmet } from 'react-helmet-async';

import PageTitleWrapper from '../../../components/PageTitleWrapper';
import PageHeader from './PageHeader';
import UserGrid from './UserGrid';

const Users = () => {
  return (
    <>
      <Helmet>
        <title>Users Page</title>
      </Helmet>
      <PageTitleWrapper>
        <PageHeader />
      </PageTitleWrapper>
      <Box sx={{ height: 600, width: '100%' }}>
        <UserGrid />
      </Box>
    </>
  );
};

export default Users;

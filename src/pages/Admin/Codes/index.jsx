import { Box } from '@mui/material';
import { useState } from 'react';
import { Helmet } from 'react-helmet-async';

import PageTitleWrapper from '../../../components/PageTitleWrapper';
import CodeOptionsGrid from './CodeOptionsGrid';
import CodesGrid from './CodesGrid';
import PageHeader from './PageHeader';

const Users = () => {
  const [currentCodeOption, setCurrentCodeOption] = useState(null);
  return (
    <>
      <Helmet>
        <title>Codes Page</title>
      </Helmet>
      <PageTitleWrapper>
        <PageHeader />
      </PageTitleWrapper>
      <Box sx={{ height: 400, p: 1, width: '100%' }}>
        <CodeOptionsGrid setCurrentCodeOption={setCurrentCodeOption} />
      </Box>
      <Box sx={{ height: 400, p: 1, width: '100%' }}>
        <CodesGrid currentCodeOption={currentCodeOption} />
      </Box>
    </>
  );
};

export default Users;

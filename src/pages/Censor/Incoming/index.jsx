import { Box } from '@mui/material';
import { Helmet } from 'react-helmet-async';

import PageTitleWrapper from '../../../components/PageTitleWrapper';
import CensorGrid from './CensorGrid';
import PageHeader from './PageHeader';
import FileTypeTab from './Tabs/FileTypeTab';

const Processing = () => {
  return (
    <>
      <Helmet>
        <title>Incoming Page</title>
      </Helmet>
      <PageTitleWrapper>
        <PageHeader />
      </PageTitleWrapper>
      <Box sx={{ px: 1 }}>
        <FileTypeTab />
      </Box>
      <Box sx={{ height: 600, p: 1, width: '100%' }}>
        <CensorGrid />
      </Box>
    </>
  );
};

export default Processing;

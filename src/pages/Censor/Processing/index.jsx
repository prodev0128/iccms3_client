import { Box } from '@mui/material';
import { Helmet } from 'react-helmet-async';

import PageTitleWrapper from '../../../components/PageTitleWrapper';
import PageHeader from './PageHeader';
// import ReceiptGrid from './ReceiptGrid';

const Receipt = () => {
  return (
    <>
      <Helmet>
        <title>Receipt Page</title>
      </Helmet>
      <PageTitleWrapper>
        <PageHeader />
      </PageTitleWrapper>
      <Box sx={{ height: 600, p: 1, width: '100%' }}>{/*<ReceiptGrid />*/}</Box>
    </>
  );
};

export default Receipt;

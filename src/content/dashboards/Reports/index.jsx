import { Grid2 } from '@mui/material';
import { Helmet } from 'react-helmet-async';

import Footer from '../../../components/Footer';
import PageTitleWrapper from '../../../components/PageTitleWrapper';
import Block3 from './Block3';
import PageHeader from './PageHeader';

const DashboardReports = () => {
  return (
    <>
      <Helmet>
        <title>Reports Dashboard</title>
      </Helmet>
      <PageTitleWrapper>
        <PageHeader />
      </PageTitleWrapper>
      <Grid2 container alignItems="stretch" direction="row" justifyContent="center" spacing={4} sx={{ px: 4 }}>
        <Grid2 item md={5} xs={12}>
          <Block3 />
        </Grid2>
      </Grid2>
      <Footer />
    </>
  );
};

export default DashboardReports;

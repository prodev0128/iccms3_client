import { Helmet } from 'react-helmet-async';

import PageTitleWrapper from '../../../components/PageTitleWrapper';
import { sidebarCategory } from '../../../globals/constants';
import CensorPanel from '../CensorPanel';
import PageHeader from './PageHeader';

const Receipt = () => {
  return (
    <>
      <Helmet>
        <title>Receipt Page</title>
      </Helmet>
      <PageTitleWrapper>
        <PageHeader />
      </PageTitleWrapper>
      <CensorPanel type={sidebarCategory.RECEIPT} />
    </>
  );
};

export default Receipt;

import { Helmet } from 'react-helmet-async';

import PageTitleWrapper from '../../../components/PageTitleWrapper';
import { sidebarCategory } from '../../../globals/constants';
import CensorPanel from '../CensorPanel';
import PageHeader from './PageHeader';

const Total = () => {
  return (
    <>
      <Helmet>
        <title>Total Page</title>
      </Helmet>
      <PageTitleWrapper>
        <PageHeader />
      </PageTitleWrapper>
      <CensorPanel type={sidebarCategory.TOTAL} />
    </>
  );
};

export default Total;

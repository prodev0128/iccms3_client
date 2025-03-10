import { Helmet } from 'react-helmet-async';

import PageTitleWrapper from '../../../components/PageTitleWrapper';
import { sidebarCategory } from '../../../globals/constants';
import CensorPanel from '../CensorPanel';
import PageHeader from './PageHeader';

const Dep = () => {
  return (
    <>
      <Helmet>
        <title>Dep Page</title>
      </Helmet>
      <PageTitleWrapper>
        <PageHeader />
      </PageTitleWrapper>
      <CensorPanel type={sidebarCategory.DEP} />
    </>
  );
};

export default Dep;

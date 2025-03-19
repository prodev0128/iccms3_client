import { Helmet } from 'react-helmet-async';

import PageTitleWrapper from '../../../components/PageTitleWrapper';
import NewsGrid from './NewsGrid';
import PageHeader from './PageHeader';

const News = () => {
  return (
    <>
      <Helmet>
        <title>News Page</title>
      </Helmet>
      <PageTitleWrapper>
        <PageHeader />
      </PageTitleWrapper>
      <NewsGrid />
    </>
  );
};

export default News;

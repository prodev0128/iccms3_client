import { Helmet } from 'react-helmet-async';

import PageTitleWrapper from '../../../components/PageTitleWrapper';
import PageHeader from './PageHeader';
import SettingsPanel from './SettingsPanel';

const Settings = () => {
  return (
    <>
      <Helmet>
        <title>Settings Page</title>
      </Helmet>
      <PageTitleWrapper>
        <PageHeader />
      </PageTitleWrapper>
      <SettingsPanel />
    </>
  );
};

export default Settings;

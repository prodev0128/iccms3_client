import { Tab, Tabs } from '@mui/material';
import { useMemo, useState } from 'react';

import { useCodes } from '../../../../redux/selectors';

const FileTypeTab = () => {
  const { individualCodes } = useCodes();
  const status = useMemo(() => individualCodes?.fileType?.filter((item) => item.isActive) || [], [individualCodes]);
  const tabs = useMemo(() => [{ name: 'All', value: 'ALL' }, ...status], [status]);
  const [currentTab, setCurrentTab] = useState('ALL');

  return (
    <Tabs
      centered
      indicatorColor="secondary"
      textColor="primary"
      value={currentTab}
      variant="fullWidth"
      onChange={(_, value) => setCurrentTab(value)}
    >
      {tabs.map((tab) => (
        <Tab key={tab.value} label={tab.name} value={tab.value} />
      ))}
    </Tabs>
  );
};

export default FileTypeTab;

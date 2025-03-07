import { Tab, Tabs } from '@mui/material';
import { useCallback, useMemo } from 'react';
import { useSearchParams } from 'react-router';

import { initialTab } from '../../../../globals/constants';
import { useCodes } from '../../../../redux/selectors';

const StatusTab = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const { individualCodes } = useCodes();
  const status = useMemo(() => individualCodes?.status?.filter((item) => item.isActive) || [], [individualCodes]);
  const tabs = useMemo(() => [initialTab, ...status], [status]);

  const setStatus = useCallback(
    (value) => {
      setSearchParams((prev) => {
        const newParams = new URLSearchParams(prev);
        newParams.set('status', value);
        return newParams;
      });
    },
    [setSearchParams],
  );

  const currentTab = useMemo(() => searchParams.get('status') || initialTab.value, [searchParams]);

  return (
    <Tabs
      centered
      indicatorColor="primary"
      textColor="primary"
      value={currentTab}
      variant="fullWidth"
      onChange={(_, value) => setStatus(value)}
    >
      {tabs.map((tab) => (
        <Tab key={tab.value} label={tab.name} value={tab.value} />
      ))}
    </Tabs>
  );
};

export default StatusTab;

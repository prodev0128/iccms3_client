import { Tab, Tabs } from '@mui/material';
import { useCallback, useMemo } from 'react';
import { useSearchParams } from 'react-router';

const StatusTab = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const tabs = [
    { name: 'All', value: 'ALL' },
    { name: 'Transferred', value: 'TRANSFERRED' },
    { name: 'Assigned', value: 'ASSIGNED' },
    { name: 'Censored', value: 'CENSORED' },
    { name: 'Checked', value: 'CHECKED' },
  ];

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

  const currentTab = useMemo(() => searchParams.get('status') || 'ALL', [searchParams]);

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

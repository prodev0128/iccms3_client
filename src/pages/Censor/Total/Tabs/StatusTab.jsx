import { Tab, Tabs } from '@mui/material';
import { useCallback, useMemo } from 'react';
import { useSearchParams } from 'react-router';

import { invoiceStatus } from '../../../../globals/constants';

const StatusTab = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const tabs = [
    { name: 'All', value: 'ALL', min: invoiceStatus.UNDEFINED, max: invoiceStatus.COMPLETED },
    { name: 'Checking', value: 'CHECKING', min: invoiceStatus.UNDEFINED, max: invoiceStatus.OUTED },
    { name: 'Completed', value: 'COMPLETED', min: invoiceStatus.COMPLETED, max: invoiceStatus.COMPLETED },
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

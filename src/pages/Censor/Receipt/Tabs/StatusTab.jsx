import { Tab, Tabs } from '@mui/material';
import { useCallback, useMemo } from 'react';
import { useSearchParams } from 'react-router';

import { invoiceStatus } from '../../../../globals/constants';

const StatusTab = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const tabs = [
    { name: 'All', value: 'ALL', min: invoiceStatus.UNDEFINED, max: invoiceStatus.RECEIVED },
    { name: 'Undefined', value: 'UNDEFINED', min: invoiceStatus.UNDEFINED, max: invoiceStatus.UNDEFINED },
    { name: 'Registered', value: 'REGISTERED', min: invoiceStatus.REGISTERED, max: invoiceStatus.REGISTERED },
    { name: 'Checking', value: 'CHECKING', min: invoiceStatus.TRANSFERRED, max: invoiceStatus.CHECKED },
    { name: 'Received', value: 'RECEIVED', min: invoiceStatus.RECEIVED, max: invoiceStatus.RECEIVED },
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

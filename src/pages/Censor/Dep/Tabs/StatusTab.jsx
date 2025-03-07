import { Tab, Tabs } from '@mui/material';
import { useCallback, useEffect, useMemo } from 'react';
import { useDispatch } from 'react-redux';
import { useSearchParams } from 'react-router';

import { invoiceStatus } from '../../../../globals/constants';
import { setSelectedTab } from '../../../../redux/actions/invoices';

const StatusTab = () => {
  const dispatch = useDispatch();
  const [searchParams, setSearchParams] = useSearchParams();

  const tabs = useMemo(
    () => [
      { name: 'All', value: 'ALL', min: invoiceStatus.TRANSFERRED, max: invoiceStatus.COMPLETED },
      { name: 'Transferred', value: invoiceStatus.TRANSFERRED },
      { name: 'Assigned', value: invoiceStatus.ASSIGNED },
      { name: 'Censored', value: invoiceStatus.CENSORED },
      { name: 'Checked', value: invoiceStatus.CHECKED },
    ],
    [],
  );

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

  useEffect(() => {
    const foundTab = tabs.find((tab) => tab.value === currentTab);
    if (foundTab) {
      dispatch(setSelectedTab({ status: foundTab }));
    }
  }, [dispatch, tabs, currentTab]);

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

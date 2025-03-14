import { Tab, Tabs } from '@mui/material';
import { useCallback, useEffect, useMemo } from 'react';
import { useDispatch } from 'react-redux';
import { useSearchParams } from 'react-router';

import { initialTab } from '../../../../../globals/constants';
import { setSelectedTab } from '../../../../../redux/actions/invoices';
import useDataTypeTabs from './useDataTypeTabs';

const DataTypeTabs = () => {
  const dispatch = useDispatch();
  const [searchParams, setSearchParams] = useSearchParams();
  const tabs = useDataTypeTabs();

  const setDataType = useCallback(
    (value) => {
      setSearchParams((prev) => {
        const newParams = new URLSearchParams(prev);
        newParams.set('file_type', value);
        return newParams;
      });
    },
    [setSearchParams],
  );

  const currentTab = useMemo(() => searchParams.get('file_type') || initialTab, [searchParams]);

  useEffect(() => {
    const foundTab = tabs.find((tab) => tab.value === currentTab);
    if (foundTab) {
      dispatch(setSelectedTab({ dataType: foundTab }));
    }
  }, [dispatch, tabs, currentTab]);

  return (
    <Tabs
      centered
      indicatorColor="secondary"
      textColor="primary"
      value={currentTab}
      variant="fullWidth"
      onChange={(_, value) => setDataType(value)}
    >
      {tabs.map((tab) => (
        <Tab key={tab.value} label={tab.name} value={tab.value} />
      ))}
    </Tabs>
  );
};

export default DataTypeTabs;

import { Tab, Tabs } from '@mui/material';
import { useCallback, useEffect, useMemo } from 'react';
import { useSearchParams } from 'react-router';

import { initialTab } from '../../../../../globals/constants';
import useActions from '../../InvoicesGrid/useActions';
import useDataTypeTabs from './useDataTypeTabs';

const DataTypeTabs = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const tabs = useDataTypeTabs();
  const { setSelectedTab } = useActions();

  const setDataTypeTab = useCallback(
    (value) => {
      setSearchParams((prev) => {
        const newParams = new URLSearchParams(prev);
        newParams.set('data_type', value);
        return newParams;
      });
    },
    [setSearchParams],
  );

  const currentTab = useMemo(() => searchParams.get('data_type') || initialTab.value, [searchParams]);

  useEffect(() => {
    const foundTab = tabs?.find((tab) => tab.value === currentTab);
    if (foundTab) {
      setSelectedTab({ dataType: foundTab });
    } else {
      setDataTypeTab(initialTab.value);
    }
  }, [currentTab, setDataTypeTab, setSelectedTab, tabs]);

  return (
    <Tabs
      centered
      indicatorColor="secondary"
      textColor="primary"
      value={currentTab}
      variant="fullWidth"
      onChange={(_, value) => setDataTypeTab(value)}
    >
      {tabs.map((tab) => (
        <Tab key={tab.value} label={tab.name} value={tab.value} />
      ))}
    </Tabs>
  );
};

export default DataTypeTabs;

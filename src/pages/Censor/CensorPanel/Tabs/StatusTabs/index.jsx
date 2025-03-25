import PropTypes from 'prop-types';
import { useCallback, useEffect, useMemo } from 'react';
import { useSearchParams } from 'react-router';

import TabList from '../../../../../components/TabList';
import { initialTab } from '../../../../../globals/constants';
import useActions from '../../InvoicesGrid/useActions';
import useStatusTabs from './useStatusTabs';

const StatusTabs = ({ type }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const tabs = useStatusTabs(type);
  const { setSelectedTab } = useActions();

  const setStatusTab = useCallback(
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

  useEffect(() => {
    const foundTab = tabs?.find((tab) => tab.value === currentTab);
    if (foundTab) {
      setSelectedTab({ status: foundTab });
    } else {
      setStatusTab(initialTab.value);
    }
  }, [currentTab, setStatusTab, setSelectedTab, tabs]);

  return <TabList color="primary" tabs={tabs} value={currentTab} onChange={(value) => setStatusTab(value)} />;
};

StatusTabs.propTypes = {
  type: PropTypes.string.isRequired,
};

export default StatusTabs;

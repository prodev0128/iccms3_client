import PropTypes from 'prop-types';
import { useCallback, useEffect, useMemo } from 'react';
import { useDispatch } from 'react-redux';
import { useSearchParams } from 'react-router';

import TabList from '../../../../../components/TabList';
import { initialTab } from '../../../../../globals/constants';
import { setSelectedTab } from '../../../../../redux/actions/invoices';
import useStatusTabs from './useStatusTabs';

const StatusTabs = ({ type }) => {
  const dispatch = useDispatch();
  const [searchParams, setSearchParams] = useSearchParams();
  const tabs = useStatusTabs(type);

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

  const currentTab = useMemo(() => searchParams.get('status') || initialTab, [searchParams]);

  useEffect(() => {
    const foundTab = tabs.find((tab) => tab.value === currentTab);
    if (foundTab) {
      dispatch(setSelectedTab({ status: foundTab }));
    }
  }, [dispatch, tabs, currentTab]);

  return <TabList color="primary" tabs={tabs} value={currentTab} onChange={(value) => setStatus(value)} />;
};

StatusTabs.propTypes = {
  type: PropTypes.string.isRequired,
};

export default StatusTabs;

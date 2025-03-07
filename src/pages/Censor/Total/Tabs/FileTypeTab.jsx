import { Tab, Tabs } from '@mui/material';
import { useCallback, useMemo } from 'react';
import { useSearchParams } from 'react-router';

import { initialTab } from '../../../../globals/constants';
import { useCodes } from '../../../../redux/selectors';

const FileTypeTab = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const { individualCodes } = useCodes();
  const status = useMemo(() => individualCodes?.fileType?.filter((item) => item.isActive) || [], [individualCodes]);
  const tabs = useMemo(() => [initialTab, ...status], [status]);

  const setFileType = useCallback(
    (value) => {
      setSearchParams((prev) => {
        const newParams = new URLSearchParams(prev);
        newParams.set('file_type', value);
        return newParams;
      });
    },
    [setSearchParams],
  );

  const currentTab = useMemo(() => searchParams.get('file_type') || initialTab.value, [searchParams]);

  return (
    <Tabs
      centered
      indicatorColor="secondary"
      textColor="primary"
      value={currentTab}
      variant="fullWidth"
      onChange={(_, value) => setFileType(value)}
    >
      {tabs.map((tab) => (
        <Tab key={tab.value} label={tab.name} value={tab.value} />
      ))}
    </Tabs>
  );
};

export default FileTypeTab;

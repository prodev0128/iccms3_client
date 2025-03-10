import { useMemo } from 'react';

import { useCodes } from '../../../../../redux/selectors';

const useFileTypeTabs = () => {
  const { individualCodes } = useCodes();
  const fileTypes = useMemo(
    () =>
      individualCodes?.fileType
        ?.filter((item) => item.isActive)
        ?.map((item) => ({ name: item.name, value: item.value })) || [],
    [individualCodes],
  );
  return useMemo(() => [{ name: 'All', value: 'ALL' }, ...fileTypes], [fileTypes]);
};

export default useFileTypeTabs;

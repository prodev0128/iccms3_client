import { useMemo } from 'react';

import { initialTab } from '../../../../../globals/constants';
import { useCodes } from '../../../../../redux/selectors';

const useDataTypeTabs = () => {
  const { individualCodes } = useCodes();
  const dataTypes = useMemo(
    () =>
      individualCodes?.dataType
        ?.filter((item) => item.isActive)
        ?.map((item) => ({ name: item.name, value: item.value })) || [],
    [individualCodes],
  );
  return useMemo(() => [initialTab, ...dataTypes], [dataTypes]);
};

export default useDataTypeTabs;

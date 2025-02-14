import React, { useMemo, useState } from 'react';

import AccentHeaderLayout from './AccentHeaderLayout';
import ExtendedSidebarLayout from './ExtendedSidebarLayout';

export const LayoutContext = React.createContext();

const LayoutProviderWrapper = () => {
  const curLayoutName = localStorage.getItem('appLayout') || 'extended-sidebar';
  const [layoutName, _setLayoutName] = useState(curLayoutName);
  const setLayoutName = (layoutName) => {
    localStorage.setItem('appLayout', layoutName);
    _setLayoutName(layoutName);
  };
  const layout = useMemo(() => {
    switch (layoutName) {
      case 'accent-header':
        return <AccentHeaderLayout />;
      default:
        return <ExtendedSidebarLayout />;
    }
  }, [layoutName]);

  return <LayoutContext.Provider value={setLayoutName}>{layout}</LayoutContext.Provider>;
};

export default LayoutProviderWrapper;

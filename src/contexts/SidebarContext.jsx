import PropTypes from 'prop-types';
import { createContext, useState } from 'react';

export const SidebarContext = createContext({});

export const SidebarProvider = ({ children }) => {
  const [sidebarToggle, setSidebarToggle] = useState(false);
  const toggleSidebar = () => {
    setSidebarToggle(!sidebarToggle);
  };
  const closeSidebar = () => {
    setSidebarToggle(false);
  };

  return (
    <SidebarContext.Provider value={{ closeSidebar, sidebarToggle, toggleSidebar }}>{children}</SidebarContext.Provider>
  );
};

SidebarProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

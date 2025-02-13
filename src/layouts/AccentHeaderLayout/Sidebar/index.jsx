import { Box, Drawer, styled, useTheme } from '@mui/material';
import { useContext } from 'react';

import Logo from '../../../components/LogoSign';
import Scrollbar from '../../../components/Scrollbar';
import { SidebarContext } from '../../../contexts/SidebarContext';
import SidebarMenu from './SidebarMenu';
import SidebarTopSection from './SidebarTopSection';

const SidebarWrapper = styled(Box)(
  ({ theme }) => `
        width: ${theme.sidebar.width};
        min-width: ${theme.sidebar.width};
        color: ${theme.sidebar.textColor};
        background: ${theme.sidebar.background};
        box-shadow: ${theme.sidebar.boxShadow};
        position: relative;
        z-index: 7;
        height: 100%;
        @media (min-width: ${theme.breakpoints.values.lg}px) {
          height: calc(100% - ${theme.header.height});
          margin-top: ${theme.header.height};
        }
`,
);

const TopSection = styled(Box)(
  ({ theme }) => `
        margin: ${theme.spacing(2)};
`,
);

const Sidebar = () => {
  const { sidebarToggle, toggleSidebar } = useContext(SidebarContext);
  const closeSidebar = () => toggleSidebar();
  const theme = useTheme();

  return (
    <>
      <SidebarWrapper
        sx={{
          display: {
            lg: 'inline-block',
            xs: 'none',
          },
          left: 0,
          position: 'fixed',
          top: 0,
        }}
      >
        <Scrollbar>
          <TopSection>
            <SidebarTopSection />
          </TopSection>
          <SidebarMenu />
        </Scrollbar>
      </SidebarWrapper>
      <Drawer
        anchor={theme.direction === 'rtl' ? 'right' : 'left'}
        elevation={9}
        open={sidebarToggle}
        variant="temporary"
        sx={{
          boxShadow: `${theme.sidebar.boxShadow}`,
        }}
        onClose={closeSidebar}
      >
        <SidebarWrapper>
          <Scrollbar>
            <TopSection>
              <Box
                sx={{
                  mb: 3,
                  ml: 1,
                  mt: 1,
                  width: 52,
                }}
              >
                <Logo />
              </Box>
              <SidebarTopSection />
            </TopSection>
            <SidebarMenu />
          </Scrollbar>
        </SidebarWrapper>
      </Drawer>
    </>
  );
};

export default Sidebar;

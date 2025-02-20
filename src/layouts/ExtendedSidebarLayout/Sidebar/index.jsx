import { alpha, Box, darken, Divider, Drawer, lighten, styled, useTheme } from '@mui/material';
import { useContext } from 'react';

import Logo from '../../../components/LogoSign';
import Scrollbar from '../../../components/Scrollbar';
import { SidebarContext } from '../../../contexts/SidebarContext';
import SidebarFooter from './SidebarFooter';
import SidebarMenu from './SidebarMenu';
import SidebarTopSection from './SidebarTopSection';

const SidebarWrapper = styled(Box)(
  ({ theme }) => `
    width: ${theme.sidebar.width};
    min-width: ${theme.sidebar.width};
    color: ${theme.colors.alpha.trueWhite[70]};
    position: relative;
    z-index: 7;
    height: 100%;
    padding-bottom: 61px;
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
          background:
            theme.palette.mode === 'dark'
              ? alpha(lighten(theme.header.background, 0.1), 0.5)
              : darken(theme.colors.alpha.black[100], 0.5),
          boxShadow: theme.palette.mode === 'dark' ? theme.sidebar.boxShadow : 'none',
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
          <Box mt={3}>
            <Box
              mx={2}
              sx={{
                width: 52,
              }}
            >
              <Logo />
            </Box>
          </Box>
          <Divider
            sx={{
              background: theme.colors.alpha.trueWhite[10],
              mx: theme.spacing(2),
              my: theme.spacing(3),
            }}
          />
          <SidebarTopSection />
          <Divider
            sx={{
              background: theme.colors.alpha.trueWhite[10],
              mx: theme.spacing(2),
              my: theme.spacing(3),
            }}
          />
          <SidebarMenu />
        </Scrollbar>
        <Divider
          sx={{
            background: theme.colors.alpha.trueWhite[10],
          }}
        />
        <SidebarFooter />
      </SidebarWrapper>
      <Drawer
        anchor={theme.direction === 'rtl' ? 'right' : 'left'}
        elevation={9}
        open={sidebarToggle}
        sx={{ boxShadow: `${theme.sidebar.boxShadow}` }}
        variant="temporary"
        onClose={closeSidebar}
      >
        <SidebarWrapper
          sx={{
            background:
              theme.palette.mode === 'dark'
                ? theme.colors.alpha.white[100]
                : darken(theme.colors.alpha.black[100], 0.5),
          }}
        >
          <Scrollbar>
            <Box mt={3}>
              <Box
                mx={2}
                sx={{
                  width: 52,
                }}
              >
                <Logo />
              </Box>
            </Box>
            <Divider
              sx={{
                background: theme.colors.alpha.trueWhite[10],
                mx: theme.spacing(2),
                my: theme.spacing(3),
              }}
            />
            <SidebarTopSection />
            <Divider
              sx={{
                background: theme.colors.alpha.trueWhite[10],
                mx: theme.spacing(2),
                my: theme.spacing(3),
              }}
            />
            <SidebarMenu />
          </Scrollbar>
          <SidebarFooter />
        </SidebarWrapper>
      </Drawer>
    </>
  );
};

export default Sidebar;

import CloseTwoToneIcon from '@mui/icons-material/CloseTwoTone';
import MenuTwoToneIcon from '@mui/icons-material/MenuTwoTone';
import {
  alpha,
  Box,
  Divider,
  IconButton,
  lighten,
  Stack,
  styled,
  Tooltip,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import { useContext } from 'react';

import { SidebarContext } from '../../../contexts/SidebarContext';
import HeaderButtons from './Buttons';
import HeaderSearch from './Search';
import HeaderUserbox from './Userbox';

const HeaderWrapper = styled(Box)(
  ({ theme }) => `
    height: ${theme.header.height};
    color: ${theme.header.textColor};
    padding: ${theme.spacing(0, 2)};
    right: 0;
    z-index: 6;
    background-color: ${alpha(theme.header.background, 0.95)};
    backdrop-filter: blur(3px);
    position: fixed;
    justify-content: space-between;
    width: 100%;
    @media (min-width: ${theme.breakpoints.values.lg}px) {
            left: ${theme.sidebar.width};
      width: auto;
    }
  `,
);

const Header = () => {
  const { sidebarToggle, toggleSidebar } = useContext(SidebarContext);
  const theme = useTheme();
  const isLgScreen = useMediaQuery(theme.breakpoints.up('lg'));

  return (
    <HeaderWrapper
      alignItems="center"
      display="flex"
      sx={{
        boxShadow:
          theme.palette.mode === 'dark'
            ? `0 1px 0 ${alpha(
                lighten(theme.colors.primary.main, 0.7),
                0.15,
              )}, 0px 2px 8px -3px rgba(0, 0, 0, 0.2), 0px 5px 22px -4px rgba(0, 0, 0, .1)`
            : `0px 2px 8px -3px ${alpha(theme.colors.alpha.black[100], 0.2)}, 0px 5px 22px -4px ${alpha(
                theme.colors.alpha.black[100],
                0.1,
              )}`,
      }}
    >
      <Stack alignItems="center" direction="row" divider={<Divider flexItem orientation="vertical" />} spacing={2}>
        {!isLgScreen && (
          <Tooltip arrow title="Toggle Menu">
            <IconButton color="primary" onClick={toggleSidebar}>
              {!sidebarToggle ? <MenuTwoToneIcon fontSize="small" /> : <CloseTwoToneIcon fontSize="small" />}
            </IconButton>
          </Tooltip>
        )}
        <HeaderSearch />
      </Stack>
      <Stack alignItems="center" direction="row" divider={<Divider flexItem orientation="vertical" />} spacing={2}>
        <HeaderButtons />
        <HeaderUserbox />
      </Stack>
    </HeaderWrapper>
  );
};

export default Header;

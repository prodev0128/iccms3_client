import CheckTwoToneIcon from '@mui/icons-material/CheckTwoTone';
import SettingsTwoToneIcon from '@mui/icons-material/SettingsTwoTone';
import UnfoldMoreTwoToneIcon from '@mui/icons-material/UnfoldMoreTwoTone';
import { Box, Button, Divider, Menu, MenuItem, Popover, Stack, styled, Tooltip, Typography } from '@mui/material';
import Fab from '@mui/material/Fab';
import { useContext, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { NavLink } from 'react-router';

import { ThemeContext } from '../../theme/ThemeProvider';

const ThemeSettingsButton = styled(Box)(
  ({ theme }) => `
          position: fixed;
          z-index: 9999;
          right: ${theme.spacing(4)};
          bottom: ${theme.spacing(4)};
          
          &::before {
              width: 30px;
              height: 30px;
              content: ' ';
              position: absolute;
              border-radius: 100px;
              left: 13px;
              top: 13px;
              background: ${theme.colors.primary.main};
              animation: ripple 1s infinite;
              transition: ${theme.transitions.create(['all'])};
          }

          .MuiSvgIcon-root {
            animation: pulse 1s infinite;
            transition: ${theme.transitions.create(['all'])};
          }
  `,
);

const ThemeToggleWrapper = styled(Box)(
  ({ theme }) => `
          padding: ${theme.spacing(2)};
          min-width: 220px;
  `,
);

const ButtonWrapper = styled(Box)(
  ({ theme }) => `
        cursor: pointer;
        position: relative;
        border-radius: ${theme.general.borderRadiusXl};
        padding: ${theme.spacing(0.8)};
        display: flex;
        flex-direction: row;
        align-items: stretch;
        min-width: 80px;
        box-shadow: 0 0 0 2px ${theme.colors.primary.lighter};

        &:hover {
            box-shadow: 0 0 0 2px ${theme.colors.primary.light};
        }

        &.active {
            box-shadow: 0 0 0 2px ${theme.palette.primary.main};

            .colorSchemeWrapper {
                opacity: .6;
            }
        }
  `,
);

const ColorSchemeWrapper = styled(Box)(
  ({ theme }) => `

    position: relative;

    border-radius: ${theme.general.borderRadiusXl};
    height: 28px;
    
    &.colorSchemeWrapper {
        display: flex;
        align-items: stretch;
        width: 100%;

        .primary {
            border-top-left-radius: ${theme.general.borderRadiusXl};
            border-bottom-left-radius: ${theme.general.borderRadiusXl};
        }

        .secondary {
            border-top-right-radius: ${theme.general.borderRadiusXl};
            border-bottom-right-radius: ${theme.general.borderRadiusXl};
        }

        .primary,
        .secondary,
        .alternate {
            flex: 1;
        }
    }

    &.pureLight {
        .primary {
            background: #5569ff;
        }
    
        .secondary {
            background: #f2f5f9;
        }
    }

    &.greyGoose {
        .primary {
            background: #2442AF;
        }
    
        .secondary {
            background: #F8F8F8;
        }
    }
    
    &.purpleFlow {
        .primary {
            background: #9b52e1;
        }
    
        .secondary {
            background: #00b795;
        }
    }
    
    &.nebulaFighter {
        .primary {
            background: #8C7CF0;
        }
    
        .secondary {
            background: #070C27;
        }
    }

    &.greenFields {
        .primary {
            background: #44a574;
        }
    
        .secondary {
            background: #141c23;
        }
    }

    &.darkSpaces {
        .primary {
            background: #CB3C1D;
        }
    
        .secondary {
            background: #1C1C1C;
        }
    }

  `,
);

const CheckSelected = styled(Box)(
  ({ theme }) => `
    background: ${theme.palette.success.main};
    border-radius: 50px;
    height: 26px;
    width: 26px;
    color: ${theme.palette.success.contrastText};
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    left: 50%;
    top: 50%;
    margin: -13px 0 0 -13px;
    z-index: 5;

    .MuiSvgIcon-root {
        height: 16px;
        width: 16px;
    }

  `,
);

const ThemeSettings = () => {
  const { t } = useTranslation();

  const ref = useRef(null);
  const [isOpen, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const setThemeName = useContext(ThemeContext);
  const curThemeName = localStorage.getItem('appTheme') || 'PureLightTheme';

  const [theme, setTheme] = useState(curThemeName);

  const changeTheme = (theme) => {
    setTheme(theme);
    setThemeName(theme);
  };

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const openMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const closeMenu = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <ThemeSettingsButton>
        <Tooltip arrow title={t('Theme Settings')}>
          <Fab aria-label="add" color="primary" ref={ref} onClick={handleOpen}>
            <SettingsTwoToneIcon />
          </Fab>
        </Tooltip>
        <Popover
          disableScrollLock
          anchorEl={ref.current}
          open={isOpen}
          anchorOrigin={{
            horizontal: 'left',
            vertical: 'bottom',
          }}
          transformOrigin={{
            horizontal: 'right',
            vertical: 'bottom',
          }}
          onClose={handleClose}
        >
          <Box p={2}>
            <Typography
              variant="body1"
              sx={{
                fontWeight: 'bold',
                mb: 2,
                textAlign: 'center',
                textTransform: 'uppercase',
              }}
            >
              Layout Blueprints
            </Typography>
            <Button
              fullWidth
              aria-expanded={open ? 'true' : undefined}
              aria-haspopup="true"
              color="primary"
              endIcon={<UnfoldMoreTwoToneIcon />}
              size="large"
              variant="outlined"
              onClick={openMenu}
            >
              Choose layout
            </Button>
            <Menu
              disableScrollLock
              anchorEl={anchorEl}
              open={open}
              anchorOrigin={{
                horizontal: 'center',
                vertical: 'center',
              }}
              transformOrigin={{
                horizontal: 'center',
                vertical: 'center',
              }}
              onClose={closeMenu}
            >
              <MenuItem
                component={NavLink}
                to="/extended-sidebar/dashboards"
                sx={{
                  fontWeight: 'bold',
                }}
              >
                Extended Sidebar
              </MenuItem>
              <MenuItem
                component={NavLink}
                to="/accent-header/dashboards"
                sx={{
                  fontWeight: 'bold',
                }}
              >
                Accent Header
              </MenuItem>
              <MenuItem
                component={NavLink}
                to="/accent-sidebar/dashboards"
                sx={{
                  fontWeight: 'bold',
                }}
              >
                Accent Sidebar
              </MenuItem>
              <MenuItem
                component={NavLink}
                to="/boxed-sidebar/dashboards"
                sx={{
                  fontWeight: 'bold',
                }}
              >
                Boxed Sidebar
              </MenuItem>
              <MenuItem
                component={NavLink}
                to="/collapsed-sidebar/dashboards"
                sx={{
                  fontWeight: 'bold',
                }}
              >
                Collapsed Sidebar
              </MenuItem>
              <MenuItem
                component={NavLink}
                to="/bottom-navigation/dashboards"
                sx={{
                  fontWeight: 'bold',
                }}
              >
                Bottom Navigation
              </MenuItem>
              <MenuItem
                component={NavLink}
                to="/top-navigation/dashboards"
                sx={{
                  fontWeight: 'bold',
                }}
              >
                Top Navigation
              </MenuItem>
            </Menu>
          </Box>
          <Divider />
          <Stack direction="row" divider={<Divider flexItem orientation="vertical" />}>
            <ThemeToggleWrapper>
              <Typography
                variant="body1"
                sx={{
                  fontWeight: 'bold',
                  mb: 3,
                  mt: 1,
                  textAlign: 'center',
                  textTransform: 'uppercase',
                }}
              >
                Light color schemes
              </Typography>
              <Stack alignItems="center" spacing={2}>
                <Tooltip arrow placement="left" title="Pure Light">
                  <ButtonWrapper
                    className={theme === 'PureLightTheme' ? 'active' : ''}
                    onClick={() => {
                      changeTheme('PureLightTheme');
                    }}
                  >
                    {theme === 'PureLightTheme' && (
                      <CheckSelected>
                        <CheckTwoToneIcon />
                      </CheckSelected>
                    )}
                    <ColorSchemeWrapper className="colorSchemeWrapper pureLight">
                      <Box className="primary" />
                      <Box className="secondary" />
                    </ColorSchemeWrapper>
                  </ButtonWrapper>
                </Tooltip>
                <Tooltip arrow placement="left" title="Grey Goose">
                  <ButtonWrapper
                    className={theme === 'GreyGooseTheme' ? 'active' : ''}
                    onClick={() => {
                      changeTheme('GreyGooseTheme');
                    }}
                  >
                    {theme === 'GreyGooseTheme' && (
                      <CheckSelected>
                        <CheckTwoToneIcon />
                      </CheckSelected>
                    )}
                    <ColorSchemeWrapper className="colorSchemeWrapper greyGoose">
                      <Box className="primary" />
                      <Box className="secondary" />
                    </ColorSchemeWrapper>
                  </ButtonWrapper>
                </Tooltip>
                <Tooltip arrow placement="left" title="Purple Flow">
                  <ButtonWrapper
                    className={theme === 'PurpleFlowTheme' ? 'active' : ''}
                    onClick={() => {
                      changeTheme('PurpleFlowTheme');
                    }}
                  >
                    {theme === 'PurpleFlowTheme' && (
                      <CheckSelected>
                        <CheckTwoToneIcon />
                      </CheckSelected>
                    )}
                    <ColorSchemeWrapper className="colorSchemeWrapper purpleFlow">
                      <Box className="primary" />
                      <Box className="secondary" />
                    </ColorSchemeWrapper>
                  </ButtonWrapper>
                </Tooltip>
              </Stack>
            </ThemeToggleWrapper>
            <ThemeToggleWrapper>
              <Typography
                variant="body1"
                sx={{
                  fontWeight: 'bold',
                  mb: 3,
                  mt: 1,
                  textAlign: 'center',
                  textTransform: 'uppercase',
                }}
              >
                Dark color schemes
              </Typography>
              <Stack alignItems="center" spacing={2}>
                <Tooltip arrow placement="left" title="Nebula Fighter">
                  <ButtonWrapper
                    className={theme === 'NebulaFighterTheme' ? 'active' : ''}
                    onClick={() => {
                      changeTheme('NebulaFighterTheme');
                    }}
                  >
                    {theme === 'NebulaFighterTheme' && (
                      <CheckSelected>
                        <CheckTwoToneIcon />
                      </CheckSelected>
                    )}
                    <ColorSchemeWrapper className="colorSchemeWrapper nebulaFighter">
                      <Box className="primary" />
                      <Box className="secondary" />
                    </ColorSchemeWrapper>
                  </ButtonWrapper>
                </Tooltip>
                <Tooltip arrow placement="left" title="Green Fields">
                  <ButtonWrapper
                    className={theme === 'GreenFieldsTheme' ? 'active' : ''}
                    onClick={() => {
                      changeTheme('GreenFieldsTheme');
                    }}
                  >
                    {theme === 'GreenFieldsTheme' && (
                      <CheckSelected>
                        <CheckTwoToneIcon />
                      </CheckSelected>
                    )}
                    <ColorSchemeWrapper className="colorSchemeWrapper greenFields">
                      <Box className="primary" />
                      <Box className="secondary" />
                    </ColorSchemeWrapper>
                  </ButtonWrapper>
                </Tooltip>
                <Tooltip arrow placement="left" title="Dark Spaces">
                  <ButtonWrapper
                    className={theme === 'DarkSpacesTheme' ? 'active' : ''}
                    onClick={() => {
                      changeTheme('DarkSpacesTheme');
                    }}
                  >
                    {theme === 'DarkSpacesTheme' && (
                      <CheckSelected>
                        <CheckTwoToneIcon />
                      </CheckSelected>
                    )}
                    <ColorSchemeWrapper className="colorSchemeWrapper darkSpaces">
                      <Box className="primary" />
                      <Box className="secondary" />
                    </ColorSchemeWrapper>
                  </ButtonWrapper>
                </Tooltip>
              </Stack>
            </ThemeToggleWrapper>
          </Stack>
        </Popover>
      </ThemeSettingsButton>
    </>
  );
};

export default ThemeSettings;

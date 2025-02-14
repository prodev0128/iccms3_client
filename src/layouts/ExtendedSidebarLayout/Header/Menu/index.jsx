import AccountTreeTwoToneIcon from '@mui/icons-material/AccountTreeTwoTone';
import ChevronRightTwoToneIcon from '@mui/icons-material/ChevronRightTwoTone';
import ContactSupportTwoToneIcon from '@mui/icons-material/ContactSupportTwoTone';
import DashboardCustomizeTwoToneIcon from '@mui/icons-material/DashboardCustomizeTwoTone';
import KeyboardArrowDownTwoToneIcon from '@mui/icons-material/KeyboardArrowDownTwoTone';
import PeopleOutlineTwoToneIcon from '@mui/icons-material/PeopleOutlineTwoTone';
import {
  alpha,
  Box,
  Button,
  Card,
  CardActionArea,
  Divider,
  Grid,
  Link,
  ListItemText,
  MenuItem,
  MenuList,
  Popover,
  Stack,
  styled,
  Typography,
  useTheme,
} from '@mui/material';
import { useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';

import Text from '../../../../components/Text';

const LabelWrapper = styled(Box)(
  ({ theme }) => `
  font-size: ${theme.typography.pxToRem(10)};
  font-weight: bold;
  text-transform: uppercase;
  border-radius: ${theme.general.borderRadiusSm};
  padding: ${theme.spacing(0.5, 1, 0.4)};
`,
);

const CardActionAreaWrapper = styled(CardActionArea)(
  ({ theme }) => `
      .MuiTouchRipple-root {
        opacity: .2;
      }

      .MuiCardActionArea-focusHighlight {
        background: ${theme.colors.primary.main};
      }

      &:hover {
        .MuiCardActionArea-focusHighlight {
          opacity: .05;
        }
      }
`,
);

const MenuListWrapperSecondary = styled(MenuList)(
  ({ theme }) => `
  padding: ${theme.spacing(3)};

  & .MuiMenuItem-root {
      border-radius: 50px;
      padding: ${theme.spacing(1, 1, 1, 2.5)};
      min-width: 200px;
      margin-bottom: 2px;
      position: relative;
      color: ${theme.colors.alpha.black[70]};

      &.Mui-selected,
      &:hover,
      &.MuiButtonBase-root:active {
          background: ${theme.colors.alpha.black[10]};
          color: ${theme.colors.alpha.black[100]};
      }

      &:last-child {
          margin-bottom: 0;
      }
    }
`,
);

const MenuListWrapperSuccess = styled(MenuList)(
  ({ theme }) => `
  padding: ${theme.spacing(3)};

  & .MuiMenuItem-root {
      border-radius: 50px;
      padding: ${theme.spacing(1, 1, 1, 2.5)};
      min-width: 200px;
      margin-bottom: 2px;
      position: relative;
      color: ${theme.colors.success.main};

      &.Mui-selected,
      &:hover,
      &.MuiButtonBase-root:active {
          background: ${theme.colors.success.lighter};
          color: ${theme.colors.success.dark};
      }

      &:last-child {
          margin-bottom: 0;
      }
    }
`,
);

const MenuListWrapperError = styled(MenuList)(
  ({ theme }) => `
  padding: ${theme.spacing(3)};

  & .MuiMenuItem-root {
      border-radius: 50px;
      padding: ${theme.spacing(1, 1, 1, 2.5)};
      min-width: 200px;
      margin-bottom: 2px;
      position: relative;
      color: ${theme.colors.error.main};

      &.Mui-selected,
      &:hover,
      &.MuiButtonBase-root:active {
          background: ${theme.colors.error.lighter};
          color: ${theme.colors.error.dark};
      }

      &:last-child {
          margin-bottom: 0;
      }
    }
`,
);

const DotLegend = styled('span')(
  ({ theme }) => `
    border-radius: 22px;
    width: ${theme.spacing(1.4)};
    height: ${theme.spacing(1.45)};
    display: inline-block;
    border: ${theme.colors.alpha.white[100]} solid 2px;
`,
);

const HeaderMenu = () => {
  const { t } = useTranslation();
  const theme = useTheme();

  const ref = useRef(null);
  const [isOpen, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const ref2 = useRef(null);
  const [isOpen2, setOpen2] = useState(false);

  const handleOpen2 = () => {
    setOpen2(true);
  };

  const handleClose2 = () => {
    setOpen2(false);
  };

  return (
    <>
      <Box
        sx={{
          display: { md: 'inline-flex', xs: 'none' },
        }}
      >
        <Button
          color="secondary"
          endIcon={<KeyboardArrowDownTwoToneIcon />}
          ref={ref}
          size="small"
          sx={{
            '&:hover': {
              '.MuiSvgIcon-root': {
                color: `${theme.palette.getContrastText(theme.colors.secondary.main)}`,
              },
              backgroundColor: `${theme.colors.secondary.main}`,

              color: `${theme.palette.getContrastText(theme.colors.secondary.main)}`,
            },
            '.MuiSvgIcon-root': {
              color: `${theme.colors.secondary.dark}`,
              transition: `${theme.transitions.create(['color'])}`,
            },
            backgroundColor: `${theme.colors.secondary.lighter}`,
            color: `${theme.colors.secondary.dark}`,

            mr: 1,

            px: 2,
          }}
          onClick={handleOpen}
        >
          {t('Mega menu')}
        </Button>
        <Button
          color="secondary"
          endIcon={<KeyboardArrowDownTwoToneIcon />}
          ref={ref2}
          size="small"
          sx={{
            '&:hover': {
              '.MuiSvgIcon-root': {
                color: `${theme.palette.getContrastText(theme.colors.secondary.main)}`,
              },
              backgroundColor: `${theme.colors.secondary.main}`,

              color: `${theme.palette.getContrastText(theme.colors.secondary.main)}`,
            },
            '.MuiSvgIcon-root': {
              color: `${theme.colors.secondary.dark}`,
              transition: `${theme.transitions.create(['color'])}`,
            },
            backgroundColor: `${theme.colors.secondary.lighter}`,

            color: `${theme.colors.secondary.dark}`,

            px: 2,
          }}
          onClick={handleOpen2}
        >
          {t('Dashboards')}
        </Button>
      </Box>
      <Popover
        disableScrollLock
        anchorEl={ref.current}
        open={isOpen}
        anchorOrigin={{
          horizontal: 'left',
          vertical: 'top',
        }}
        transformOrigin={{
          horizontal: 'left',
          vertical: 'top',
        }}
        onClose={handleClose}
      >
        <Box
          alignItems="center"
          display="flex"
          justifyContent="space-between"
          sx={{
            background: alpha(theme.colors.alpha.black[100], 0.06),
            p: 2,
          }}
        >
          <Box>
            <Typography
              variant="h4"
              sx={{
                pb: 0.5,
              }}
            >
              {t('Mega Menus')}
            </Typography>
            <Typography noWrap variant="subtitle2">
              {t('This is an example for custom menus')}
            </Typography>
          </Box>
          <Link
            href="#"
            variant="subtitle2"
            sx={{
              display: { lg: 'inline-block', xs: 'none' },
              textTransform: 'none',
            }}
          >
            {t('View all')}
          </Link>
        </Box>
        <Divider />
        <Stack
          alignItems="stretch"
          direction={{ sm: 'row', xs: 'column' }}
          divider={<Divider flexItem orientation="vertical" />}
          justifyContent="stretch"
          spacing={0}
        >
          <MenuListWrapperSecondary disablePadding>
            <MenuItem selected>
              <ListItemText
                primary={t('Automation')}
                primaryTypographyProps={{
                  variant: 'h5',
                }}
              />
              <ChevronRightTwoToneIcon
                sx={{
                  color: `${theme.colors.alpha.black[30]}`,
                  opacity: 0.8,
                }}
              />
            </MenuItem>
            <MenuItem>
              <ListItemText
                primary={t('Analytics')}
                primaryTypographyProps={{
                  variant: 'h5',
                }}
              />
              <Box alignItems="center" display="flex">
                <DotLegend
                  style={{
                    background: `${theme.colors.success.main}`,
                  }}
                />
                <ChevronRightTwoToneIcon
                  sx={{
                    color: `${theme.colors.alpha.black[30]}`,
                    ml: 1,
                    opacity: 0.8,
                  }}
                />
              </Box>
            </MenuItem>
            <MenuItem disabled>
              <ListItemText
                primary={t('Banking')}
                primaryTypographyProps={{
                  variant: 'h5',
                }}
              />
              <ChevronRightTwoToneIcon
                sx={{
                  color: `${theme.colors.alpha.black[30]}`,
                  opacity: 0.8,
                }}
              />
            </MenuItem>
            <MenuItem>
              <ListItemText
                primary={t('Commerce')}
                primaryTypographyProps={{
                  variant: 'h5',
                }}
              />
              <ChevronRightTwoToneIcon
                sx={{
                  color: `${theme.colors.alpha.black[30]}`,
                  opacity: 0.8,
                }}
              />
            </MenuItem>
            <MenuItem>
              <ListItemText
                primary={t('Crypto')}
                primaryTypographyProps={{
                  variant: 'h5',
                }}
              />
              <ChevronRightTwoToneIcon
                sx={{
                  color: `${theme.colors.alpha.black[30]}`,
                  opacity: 0.8,
                }}
              />
            </MenuItem>
          </MenuListWrapperSecondary>
          <MenuListWrapperSuccess disablePadding>
            <MenuItem selected>
              <ListItemText
                primary={t('Finance')}
                primaryTypographyProps={{
                  variant: 'h5',
                }}
              />
              <ChevronRightTwoToneIcon
                sx={{
                  color: `${theme.colors.alpha.black[30]}`,
                  opacity: 0.8,
                }}
              />
            </MenuItem>
            <MenuItem>
              <ListItemText
                primary={t('Fitness')}
                primaryTypographyProps={{
                  variant: 'h5',
                }}
              />
              <Box alignItems="center" display="flex">
                <LabelWrapper
                  component="span"
                  sx={{
                    background: `${theme.colors.primary.main}`,
                    color: `${theme.palette.getContrastText(theme.colors.primary.dark)}`,
                  }}
                >
                  {t('Hot')}
                </LabelWrapper>
                <ChevronRightTwoToneIcon
                  sx={{
                    color: `${theme.colors.alpha.black[30]}`,
                    ml: 1,
                    opacity: 0.8,
                  }}
                />
              </Box>
            </MenuItem>
            <MenuItem disabled>
              <ListItemText
                primary={t('Healthcare')}
                primaryTypographyProps={{
                  variant: 'h5',
                }}
              />
              <ChevronRightTwoToneIcon
                sx={{
                  color: `${theme.colors.alpha.black[30]}`,
                  opacity: 0.8,
                }}
              />
            </MenuItem>
            <MenuItem>
              <ListItemText
                primary={t('Helpdesk')}
                primaryTypographyProps={{
                  variant: 'h5',
                }}
              />
              <ChevronRightTwoToneIcon
                sx={{
                  color: `${theme.colors.alpha.black[30]}`,
                  opacity: 0.8,
                }}
              />
            </MenuItem>
            <MenuItem>
              <ListItemText
                primary={t('Learning')}
                primaryTypographyProps={{
                  variant: 'h5',
                }}
              />
              <ChevronRightTwoToneIcon
                sx={{
                  color: `${theme.colors.alpha.black[30]}`,
                  opacity: 0.8,
                }}
              />
            </MenuItem>
          </MenuListWrapperSuccess>
          <MenuListWrapperError disablePadding>
            <MenuItem selected>
              <ListItemText
                primary={t('Calendar')}
                primaryTypographyProps={{
                  variant: 'h5',
                }}
              />
              <ChevronRightTwoToneIcon
                sx={{
                  color: `${theme.colors.alpha.black[30]}`,
                  opacity: 0.8,
                }}
              />
            </MenuItem>
            <MenuItem>
              <ListItemText
                primary={t('File Manager')}
                primaryTypographyProps={{
                  variant: 'h5',
                }}
              />
              <ChevronRightTwoToneIcon
                sx={{
                  color: `${theme.colors.alpha.black[30]}`,
                  ml: 1,
                  opacity: 0.8,
                }}
              />
            </MenuItem>
            <MenuItem disabled>
              <ListItemText
                primary={t('Jobs Platform')}
                primaryTypographyProps={{
                  variant: 'h5',
                }}
              />
              <ChevronRightTwoToneIcon
                sx={{
                  color: `${theme.colors.alpha.black[30]}`,
                  opacity: 0.8,
                }}
              />
            </MenuItem>
            <MenuItem>
              <ListItemText
                primary={t('Messenger')}
                primaryTypographyProps={{
                  variant: 'h5',
                }}
              />
              <Box alignItems="center" display="flex">
                <DotLegend
                  style={{
                    background: `${theme.colors.primary.main}`,
                  }}
                />
                <ChevronRightTwoToneIcon
                  sx={{
                    color: `${theme.colors.alpha.black[30]}`,
                    opacity: 0.8,
                  }}
                />
              </Box>
            </MenuItem>
            <MenuItem>
              <ListItemText
                primary={t('Projects Board')}
                primaryTypographyProps={{
                  variant: 'h5',
                }}
              />
              <ChevronRightTwoToneIcon
                sx={{
                  color: `${theme.colors.alpha.black[30]}`,
                  opacity: 0.8,
                }}
              />
            </MenuItem>
          </MenuListWrapperError>
        </Stack>
        <Divider />
        <Box
          sx={{
            m: 2,
            textAlign: 'center',
          }}
        >
          <Button color="primary" size="small">
            {t('View more examples')}
          </Button>
        </Box>
      </Popover>
      <Popover
        disableScrollLock
        anchorEl={ref2.current}
        open={isOpen2}
        anchorOrigin={{
          horizontal: 'left',
          vertical: 'top',
        }}
        sx={{
          '.MuiPopover-paper': {
            background: theme.colors.gradients.blue3,
          },
        }}
        transformOrigin={{
          horizontal: 'left',
          vertical: 'top',
        }}
        onClose={handleClose2}
      >
        <Box
          p={3}
          sx={{
            maxWidth: 400,
          }}
        >
          <Typography
            gutterBottom
            textAlign="center"
            variant="h4"
            sx={{
              color: theme.colors.alpha.trueWhite[100],
              fontSize: theme.typography.pxToRem(18),
            }}
          >
            {t('Dashboards')}
          </Typography>
          <Typography
            textAlign="center"
            variant="subtitle2"
            sx={{
              color: theme.colors.alpha.trueWhite[70],
            }}
          >
            {t("This is just a menu example we've created")}
          </Typography>
          <Grid container mt={1} spacing={2}>
            <Grid item sm={6} xs={12}>
              <Card>
                <CardActionAreaWrapper
                  sx={{
                    p: 2,
                  }}
                >
                  <Text color="warning">
                    <AccountTreeTwoToneIcon
                      sx={{
                        mb: 1,
                      }}
                    />
                  </Text>
                  <Typography variant="h4">{t('Projects')}</Typography>
                </CardActionAreaWrapper>
              </Card>
            </Grid>
            <Grid item sm={6} xs={12}>
              <Card>
                <CardActionAreaWrapper
                  sx={{
                    p: 2,
                  }}
                >
                  <Text color="success">
                    <ContactSupportTwoToneIcon
                      sx={{
                        mb: 1,
                      }}
                    />
                  </Text>
                  <Typography variant="h4">{t('Helpdesk')}</Typography>
                </CardActionAreaWrapper>
              </Card>
            </Grid>
            <Grid item sm={6} xs={12}>
              <Card>
                <CardActionAreaWrapper
                  sx={{
                    p: 2,
                  }}
                >
                  <Text color="primary">
                    <DashboardCustomizeTwoToneIcon
                      sx={{
                        mb: 1,
                      }}
                    />
                  </Text>
                  <Typography variant="h4">{t('Dashboard')}</Typography>
                </CardActionAreaWrapper>
              </Card>
            </Grid>
            <Grid item sm={6} xs={12}>
              <Card>
                <CardActionAreaWrapper
                  sx={{
                    p: 2,
                  }}
                >
                  <Text color="error">
                    <PeopleOutlineTwoToneIcon
                      sx={{
                        mb: 1,
                      }}
                    />
                  </Text>
                  <Typography variant="h4">{t('Customers')}</Typography>
                </CardActionAreaWrapper>
              </Card>
            </Grid>
          </Grid>
        </Box>
      </Popover>
    </>
  );
};

export default HeaderMenu;

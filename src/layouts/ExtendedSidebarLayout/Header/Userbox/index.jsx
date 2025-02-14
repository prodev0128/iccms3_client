import ChevronRightTwoToneIcon from '@mui/icons-material/ChevronRightTwoTone';
import LockOpenTwoToneIcon from '@mui/icons-material/LockOpenTwoTone';
import MonetizationOnTwoToneIcon from '@mui/icons-material/MonetizationOnTwoTone';
import {
  alpha,
  Avatar,
  Box,
  Button,
  Divider,
  IconButton,
  ListItemText,
  MenuItem,
  MenuList,
  Popover,
  styled,
  Typography,
  useTheme,
} from '@mui/material';
import { useRef, useState } from 'react';
import Chart from 'react-apexcharts';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router';

import Text from '../../../../components/Text';
import useAuth from '../../../../hooks/useAuth';

const DotLegend = styled('span')(
  ({ theme }) => `
    border-radius: 22px;
    width: ${theme.spacing(1.38)};
    height: ${theme.spacing(1.4)};
    display: inline-block;
    border: ${theme.colors.alpha.white[100]} solid 2px;
`,
);

const UserBoxButton = styled(IconButton)(
  ({ theme }) => `
  width: ${theme.spacing(4)};
  padding: 0;
  height: ${theme.spacing(4)};
  margin-left: ${theme.spacing(1)};
  border-radius: ${theme.general.borderRadiusLg};
  
  &:hover {
    background: ${theme.colors.primary.main};
  }
`,
);

const UserAvatar = styled(Avatar)(
  ({ theme }) => `
        height: 90%;
        width: 90%;
        border-radius: ${theme.general.borderRadiusLg};
`,
);

const MenuListWrapperPrimary = styled(MenuList)(
  ({ theme }) => `
  padding: ${theme.spacing(2)};

  & .MuiMenuItem-root {
      border-radius: 50px;
      padding: ${theme.spacing(1, 1, 1, 2.5)};
      min-width: 200px;
      margin-bottom: 2px;
      position: relative;
      color: ${theme.colors.alpha.black[100]};

      &.Mui-selected,
      &:hover,
      &.MuiButtonBase-root:active {
          background: ${theme.colors.primary.lighter};
          color: ${theme.colors.primary.main};
      }

      &:last-child {
          margin-bottom: 0;
      }
    }
`,
);

const MenuUserBox = styled(Box)(
  ({ theme }) => `
        background: ${alpha(theme.colors.alpha.black[100], 0.08)};
        padding: ${theme.spacing(2)};
`,
);

const UserBoxText = styled(Box)(
  ({ theme }) => `
        text-align: left;
        padding-left: ${theme.spacing(1)};
`,
);

const UserBoxLabel = styled(Typography)(
  ({ theme }) => `
        font-weight: ${theme.typography.fontWeightBold};
        color: ${theme.palette.secondary.main};
        display: block;
`,
);

const UserBoxDescription = styled(Typography)(
  ({ theme }) => `
        color: ${theme.palette.secondary.light}
`,
);

const HeaderUserbox = () => {
  const { t } = useTranslation();
  const theme = useTheme();

  const navigate = useNavigate();

  const { logout, user } = useAuth();

  const ref = useRef(null);
  const [isOpen, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleLogout = async () => {
    try {
      handleClose();
      await logout();
      navigate('/');
    } catch (err) {
      console.error(err);
    }
  };

  const Box1Options = {
    chart: {
      background: 'transparent',
      sparkline: {
        enabled: true,
      },
      toolbar: {
        show: false,
      },
      zoom: {
        enabled: false,
      },
    },
    colors: [theme.colors.error.main],
    grid: {
      padding: {
        bottom: 5,
        left: 5,
        right: 5,
      },
    },
    labels: [
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday',
      'Sunday',
      'Last Week',
      'Last Month',
      'Last Year',
      'Last Decade',
    ],
    stroke: {
      colors: [theme.colors.error.main],
      curve: 'smooth',
      width: 3,
    },
    theme: {
      mode: theme.palette.mode === 'dark' ? 'light' : 'dark',
    },
    tooltip: {
      fixed: {
        enabled: true,
      },
      marker: {
        show: true,
      },
      x: {
        show: false,
      },
      y: {
        title: {
          formatter: () => {
            return 'Orders:';
          },
        },
      },
    },
  };
  const Box1Data = [
    {
      data: [465, 546, 234, 576, 554, 338, 427, 348, 586, 254, 348],
      name: 'Revenue',
    },
  ];

  return (
    <>
      <UserBoxButton color="primary" ref={ref} onClick={handleOpen}>
        <UserAvatar alt={user.name} src={user.avatar} />
      </UserBoxButton>
      <Popover
        disableScrollLock
        anchorEl={ref.current}
        open={isOpen}
        anchorOrigin={{
          horizontal: 'right',
          vertical: 'top',
        }}
        transformOrigin={{
          horizontal: 'right',
          vertical: 'top',
        }}
        onClose={handleClose}
      >
        <MenuUserBox
          display="flex"
          sx={{
            minWidth: 210,
          }}
        >
          <Avatar alt={user.name} src={user.avatar} variant="rounded" />
          <UserBoxText>
            <UserBoxLabel variant="body1">{user.name}</UserBoxLabel>
            <UserBoxDescription variant="body2">{user.jobtitle}</UserBoxDescription>
          </UserBoxText>
        </MenuUserBox>
        <Divider
          sx={{
            mb: 0,
          }}
        />
        <MenuListWrapperPrimary disablePadding>
          <MenuItem>
            <ListItemText
              primary={t('My account')}
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
              primary={t('Profile settings')}
              primaryTypographyProps={{
                variant: 'h5',
              }}
            />
            <Box alignItems="center" display="flex">
              <DotLegend
                style={{
                  background: `${theme.colors.warning.main}`,
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
          <MenuItem>
            <ListItemText
              primary={t('Active tasks')}
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
        </MenuListWrapperPrimary>
        <Divider />
        <Box m={1}>
          <Box alignItems="flex-start" display="flex" pb={0.5} pt={1} px={2}>
            <Text color="warning">
              <MonetizationOnTwoToneIcon fontSize="large" />
            </Text>
            <Box ml={1}>
              <Typography variant="h3">$14,264</Typography>
              <Typography noWrap variant="subtitle2">
                {t('total value')}
              </Typography>
            </Box>
          </Box>
          <Chart height={60} options={Box1Options} series={Box1Data} type="line" />
        </Box>
        <Divider />
        <Box m={1}>
          <Button fullWidth color="primary" onClick={handleLogout}>
            <LockOpenTwoToneIcon
              sx={{
                mr: 1,
              }}
            />
            {t('Sign out')}
          </Button>
        </Box>
      </Popover>
    </>
  );
};

export default HeaderUserbox;

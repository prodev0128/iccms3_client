import ChevronRightTwoToneIcon from '@mui/icons-material/ChevronRightTwoTone';
import LockOpenTwoToneIcon from '@mui/icons-material/LockOpenTwoTone';
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
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';

import { logout } from '../../../../redux/actions/auth';
import { useAuth } from '../../../../redux/selectors';

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
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const theme = useTheme();

  const navigate = useNavigate();

  const { user } = useAuth();

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
      dispatch(logout());
      navigate('/');
    } catch (error) {
      console.error(error);
    }
  };

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
            <ListItemText primary={<Typography variant="h5">{t('My account')}</Typography>} />
            <ChevronRightTwoToneIcon
              sx={{
                color: `${theme.colors.alpha.black[30]}`,
                opacity: 0.8,
              }}
            />
          </MenuItem>
          <MenuItem>
            <ListItemText primary={<Typography variant="h5">{t('Active tasks')}</Typography>} />
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

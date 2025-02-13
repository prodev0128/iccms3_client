import AccountBoxTwoToneIcon from '@mui/icons-material/AccountBoxTwoTone';
import AccountTreeTwoToneIcon from '@mui/icons-material/AccountTreeTwoTone';
import InboxTwoToneIcon from '@mui/icons-material/InboxTwoTone';
import LockOpenTwoToneIcon from '@mui/icons-material/LockOpenTwoTone';
import UnfoldMoreTwoToneIcon from '@mui/icons-material/UnfoldMoreTwoTone';
import {
  alpha,
  Avatar,
  Box,
  Button,
  Divider,
  List,
  ListItem,
  ListItemText,
  Popover,
  styled,
  Typography,
} from '@mui/material';
import { useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { NavLink, useLocation, useNavigate } from 'react-router';

import useAuth from '../../../../hooks/useAuth';

const UserBoxButton = styled(Button)(
  ({ theme }) => `
    padding: ${theme.spacing(1)};
    background-color: ${alpha(theme.colors.alpha.black[100], 0.08)};

    .MuiButton-label {
      justify-content: flex-start;
    }

    &:hover {
      background-color: ${alpha(theme.colors.alpha.black[100], 0.12)};
    }
`,
);

const MenuUserBox = styled(Box)(
  ({ theme }) => `
    background: ${theme.colors.alpha.black[5]};
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
    color: ${theme.sidebar.menuItemColor};
    display: block;

    &.popoverTypo {
      color: ${theme.palette.secondary.main};
    }
`,
);

const UserBoxDescription = styled(Typography)(
  ({ theme }) => `
    color: ${alpha(theme.sidebar.menuItemColor, 0.6)};

    &.popoverTypo {
      color: ${theme.palette.secondary.light};
    }
`,
);

const SidebarTopSection = () => {
  const { t } = useTranslation();

  const navigate = useNavigate();
  const location = useLocation();
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

  return (
    <>
      <UserBoxButton fullWidth color="secondary" ref={ref} onClick={handleOpen}>
        <Avatar alt={user.name} src={user.avatar} variant="rounded" />
        <Box alignItems="center" display="flex" flex={1} justifyContent="space-between">
          <UserBoxText>
            <UserBoxLabel variant="body1">{user.name}</UserBoxLabel>
            <UserBoxDescription variant="body2">{user.jobtitle}</UserBoxDescription>
          </UserBoxText>
          <UnfoldMoreTwoToneIcon
            fontSize="small"
            sx={{
              ml: 1,
            }}
          />
        </Box>
      </UserBoxButton>
      <Popover
        disableScrollLock
        anchorEl={ref.current}
        open={isOpen}
        anchorOrigin={{
          horizontal: 'center',
          vertical: 'center',
        }}
        transformOrigin={{
          horizontal: 'center',
          vertical: 'center',
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
            <UserBoxLabel className="popoverTypo" variant="body1">
              {user.name}
            </UserBoxLabel>
            <UserBoxDescription className="popoverTypo" variant="body2">
              {user.jobtitle}
            </UserBoxDescription>
          </UserBoxText>
        </MenuUserBox>
        <Divider
          sx={{
            mb: 0,
          }}
        />
        <List
          component="nav"
          sx={{
            p: 1,
          }}
        >
          <ListItem
            button
            component={NavLink}
            to={`/${location.pathname.split('/')[1]}/management/users/single/1`}
            onClick={() => {
              handleClose();
            }}
          >
            <AccountBoxTwoToneIcon fontSize="small" />
            <ListItemText primary={t('Profile')} />
          </ListItem>
          <ListItem
            button
            component={NavLink}
            to={`/${location.pathname.split('/')[1]}/applications/mailbox/inbox`}
            onClick={() => {
              handleClose();
            }}
          >
            <InboxTwoToneIcon fontSize="small" />
            <ListItemText primary={t('Inbox')} />
          </ListItem>
          <ListItem
            button
            component={NavLink}
            to={`/${location.pathname.split('/')[1]}/applications/projects-board`}
            onClick={() => {
              handleClose();
            }}
          >
            <AccountTreeTwoToneIcon fontSize="small" />
            <ListItemText primary={t('Projects')} />
          </ListItem>
        </List>
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

export default SidebarTopSection;

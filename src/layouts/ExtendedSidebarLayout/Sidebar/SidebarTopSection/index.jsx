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
  IconButton,
  List,
  ListItem,
  ListItemText,
  Popover,
  styled,
  Typography,
  useTheme,
} from '@mui/material';
import { useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { NavLink, useLocation, useNavigate } from 'react-router';

import useAuth from '../../../../redux/selectors/useAuth';

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
  const theme = useTheme();

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
    <Box
      sx={{
        mx: 2,
        position: 'relative',
        pt: 1,
        textAlign: 'center',
      }}
    >
      <Avatar
        alt={user.name}
        src={user.avatar}
        sx={{
          height: 68,
          mb: 2,
          mx: 'auto',
          width: 68,
        }}
      />

      <Typography
        variant="h4"
        sx={{
          color: `${theme.colors.alpha.trueWhite[100]}`,
        }}
      >
        {user.name}
      </Typography>
      <Typography
        variant="subtitle1"
        sx={{
          color: `${theme.colors.alpha.trueWhite[70]}`,
        }}
      >
        {user.jobtitle}
      </Typography>
      <IconButton
        ref={ref}
        size="small"
        sx={{
          '&:hover': {
            background: `${alpha(theme.colors.alpha.trueWhite[100], 0.2)}`,
            color: `${theme.colors.alpha.trueWhite[100]}`,
          },
          background: `${theme.colors.alpha.trueWhite[10]}`,
          color: `${theme.colors.alpha.trueWhite[70]}`,
          position: 'absolute',
          right: theme.spacing(0),

          top: theme.spacing(0),
        }}
        onClick={handleOpen}
      >
        <UnfoldMoreTwoToneIcon fontSize="small" />
      </IconButton>
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
    </Box>
  );
};

export default SidebarTopSection;

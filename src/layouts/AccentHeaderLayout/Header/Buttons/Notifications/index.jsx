import CommentTwoToneIcon from '@mui/icons-material/CommentTwoTone';
import DescriptionTwoToneIcon from '@mui/icons-material/DescriptionTwoTone';
import NotificationsActiveTwoToneIcon from '@mui/icons-material/NotificationsActiveTwoTone';
import {
  alpha,
  Avatar,
  Badge,
  Box,
  Button,
  Divider,
  IconButton,
  List,
  ListItem,
  ListItemAvatar,
  Paper,
  Popover,
  styled,
  Tooltip,
  Typography,
  useTheme,
} from '@mui/material';
import Link from '@mui/material/Link';
import { formatDistance, subDays, subHours, subSeconds } from 'date-fns';
import { useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';

const AnimatedBadge = styled(Badge)(
  ({ theme }) => `
    
    .MuiBadge-badge {
        box-shadow: 0 0 0 2px ${theme.palette.background.paper};
        background-color: #44b700;
        color: #44b700;
        
        &::after {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            border-radius: 50%;
            animation: ripple 1.2s infinite ease-in-out;
            border: 1px solid currentColor;
            content: "";
        }
    }
`,
);

const NotificationsBadge = styled(Badge)(
  ({ theme }) => `
    
    .MuiBadge-badge {
        background-color: ${theme.palette.error.main};
        color: ${theme.palette.error.contrastText};
        min-width: 18px; 
        height: 18px;
        padding: 0;

        &::after {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            border-radius: 50%;
            box-shadow: 0 0 0 1px ${alpha(theme.palette.error.main, 0.3)};
            content: "";
        }
    }
`,
);

const IconButtonPrimary = styled(IconButton)(
  ({ theme }) => `
    margin-left: ${theme.spacing(1)};
    background: ${theme.colors.alpha.trueWhite[10]};
    color: ${theme.colors.alpha.trueWhite[70]};
    padding: 0;
    width: 42px;
    height: 42px;
    border-radius: 100%;
    transition: ${theme.transitions.create(['background', 'color'])};

    &.active,
    &:active,
    &:hover {
      background: ${alpha(theme.colors.alpha.trueWhite[30], 0.2)};
      color: ${theme.colors.alpha.trueWhite[100]};
    }
`,
);

const HeaderNotifications = () => {
  const ref = useRef(null);
  const [isOpen, setOpen] = useState(false);
  const theme = useTheme();

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const { t } = useTranslation();

  return (
    <>
      <Tooltip arrow title={t('Notifications')}>
        <IconButtonPrimary color="primary" ref={ref} onClick={handleOpen}>
          <NotificationsBadge
            badgeContent={2}
            anchorOrigin={{
              horizontal: 'right',
              vertical: 'top',
            }}
          >
            <NotificationsActiveTwoToneIcon />
          </NotificationsBadge>
        </IconButtonPrimary>
      </Tooltip>
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
        <Box
          display="flex"
          justifyContent="space-between"
          sx={{
            p: 2,
          }}
        >
          <Typography variant="h5">{t('Notifications')}</Typography>
          <Link
            href="#"
            variant="caption"
            sx={{
              textTransform: 'none',
            }}
          >
            {t('Mark all as read')}
          </Link>
        </Box>
        <Divider />
        <List
          sx={{
            p: 2,
          }}
        >
          <ListItem
            button
            selected
            sx={{
              display: { sm: 'flex', xs: 'block' },
            }}
          >
            <ListItemAvatar
              sx={{
                mb: { sm: 0, xs: 1 },
              }}
            >
              <Avatar alt="James Dias" src="/static/images/avatars/1.jpg" />
            </ListItemAvatar>
            <Box flex={1}>
              <Box display={{ sm: 'flex', xs: 'block' }} justifyContent="space-between">
                <Typography
                  sx={{
                    fontWeight: 'bold',
                  }}
                >
                  James Dias
                </Typography>
                <Typography
                  variant="caption"
                  sx={{
                    textTransform: 'none',
                  }}
                >
                  {formatDistance(subSeconds(new Date(), 19), new Date(), {
                    addSuffix: true,
                  })}
                </Typography>
              </Box>
              <Typography
                component="span"
                variant="body2"
                sx={{
                  color: theme.colors.error.main,
                }}
              >
                {t('Missed call')}
              </Typography>
              <Typography color="text.secondary" component="span" variant="body2">
                — I&#39;ll be in your neighborhood…
              </Typography>
            </Box>
          </ListItem>
          <Divider
            component="li"
            variant="inset"
            sx={{
              my: 1,
            }}
          />
          <ListItem
            button
            sx={{
              display: { sm: 'flex', xs: 'block' },
            }}
          >
            <ListItemAvatar
              sx={{
                mb: { sm: 0, xs: 1 },
              }}
            >
              <AnimatedBadge
                badgeContent=" "
                overlap="circular"
                variant="dot"
                anchorOrigin={{
                  horizontal: 'right',
                  vertical: 'bottom',
                }}
              >
                <Avatar alt="Randy Shepard" src="/static/images/avatars/3.jpg" />
              </AnimatedBadge>
            </ListItemAvatar>
            <Box flex={1}>
              <Box display={{ sm: 'flex', xs: 'block' }} justifyContent="space-between">
                <Typography
                  sx={{
                    fontWeight: 'bold',
                  }}
                >
                  Randy Shepard
                </Typography>
                <Typography
                  variant="caption"
                  sx={{
                    textTransform: 'none',
                  }}
                >
                  {formatDistance(subHours(new Date(), 3), new Date(), {
                    addSuffix: true,
                  })}
                </Typography>
              </Box>
              <Typography component="span" variant="body2">
                {t('Created a new ticket')}:{' '}
                <Link href="#" variant="body2">
                  Header Bug Report
                </Link>
                .
              </Typography>
            </Box>
          </ListItem>
          <Divider
            component="li"
            variant="inset"
            sx={{
              my: 1,
            }}
          />
          <ListItem
            alignItems="flex-start"
            sx={{
              display: { sm: 'flex', xs: 'block' },
            }}
          >
            <ListItemAvatar
              sx={{
                mb: { sm: 0, xs: 1 },
              }}
            >
              <Avatar alt="Sarah James" src="/static/images/avatars/2.jpg" />
            </ListItemAvatar>
            <Box flex={1}>
              <Box display={{ sm: 'flex', xs: 'block' }} justifyContent="space-between">
                <Typography
                  sx={{
                    fontWeight: 'bold',
                  }}
                >
                  Sarah James
                </Typography>
                <Typography
                  variant="caption"
                  sx={{
                    textTransform: 'none',
                  }}
                >
                  {formatDistance(subDays(new Date(), 1), new Date(), {
                    addSuffix: true,
                  })}
                </Typography>
              </Box>
              <Typography color="text.secondary" component="span" variant="body2">
                {t('Added some files to')}{' '}
                <Link href="#" variant="body2">
                  Marketing tasks
                </Link>{' '}
                {t('section')}.
              </Typography>
              <Paper
                elevation={2}
                sx={{
                  background: theme.colors.alpha.black[5],
                  display: 'flex',
                  flexWrap: 'wrap',
                  maxWidth: 400,
                  mt: 2,
                  p: 1,
                }}
              >
                <Box
                  display={{ md: 'flex', xs: 'block' }}
                  sx={{
                    p: 1,
                  }}
                >
                  <DescriptionTwoToneIcon
                    sx={{
                      mr: 0.5,
                    }}
                  />
                  <Box>
                    <Link href="#" variant="body2">
                      BalanceReports.pdf
                    </Link>
                    <Typography component="div" variant="caption">
                      187Kb
                    </Typography>
                  </Box>
                </Box>
                <Box
                  display="flex"
                  sx={{
                    p: 1,
                  }}
                >
                  <DescriptionTwoToneIcon
                    sx={{
                      mr: 0.5,
                    }}
                  />
                  <Box>
                    <Link href="#" variant="body2">
                      Income2022.pdf
                    </Link>
                    <Typography component="div" variant="caption">
                      187Kb
                    </Typography>
                  </Box>
                </Box>
              </Paper>
            </Box>
          </ListItem>
          <Divider
            component="li"
            variant="inset"
            sx={{
              my: 1,
            }}
          />
          <ListItem
            sx={{
              display: { sm: 'flex', xs: 'block' },
            }}
          >
            <ListItemAvatar
              sx={{
                mb: { sm: 0, xs: 1 },
              }}
            >
              <Avatar
                sx={{
                  background: theme.colors.success.main,
                }}
              >
                <CommentTwoToneIcon />
              </Avatar>
            </ListItemAvatar>
            <Box flex={1}>
              <Box display="flex" justifyContent="space-between">
                <Typography
                  sx={{
                    fontWeight: 'bold',
                  }}
                >
                  Messaging Platform
                </Typography>
                <Typography
                  variant="caption"
                  sx={{
                    textTransform: 'none',
                  }}
                >
                  {formatDistance(subDays(new Date(), 3), new Date(), {
                    addSuffix: true,
                  })}
                </Typography>
              </Box>
              <Typography component="span" fontWeight="bold" variant="body2">
                54
              </Typography>
              <Typography color="text.secondary" component="span" variant="body2">
                {' '}
                {t('new messages in your inbox')}
              </Typography>
            </Box>
          </ListItem>
        </List>
        <Divider />
        <Box m={1}>
          <Button fullWidth color="secondary">
            {t('View all notifications')}
          </Button>
        </Box>
      </Popover>
    </>
  );
};

export default HeaderNotifications;

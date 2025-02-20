import EventTwoToneIcon from '@mui/icons-material/EventTwoTone';
import PowerSettingsNewTwoToneIcon from '@mui/icons-material/PowerSettingsNewTwoTone';
import SmsTwoToneIcon from '@mui/icons-material/SmsTwoTone';
import { alpha, Badge, Box, IconButton, styled, Tooltip, tooltipClasses, useTheme } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { Link as RouterLink, useNavigate } from 'react-router';

import { useAuth } from '../../../../redux/selectors';

const LightTooltip = styled(({ className, ...props }) => <Tooltip {...props} classes={{ popper: className }} />)(
  ({ theme }) => ({
    [`& .${tooltipClasses.tooltip}`]: {
      backgroundColor: theme.colors.alpha.trueWhite[100],
      boxShadow: theme.shadows[24],
      color: theme.palette.getContrastText(theme.colors.alpha.trueWhite[100]),
      fontSize: theme.typography.pxToRem(12),
      fontWeight: 'bold',
    },
    [`& .${tooltipClasses.arrow}`]: {
      color: theme.colors.alpha.trueWhite[100],
    },
  }),
);

const SidebarFooter = () => {
  const { t } = useTranslation();
  const theme = useTheme();
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logout();
      navigate('/');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Box
      alignItems="center"
      display="flex"
      justifyContent="center"
      sx={{
        height: 60,
      }}
    >
      <LightTooltip arrow placement="top" title={t('Events Calendar')}>
        <IconButton
          component={RouterLink}
          to="/extended-sidebar/applications/calendar"
          sx={{
            '&:hover': {
              background: `${alpha(theme.colors.alpha.trueWhite[100], 0.2)}`,
              color: `${theme.colors.alpha.trueWhite[100]}`,
            },
            background: `${theme.colors.alpha.trueWhite[10]}`,
            color: `${theme.colors.alpha.trueWhite[70]}`,

            transition: `${theme.transitions.create(['all'])}`,
          }}
        >
          <EventTwoToneIcon fontSize="small" />
        </IconButton>
      </LightTooltip>
      <LightTooltip arrow placement="top" title={t('Messenger')}>
        <Badge
          color="success"
          overlap="circular"
          variant="dot"
          anchorOrigin={{
            horizontal: 'right',
            vertical: 'top',
          }}
          sx={{
            '.MuiBadge-badge': {
              animation: 'pulse 1s infinite',
              top: '5%',
              transition: `${theme.transitions.create(['all'])}`,
            },
          }}
        >
          <IconButton
            component={RouterLink}
            to="/extended-sidebar/applications/messenger"
            sx={{
              '&:hover': {
                background: `${alpha(theme.colors.alpha.trueWhite[100], 0.2)}`,
                color: `${theme.colors.alpha.trueWhite[100]}`,
              },
              background: `${theme.colors.alpha.trueWhite[10]}`,
              color: `${theme.colors.alpha.trueWhite[70]}`,

              mx: 1,
              transition: `${theme.transitions.create(['all'])}`,
            }}
          >
            <SmsTwoToneIcon fontSize="small" />
          </IconButton>
        </Badge>
      </LightTooltip>
      <LightTooltip arrow placement="top" title={t('Logout')}>
        <IconButton
          sx={{
            '&:hover': {
              background: `${alpha(theme.colors.alpha.trueWhite[100], 0.2)}`,
              color: `${theme.colors.alpha.trueWhite[100]}`,
            },
            background: `${theme.colors.alpha.trueWhite[10]}`,
            color: `${theme.colors.alpha.trueWhite[70]}`,

            transition: `${theme.transitions.create(['all'])}`,
          }}
          onClick={handleLogout}
        >
          <PowerSettingsNewTwoToneIcon fontSize="small" />
        </IconButton>
      </LightTooltip>
    </Box>
  );
};

export default SidebarFooter;

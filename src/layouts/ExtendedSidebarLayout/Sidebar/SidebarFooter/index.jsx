import { EventTwoTone, PowerSettingsNewTwoTone, SmsTwoTone } from '@mui/icons-material';
import { alpha, Badge, Box, IconButton, styled, Tooltip, tooltipClasses, useTheme } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import { Link as RouterLink, useNavigate } from 'react-router';

import { logout } from '../../../../redux/actions/auth';

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
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      dispatch(logout());
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
          to="/censor/processing"
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
          <EventTwoTone fontSize="small" />
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
            to="/stat/people"
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
            <SmsTwoTone fontSize="small" />
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
          <PowerSettingsNewTwoTone fontSize="small" />
        </IconButton>
      </LightTooltip>
    </Box>
  );
};

export default SidebarFooter;

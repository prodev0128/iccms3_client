import { Badge, Box, styled, Tooltip, tooltipClasses, useTheme } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router';

const LogoWrapper = styled(Link)(
  ({ theme }) => `
    color: ${theme.palette.text.primary};
    display: flex;
    text-decoration: none;
    width: 53px;
    margin: 0 auto;
    font-weight: ${theme.typography.fontWeightBold};
  `,
);

const LogoSignWrapper = styled(Box)(
  () => `
    width: 52px;
    height: 38px;
  `,
);

const LogoSign = styled(Box)(
  ({ theme }) => `
    background: ${theme.general.reactFrameworkColor};
    width: 18px;
    height: 18px;
    border-radius: ${theme.general.borderRadiusSm};
    position: relative;
    transform: rotate(45deg);
    top: 3px;
    left: 17px;

    &:after, 
    &:before {
      content: "";
      display: block;
      width: 18px;
      height: 18px;
      position: absolute;
      top: -1px;
      right: -20px;
      transform: rotate(0deg);
      border-radius: ${theme.general.borderRadiusSm};
    }

    &:before {
      background: ${theme.palette.primary.main};
      right: auto;
      left: 0;
      top: 20px;
    }

    &:after {
      background: ${theme.palette.secondary.main};
    }
  `,
);

const LogoSignInner = styled(Box)(
  ({ theme }) => `
    width: 16px;
    height: 16px;
    position: absolute;
    top: 12px;
    left: 12px;
    z-index: 5;
    border-radius: ${theme.general.borderRadiusSm};
    background: ${theme.header.background};
  `,
);

const TooltipWrapper = styled(({ children, className, ...props }) => (
  <Tooltip {...props} classes={{ popper: className }}>
    {children}
  </Tooltip>
))(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: theme.colors.alpha.trueWhite[100],
    borderRadius: theme.general.borderRadiusSm,
    boxShadow: '0 .2rem .8rem rgba(7,9,25,.18), 0 .08rem .15rem rgba(7,9,25,.15)',
    color: theme.palette.getContrastText(theme.colors.alpha.trueWhite[100]),
    fontSize: theme.typography.pxToRem(12),
    fontWeight: 'bold',
  },
  [`& .${tooltipClasses.arrow}`]: {
    color: theme.colors.alpha.trueWhite[100],
  },
}));

const Logo = () => {
  const { t } = useTranslation();
  const theme = useTheme();

  return (
    <TooltipWrapper arrow title={t('International Communication Censor Management System')}>
      <LogoWrapper to="/">
        <Badge
          badgeContent="3.0"
          color="success"
          overlap="circular"
          sx={{
            '.MuiBadge-badge': {
              fontSize: theme.typography.pxToRem(11),
              right: -2,
              top: 8,
            },
          }}
        >
          <LogoSignWrapper>
            <LogoSign>
              <LogoSignInner />
            </LogoSign>
          </LogoSignWrapper>
        </Badge>
      </LogoWrapper>
    </TooltipWrapper>
  );
};

export default Logo;

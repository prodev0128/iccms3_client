import ExpandLessTwoToneIcon from '@mui/icons-material/ExpandLessTwoTone';
import ExpandMoreTwoToneIcon from '@mui/icons-material/ExpandMoreTwoTone';
import { Badge, Button, Collapse, ListItem, styled, Tooltip, tooltipClasses } from '@mui/material';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { useContext, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { NavLink as RouterLink } from 'react-router';

import { SidebarContext } from '../../../../contexts/SidebarContext';

const TooltipWrapper = styled(({ className, ...props }) => <Tooltip {...props} classes={{ popper: className }} />)(
  ({ theme }) => ({
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
  }),
);

const SidebarMenuItem = ({
  active,
  badge,
  badgeTooltip,
  children,
  icon: Icon,
  link,
  name,
  open: openParent,
  ...rest
}) => {
  const [menuToggle, setMenuToggle] = useState(openParent);
  const { t } = useTranslation();
  const { closeSidebar } = useContext(SidebarContext);

  const toggleMenu = () => {
    setMenuToggle((Open) => !Open);
  };

  if (children) {
    return (
      <ListItem className="Mui-children" component="div" key={name} {...rest}>
        <Button
          className={clsx({ 'Mui-active': menuToggle })}
          endIcon={menuToggle ? <ExpandLessTwoToneIcon /> : <ExpandMoreTwoToneIcon />}
          startIcon={Icon && <Icon />}
          onClick={toggleMenu}
        >
          {badgeTooltip ? (
            <TooltipWrapper arrow placement="right" title={badgeTooltip}>
              {badge === '' ? <Badge color="primary" variant="dot" /> : <Badge badgeContent={badge} />}
            </TooltipWrapper>
          ) : badge === '' ? (
            <Badge color="primary" variant="dot" />
          ) : (
            <Badge badgeContent={badge} />
          )}
          {t(name)}
        </Button>
        <Collapse in={menuToggle}>{children}</Collapse>
      </ListItem>
    );
  }

  return (
    <ListItem component="div" key={name} {...rest}>
      <Button
        disableRipple
        activeClassName="Mui-active"
        component={RouterLink}
        startIcon={Icon && <Icon />}
        to={link}
        onClick={closeSidebar}
      >
        {t(name)}
        {badgeTooltip ? (
          <TooltipWrapper arrow placement="right" title={badgeTooltip}>
            {badge === '' ? <Badge color="primary" variant="dot" /> : <Badge badgeContent={badge} />}
          </TooltipWrapper>
        ) : badge === '' ? (
          <Badge color="primary" variant="dot" />
        ) : (
          <Badge badgeContent={badge} />
        )}
      </Button>
    </ListItem>
  );
};

SidebarMenuItem.propTypes = {
  active: PropTypes.bool,
  badge: PropTypes.string,
  badgeTooltip: PropTypes.string,
  children: PropTypes.node,
  icon: PropTypes.elementType,
  link: PropTypes.string,
  name: PropTypes.string.isRequired,
  open: PropTypes.bool,
};

SidebarMenuItem.defaultProps = {
  active: false,
  open: false,
};

export default SidebarMenuItem;

import { alpha, Box, List, ListSubheader, styled } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { matchPath, useLocation } from 'react-router';

import { roles } from '../../../../globals/constants';
import { useAuth } from '../../../../redux/selectors';
import SidebarMenuItem from './item';
import menuItems from './items';

const MenuWrapper = styled(Box)(
  ({ theme }) => `
  .MuiList-root {
    padding: ${theme.spacing(1)};

    & > .MuiList-root {
      padding: 0 ${theme.spacing(0)} ${theme.spacing(1)};
    }
  }

    .MuiListSubheader-root {
      text-transform: uppercase;
      font-weight: bold;
      font-size: ${theme.typography.pxToRem(12)};
      color: ${theme.colors.alpha.trueWhite[50]};
      padding: ${theme.spacing(0, 2.5)};
      line-height: 1.4;
    }
`,
);

const SubMenuWrapper = styled(Box)(
  ({ theme }) => `
    .MuiList-root {

      .MuiListItem-root {
        padding: 1px 0;

        .MuiBadge-root {
          position: absolute;
          right: ${theme.spacing(3.2)};

          .MuiBadge-standard {
            background: ${theme.colors.primary.main};
            font-size: ${theme.typography.pxToRem(10)};
            font-weight: bold;
            text-transform: uppercase;
            color: ${theme.palette.primary.contrastText};
          }
        }
    
        .MuiButton-root {
          display: flex;
          color: ${theme.colors.alpha.trueWhite[70]};
          background-color: transparent;
          width: 100%;
          justify-content: flex-start;
          padding: ${theme.spacing(1.2, 3)};

          .MuiButton-startIcon,
          .MuiButton-endIcon {
            transition: ${theme.transitions.create(['color'])};

            .MuiSvgIcon-root {
              font-size: inherit;
              transition: none;
            }
          }

          .MuiButton-startIcon {
            color: ${theme.colors.alpha.trueWhite[30]};
            font-size: ${theme.typography.pxToRem(20)};
            margin-right: ${theme.spacing(1)};
          }
          
          .MuiButton-endIcon {
            color: ${theme.colors.alpha.trueWhite[50]};
            margin-left: auto;
            opacity: .8;
            font-size: ${theme.typography.pxToRem(20)};
          }

          &.Mui-active,
          &:hover {
            background-color: ${alpha(theme.colors.alpha.trueWhite[100], 0.06)};
            color: ${theme.colors.alpha.trueWhite[100]};

            .MuiButton-startIcon,
            .MuiButton-endIcon {
              color: ${theme.colors.alpha.trueWhite[100]};
            }
          }
        }

        &.Mui-children {
          flex-direction: column;

          .MuiBadge-root {
            position: absolute;
            right: ${theme.spacing(7)};
          }
        }

        .MuiCollapse-root {
          width: 100%;

          .MuiList-root {
            padding: ${theme.spacing(1, 0)};
          }

          .MuiListItem-root {
            padding: 1px 0;

            .MuiButton-root {
              padding: ${theme.spacing(0.8, 3)};

              .MuiBadge-root {
                right: ${theme.spacing(3.2)};
              }

              &:before {
                content: ' ';
                background: ${theme.colors.alpha.trueWhite[100]};
                opacity: 0;
                transition: ${theme.transitions.create(['transform', 'opacity'])};
                width: 6px;
                height: 6px;
                transform: scale(0);
                transform-origin: center;
                border-radius: 20px;
                margin-right: ${theme.spacing(1.8)};
              }

              &.Mui-active,
              &:hover {

                &:before {
                  transform: scale(1);
                  opacity: 1;
                }
              }
            }
          }
        }
      }
    }
`,
);

const renderSidebarMenuItems = ({ items, path, user }) =>
  items.reduce((ev, item) => reduceChildRoutes({ ev, item, path, user }), []);

const reduceChildRoutes = ({ ev, item, path, user }) => {
  const key = item.name;

  const exactMatch = item.link ? !!matchPath(item.link, path) : false;

  if (item.items) {
    const partialMatch = item.link ? !!matchPath(`${item.link}/*`, path) : false;
    const children = renderSidebarMenuItems({
      items: item.items,
      path,
      user,
    });

    if (children.length) {
      ev.push(
        <SidebarMenuItem
          active={partialMatch}
          badge={item.badge}
          badgeTooltip={item.badgeTooltip}
          icon={item.icon}
          key={key}
          link={item.link}
          name={item.name}
          open={partialMatch}
        >
          <SubMenuWrapper>
            <List component="div">{children}</List>
          </SubMenuWrapper>
        </SidebarMenuItem>,
      );
    }
  } else if (!item?.right || user?.roles?.includes(roles.ADMIN) || item.right?.some((r) => user?.roles?.includes(r))) {
    ev.push(
      <SidebarMenuItem
        active={exactMatch}
        badge={item.badge}
        badgeTooltip={item.badgeTooltip}
        icon={item.icon}
        key={key}
        link={item.link}
        name={item.name}
      />,
    );
  }

  return ev;
};

const SidebarMenu = () => {
  const location = useLocation();
  const { t } = useTranslation();
  const { user } = useAuth();

  return (
    <>
      {menuItems
        .map((section) => {
          const children = renderSidebarMenuItems({ items: section.items, path: location.pathname, user });
          if (!children.length) {
            return null;
          }
          return (
            <MenuWrapper key={section.heading}>
              <List
                component="div"
                subheader={
                  <ListSubheader disableSticky component="div">
                    {t(section.heading)}
                  </ListSubheader>
                }
              >
                <SubMenuWrapper>
                  <List component="div">{children}</List>
                </SubMenuWrapper>
                {}
              </List>
            </MenuWrapper>
          );
        })
        .filter((section) => section)}
    </>
  );
};

export default SidebarMenu;

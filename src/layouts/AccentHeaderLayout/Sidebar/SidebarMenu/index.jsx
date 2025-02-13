import { Box, List, ListSubheader, styled } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { matchPath, useLocation } from 'react-router';

import SidebarMenuItem from './item';
import menuItems from './items';

const MenuWrapper = styled(Box)(
  ({ theme }) => `
    .MuiList-root {
      margin-bottom: ${theme.spacing(1.5)};
      padding: 0;

      & > .MuiList-root {
        padding: 0 ${theme.spacing(0)} ${theme.spacing(1)};
      }
    }

    .MuiListSubheader-root {
      text-transform: uppercase;
      font-weight: bold;
      font-size: ${theme.typography.pxToRem(12)};
      color: ${theme.sidebar.menuItemIconColor};
      padding: ${theme.spacing(1, 3.5)};
      line-height: 1.4;
    }
`,
);

const SubMenuWrapper = styled(Box)(
  ({ theme }) => `
    .MuiList-root {

      .MuiListItem-root {
        padding: 2px 0;
        padding-left: ${theme.spacing(0)};
        padding-right: ${theme.spacing(2)};

        .MuiBadge-root {
          position: absolute;
          right: ${theme.spacing(3.5)};

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
          color: ${theme.sidebar.menuItemColor};
          background-color: ${theme.sidebar.menuItemBg};
          width: 100%;
          justify-content: flex-start;
          padding: ${theme.spacing(1, 3, 1, 4)};
          border-bottom-left-radius: 0;
          border-top-left-radius: 0;
          border-bottom-right-radius: 50px;
          border-top-right-radius: 50px;
    
          .MuiButton-startIcon,
          .MuiButton-endIcon {
            transition: ${theme.transitions.create(['color'])};

            .MuiSvgIcon-root {
              font-size: inherit;
              transition: none;
            }
          }

          .MuiButton-startIcon {
            font-size: ${theme.typography.pxToRem(20)};
            margin-right: ${theme.spacing(1)};
            color: ${theme.sidebar.menuItemIconColor};
          }
          
          .MuiButton-endIcon {
            margin-left: auto;
            opacity: .8;
            font-size: ${theme.typography.pxToRem(20)};
          }

          &.Mui-active,
          &:hover {
            background-color: ${theme.sidebar.menuItemBgActive};
            color: ${theme.sidebar.menuItemColorActive};

            .MuiButton-startIcon,
            .MuiButton-endIcon {
                color: ${theme.sidebar.menuItemIconColorActive};
            }
          }
        }

        &.Mui-children {
          flex-direction: column;

          .MuiBadge-root {
            position: absolute;
            right: ${theme.spacing(7.5)};
          }
        }

        .MuiCollapse-root {
          width: 100%;

          .MuiList-root {
            padding: ${theme.spacing(1, 0)};
          }

          .MuiListItem-root {
            padding: 0;
            padding-left: ${theme.spacing(1.2)};

            .MuiListItem-root {
              padding: 0;
            }

            .MuiButton-root {
              .MuiBadge-root {
                right: ${theme.spacing(3.5)};
              }
            }

            .MuiButton-root {
              padding: ${theme.spacing(0.7, 3, 0.7, 5.5)};

              &.Mui-active,
              &:hover {
                background-color: ${theme.sidebar.menuItemBg};
              }
            }
          }
        }
      }
    }
`,
);

const renderSidebarMenuItems = ({ items, path }) => (
  <SubMenuWrapper>
    <List component="div">{items.reduce((ev, item) => reduceChildRoutes({ ev, item, path }), [])}</List>
  </SubMenuWrapper>
);

const reduceChildRoutes = ({ ev, item, path }) => {
  const key = item.name;

  const exactMatch = item.link
    ? !!matchPath(
        {
          end: true,
          path: item.link,
        },
        path,
      )
    : false;

  if (item.items) {
    const partialMatch = item.link
      ? !!matchPath(
          {
            end: false,
            path: item.link,
          },
          path,
        )
      : false;

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
        {renderSidebarMenuItems({
          items: item.items,
          path,
        })}
      </SidebarMenuItem>,
    );
  } else {
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

  return (
    <>
      {menuItems.map((section) => (
        <MenuWrapper key={section.heading}>
          <List
            component="div"
            subheader={
              <ListSubheader disableSticky component="div">
                {t(section.heading)}
              </ListSubheader>
            }
          >
            {renderSidebarMenuItems({
              items: section.items,
              path: location.pathname,
            })}
          </List>
        </MenuWrapper>
      ))}
    </>
  );
};

export default SidebarMenu;

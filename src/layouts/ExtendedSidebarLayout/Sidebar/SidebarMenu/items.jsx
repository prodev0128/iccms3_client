import {
  AdminPanelSettingsTwoTone,
  AnnouncementTwoTone,
  AssessmentTwoTone,
  AssignmentIndTwoTone,
  AutoGraphTwoTone,
  BarChartTwoTone,
  DataSaverOnTwoTone,
  DesignServicesTwoTone,
  FindInPageTwoTone,
  GroupsTwoTone,
  HomeTwoTone,
  InstallDesktopTwoTone,
  LocalPoliceTwoTone,
  SettingsTwoTone,
  SupportTwoTone,
  VerifiedUserTwoTone,
} from '@mui/icons-material';

import { roles } from '../../../../globals/constants';

const menuItems = [
  {
    heading: 'Main Pages',
    items: [
      {
        name: 'Home',
        link: '/',
        icon: HomeTwoTone,
      },
      {
        name: 'Administration',
        link: '/admin',
        icon: AdminPanelSettingsTwoTone,
        items: [
          {
            name: 'Users',
            link: '/admin/users',
            icon: AssignmentIndTwoTone,
            right: [roles.USERS_VIEW],
          },
          {
            name: 'Codes',
            link: '/admin/codes',
            icon: DesignServicesTwoTone,
            right: [roles.CODES_VIEW],
          },
          {
            name: 'Settings',
            link: '/admin/settings',
            icon: SettingsTwoTone,
            right: [roles.SETTINGS_VIEW],
          },
          {
            name: 'News',
            link: '/admin/news',
            icon: AnnouncementTwoTone,
            right: [roles.NEWS_VIEW],
          },
        ],
      },
      {
        name: 'Censor',
        link: '/censor',
        icon: LocalPoliceTwoTone,
        items: [
          {
            name: 'Receipt',
            link: '/censor/receipt',
            icon: InstallDesktopTwoTone,
            right: [roles.RECEIPT_VIEW],
          },
          {
            name: 'Dep',
            link: '/censor/dep',
            icon: GroupsTwoTone,
            right: [roles.DEP_VIEW],
          },
          {
            name: 'Personal',
            link: '/censor/personal',
            icon: VerifiedUserTwoTone,
            right: [roles.PERSONAL_VIEW],
          },
          {
            name: 'Total',
            link: '/censor/total',
            icon: FindInPageTwoTone,
            right: [roles.TOTAL_VIEW],
          },
        ],
      },
      {
        name: 'Statistics',
        link: '/stat',
        icon: AssessmentTwoTone,
        items: [
          {
            name: 'People',
            link: '/stat/people',
            icon: BarChartTwoTone,
            right: [roles.PEOPLE_VIEW],
          },
          {
            name: 'Pub',
            link: '/stat/pub',
            icon: DataSaverOnTwoTone,
            right: [roles.PUB_VIEW],
          },
          {
            name: 'Flow',
            link: '/stat/flow',
            icon: AutoGraphTwoTone,
            right: [roles.FLOW_VIEW],
          },
        ],
      },
    ],
  },
  {
    heading: 'Extra Pages',
    items: [
      {
        link: '/overview',
        name: 'Overview',
        icon: DesignServicesTwoTone,
        right: [],
      },
      {
        link: '/docs',
        name: 'Documentation',
        icon: SupportTwoTone,
        right: [],
      },
    ],
  },
];

export default menuItems;

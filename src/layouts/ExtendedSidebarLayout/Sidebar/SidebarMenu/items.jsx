import {
  AdminPanelSettingsTwoTone,
  AssessmentTwoTone,
  AssignmentIndTwoTone,
  AutoGraphTwoTone,
  BarChartTwoTone,
  DataSaverOnTwoTone,
  DesignServicesTwoTone,
  ForwardToInboxTwoTone,
  HomeTwoTone,
  InstallDesktopTwoTone,
  LocalPoliceTwoTone,
  SettingsTwoTone,
  SupportTwoTone,
  VerifiedUserTwoTone,
} from '@mui/icons-material';

const menuItems = [
  {
    heading: 'Main Pages',
    items: [
      {
        icon: HomeTwoTone,
        link: '/',
        name: 'Home',
      },
      {
        icon: AdminPanelSettingsTwoTone,
        items: [
          {
            icon: AssignmentIndTwoTone,
            link: '/admin/users',
            name: 'Users',
          },
          {
            icon: DesignServicesTwoTone,
            link: '/admin/codes',
            name: 'Codes',
          },
          {
            icon: SettingsTwoTone,
            link: '/admin/settings',
            name: 'Settings',
          },
        ],
        link: '/admin',
        name: 'Administration',
      },
      {
        icon: LocalPoliceTwoTone,
        items: [
          {
            icon: VerifiedUserTwoTone,
            link: '/censor/processing',
            name: 'Processing',
          },
          {
            icon: InstallDesktopTwoTone,
            link: '/censor/incoming',
            name: 'Incoming',
          },
          {
            icon: ForwardToInboxTwoTone,
            link: '/censor/outgoing',
            name: 'Outgoing',
          },
        ],
        link: '/censor',
        name: 'Censor',
      },
      {
        icon: AssessmentTwoTone,
        items: [
          {
            icon: BarChartTwoTone,
            link: '/stat/people',
            name: 'People',
          },
          {
            icon: DataSaverOnTwoTone,
            link: '/stat/pub',
            name: 'Pub',
          },
          {
            icon: AutoGraphTwoTone,
            link: '/stat/flow',
            name: 'Flow',
          },
        ],
        link: '/stat',
        name: 'Statistics',
      },
    ],
  },
  {
    heading: 'Extra Pages',
    items: [
      {
        icon: DesignServicesTwoTone,
        link: '/overview',
        name: 'Overview',
      },
      {
        icon: SupportTwoTone,
        link: '/docs',
        name: 'Documentation',
      },
    ],
  },
];

export default menuItems;

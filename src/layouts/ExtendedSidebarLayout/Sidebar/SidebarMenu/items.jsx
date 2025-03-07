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
          },
          {
            name: 'Codes',
            link: '/admin/codes',
            icon: DesignServicesTwoTone,
          },
          {
            name: 'Settings',
            link: '/admin/settings',
            icon: SettingsTwoTone,
          },
        ],
      },
      {
        name: 'Censor',
        link: '/censor',
        icon: LocalPoliceTwoTone,
        items: [
          {
            name: 'Processing',
            link: '/censor/processing',
            icon: VerifiedUserTwoTone,
          },
          {
            name: 'Incoming',
            link: '/censor/incoming',
            icon: InstallDesktopTwoTone,
          },
          {
            name: 'Outgoing',
            link: '/censor/outgoing',
            icon: ForwardToInboxTwoTone,
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
          },
          {
            name: 'Pub',
            link: '/stat/pub',
            icon: DataSaverOnTwoTone,
          },
          {
            name: 'Flow',
            link: '/stat/flow',
            icon: AutoGraphTwoTone,
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
      },
      {
        link: '/docs',
        name: 'Documentation',
        icon: SupportTwoTone,
      },
    ],
  },
];

export default menuItems;

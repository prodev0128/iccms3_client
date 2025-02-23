import {
  AdminPanelSettingsTwoTone,
  AssessmentTwoTone,
  AssignmentIndTwoTone,
  BarChartTwoTone,
  DesignServicesTwoTone,
  DonutLargeTwoTone,
  HomeTwoTone,
  LocalPoliceTwoTone,
  PolicyTwoTone,
  SettingsTwoTone,
  SupportTwoTone,
  TransferWithinAStationTwoTone,
  TroubleshootTwoTone,
  VerifiedUserTwoTone,
} from '@mui/icons-material';

const menuItems = [
  {
    heading: 'Censor Pages',
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
            icon: PolicyTwoTone,
            link: '/censor/receipt',
            name: 'Receipt',
          },
          {
            icon: TransferWithinAStationTwoTone,
            link: '/censor/assign',
            name: 'Assign',
          },
          {
            icon: VerifiedUserTwoTone,
            link: '/censor/process',
            name: 'Process',
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
            link: '/stat/receipt',
            name: 'People',
          },
          {
            icon: DonutLargeTwoTone,
            link: '/stat/assign',
            name: 'Pub',
          },
          {
            icon: TroubleshootTwoTone,
            link: '/stat/process',
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

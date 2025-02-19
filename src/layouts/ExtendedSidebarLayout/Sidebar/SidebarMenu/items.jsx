import AdminPanelSettingsTwoToneIcon from '@mui/icons-material/AdminPanelSettingsTwoTone';
import AssessmentTwoToneIcon from '@mui/icons-material/AssessmentTwoTone';
import AssignmentIndTwoToneIcon from '@mui/icons-material/AssignmentIndTwoTone';
import BarChartTwoToneIcon from '@mui/icons-material/BarChartTwoTone';
import DesignServicesTwoToneIcon from '@mui/icons-material/DesignServicesTwoTone';
import DonutLargeTwoToneIcon from '@mui/icons-material/DonutLargeTwoTone';
import HomeTwoToneIcon from '@mui/icons-material/HomeTwoTone';
import LocalPoliceTwoToneIcon from '@mui/icons-material/LocalPoliceTwoTone';
import PolicyTwoToneIcon from '@mui/icons-material/PolicyTwoTone';
import SettingsTwoToneIcon from '@mui/icons-material/SettingsTwoTone';
import SupportTwoToneIcon from '@mui/icons-material/SupportTwoTone';
import TransferWithinAStationTwoToneIcon from '@mui/icons-material/TransferWithinAStationTwoTone';
import TroubleshootTwoToneIcon from '@mui/icons-material/TroubleshootTwoTone';
import VerifiedUserTwoToneIcon from '@mui/icons-material/VerifiedUserTwoTone';

const menuItems = [
  {
    heading: 'Censor Pages',
    items: [
      {
        icon: HomeTwoToneIcon,
        link: '/',
        name: 'Home',
      },
      {
        icon: AdminPanelSettingsTwoToneIcon,
        items: [
          {
            icon: AssignmentIndTwoToneIcon,
            link: '/admin/users',
            name: 'Users',
          },
          {
            icon: DesignServicesTwoToneIcon,
            link: '/admin/codes',
            name: 'Codes',
          },
          {
            icon: SettingsTwoToneIcon,
            link: '/admin/settings',
            name: 'Settings',
          },
        ],
        link: '/admin',
        name: 'Administration',
      },
      {
        icon: LocalPoliceTwoToneIcon,
        items: [
          {
            icon: PolicyTwoToneIcon,
            link: '/censor/receipt',
            name: 'Receipt',
          },
          {
            icon: TransferWithinAStationTwoToneIcon,
            link: '/censor/assign',
            name: 'Assign',
          },
          {
            icon: VerifiedUserTwoToneIcon,
            link: '/censor/process',
            name: 'Process',
          },
        ],
        link: '/censor',
        name: 'Censor',
      },
      {
        icon: AssessmentTwoToneIcon,
        items: [
          {
            icon: BarChartTwoToneIcon,
            link: '/stat/receipt',
            name: 'People',
          },
          {
            icon: DonutLargeTwoToneIcon,
            link: '/stat/assign',
            name: 'Pub',
          },
          {
            icon: TroubleshootTwoToneIcon,
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
        icon: DesignServicesTwoToneIcon,
        link: '/overview',
        name: 'Overview',
      },
      {
        icon: SupportTwoToneIcon,
        link: '/docs',
        name: 'Documentation',
      },
    ],
  },
];

export default menuItems;

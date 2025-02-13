import AccountTreeTwoToneIcon from '@mui/icons-material/AccountTreeTwoTone';
import AnalyticsTwoToneIcon from '@mui/icons-material/AnalyticsTwoTone';
import AssignmentIndTwoToneIcon from '@mui/icons-material/AssignmentIndTwoTone';
import BackupTableTwoToneIcon from '@mui/icons-material/BackupTableTwoTone';
import DesignServicesTwoToneIcon from '@mui/icons-material/DesignServicesTwoTone';
import ErrorTwoToneIcon from '@mui/icons-material/ErrorTwoTone';
import HealthAndSafetyTwoToneIcon from '@mui/icons-material/HealthAndSafetyTwoTone';
import ReceiptTwoToneIcon from '@mui/icons-material/ReceiptTwoTone';
import SmartToyTwoToneIcon from '@mui/icons-material/SmartToyTwoTone';
import StorefrontTwoToneIcon from '@mui/icons-material/StorefrontTwoTone';
import SupportTwoToneIcon from '@mui/icons-material/SupportTwoTone';
import VpnKeyTwoToneIcon from '@mui/icons-material/VpnKeyTwoTone';

const menuItems = [
  {
    heading: 'General',
    items: [
      {
        icon: BackupTableTwoToneIcon,
        items: [
          {
            badge: 'v3.0',
            badgeTooltip: 'Added in version 3.0',
            link: '/extended-sidebar/dashboards',
            name: 'Extended sidebar',
          },
          {
            badge: '',
            badgeTooltip: 'Updated',
            link: '/accent-header/dashboards',
            name: 'Accent header',
          },
          {
            link: '/accent-sidebar/dashboards',
            name: 'Accent sidebar',
          },
          {
            link: '/boxed-sidebar/dashboards',
            name: 'Boxed sidebar',
          },
          {
            link: '/collapsed-sidebar/dashboards',
            name: 'Collapsed sidebar',
          },
          {
            link: '/bottom-navigation/dashboards',
            name: 'Bottom navigation',
          },
          {
            link: '/top-navigation/dashboards',
            name: 'Top navigation',
          },
        ],
        link: '',
        name: 'Blueprints',
      },
      {
        icon: SmartToyTwoToneIcon,
        items: [
          {
            badge: '',
            badgeTooltip: 'Reports Dashboard - version 3.0',
            link: 'dashboards/reports',
            name: 'Reports',
          },
          {
            badge: '',
            badgeTooltip: 'Expenses Dashboard - version 3.0',
            link: 'dashboards/expenses',
            name: 'Expenses',
          },
          {
            badge: '',
            badgeTooltip: 'Products Dashboard - version 3.0',
            link: 'dashboards/products',
            name: 'Products',
          },
          {
            badge: '',
            badgeTooltip: 'Statistics Dashboard - version 3.0',
            link: 'dashboards/statistics',
            name: 'Statistics',
          },
          {
            link: 'dashboards/automation',
            name: 'Automation',
          },
          {
            link: 'dashboards/analytics',
            name: 'Analytics',
          },
          {
            link: 'dashboards/banking',
            name: 'Banking',
          },
          {
            link: 'dashboards/commerce',
            name: 'Commerce',
          },
          {
            link: 'dashboards/crypto',
            name: 'Crypto',
          },
          {
            link: 'dashboards/finance',
            name: 'Finance',
          },
          {
            link: 'dashboards/fitness',
            name: 'Fitness',
          },
          {
            items: [
              {
                link: 'dashboards/healthcare/doctor',
                name: 'Doctors',
              },
              {
                link: 'dashboards/healthcare/hospital',
                name: 'Hospital',
              },
            ],
            link: '/accent-header/dashboards/healthcare',
            name: 'Healthcare',
          },
          {
            link: 'dashboards/helpdesk',
            name: 'Helpdesk',
          },
          {
            link: 'dashboards/learning',
            name: 'Learning',
          },
          {
            link: 'dashboards/monitoring',
            name: 'Monitoring',
          },
          {
            link: 'dashboards/tasks',
            name: 'Tasks',
          },
        ],
        link: '/accent-header/dashboards',
        name: 'Dashboards',
      },
      {
        badge: '',
        badgeTooltip: 'Tokyo 3.0 contains over 250 new data display blocks',
        icon: HealthAndSafetyTwoToneIcon,
        items: [
          {
            link: 'blocks/charts-large',
            name: 'Charts large',
          },
          {
            link: 'blocks/charts-small',
            name: 'Charts small',
          },
          {
            link: 'blocks/composed-cards',
            name: 'Composed cards',
          },
          {
            link: 'blocks/grids',
            name: 'Grids',
          },
          {
            link: 'blocks/icon-cards',
            name: 'Icon cards',
          },
          {
            link: 'blocks/image-cards',
            name: 'Image cards',
          },
          {
            link: 'blocks/lists-large',
            name: 'Lists large',
          },
          {
            link: 'blocks/lists-small',
            name: 'Lists small',
          },
          {
            link: 'blocks/navigation',
            name: 'Navigation',
          },
          {
            link: 'blocks/profile-cards',
            name: 'Profile cards',
          },
          {
            link: 'blocks/progress-circular',
            name: 'Progress circular',
          },
          {
            link: 'blocks/progress-horizontal',
            name: 'Progress horizontal',
          },
          {
            link: 'blocks/sparklines-large',
            name: 'Sparklines large',
          },
          {
            link: 'blocks/sparklines-small',
            name: 'Sparklines small',
          },
          {
            link: 'blocks/statistics',
            name: 'Statistics',
          },
        ],
        link: '/accent-header/blocks',
        name: 'Data Display',
      },
      {
        icon: AnalyticsTwoToneIcon,
        items: [
          {
            link: 'applications/calendar',
            name: 'Calendar',
          },
          {
            link: 'applications/file-manager',
            name: 'File Manager',
          },
          {
            link: 'applications/jobs-platform',
            name: 'Jobs Platform',
          },
          {
            link: 'applications/mailbox/inbox',
            name: 'Mailbox',
          },
          {
            link: 'applications/messenger',
            name: 'Messenger',
          },
          {
            link: 'applications/projects-board',
            name: 'Projects Board',
          },
        ],
        link: '/accent-header/applications',
        name: 'Applications',
      },
    ],
  },
  {
    heading: 'Management',
    items: [
      {
        icon: AssignmentIndTwoToneIcon,
        items: [
          {
            link: 'management/users/list',
            name: 'List',
          },
          {
            link: 'management/users/single',
            name: 'User Profile',
          },
        ],
        link: '/accent-header/management/users',
        name: 'Users',
      },
      {
        icon: AccountTreeTwoToneIcon,
        link: '/accent-header/management/projects/list',
        name: 'Projects',
      },
      {
        icon: StorefrontTwoToneIcon,
        items: [
          {
            link: 'management/commerce/shop',
            name: 'Shop',
          },
          {
            link: 'management/commerce/products/list',
            name: 'List',
          },
          {
            link: 'management/commerce/products/single/1',
            name: 'Details',
          },
          {
            link: 'management/commerce/products/create',
            name: 'Create',
          },
        ],
        link: '/accent-header/management/commerce',
        name: 'Commerce',
      },
      {
        icon: ReceiptTwoToneIcon,
        items: [
          {
            link: 'management/invoices/list',
            name: 'List',
          },
          {
            link: 'management/invoices/single',
            name: 'Details',
          },
        ],
        link: '/accent-header/management/invoices',
        name: 'Invoices',
      },
    ],
  },
  {
    heading: 'Extra Pages',
    items: [
      {
        icon: VpnKeyTwoToneIcon,
        items: [
          {
            items: [
              {
                link: '/account/login-basic',
                name: 'Basic',
              },
              {
                link: '/account/login-cover',
                name: 'Cover',
              },
            ],
            name: 'Login',
          },
          {
            items: [
              {
                link: '/account/register-basic',
                name: 'Basic',
              },
              {
                link: '/account/register-cover',
                name: 'Cover',
              },
              {
                link: '/account/register-wizard',
                name: 'Wizard',
              },
            ],
            name: 'Register',
          },
          {
            link: '/account/recover-password',
            name: 'Recover Password',
          },
        ],
        link: '/auth',
        name: 'Auth Pages',
      },
      {
        icon: ErrorTwoToneIcon,
        items: [
          {
            link: '/status/404',
            name: 'Error 404',
          },
          {
            link: '/status/500',
            name: 'Error 500',
          },
          {
            link: '/status/maintenance',
            name: 'Maintenance',
          },
          {
            link: '/status/coming-soon',
            name: 'Coming Soon',
          },
        ],
        link: '/status',
        name: 'Status',
      },
    ],
  },
  {
    heading: 'Foundation',
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

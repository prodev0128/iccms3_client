export const pageSizes = [10, 20, 50, 100, 1000, 10000];

export const initialPaginationModel = { page: 0, pageSize: 10 };
export const initialFilterModel = { items: [] };
export const initialSortModel = [];

export const debounceTime = 300;

export const settingTypes = {
  TEXT: { name: 'Text', value: 'TEXT' },
  NUMBER: { name: 'Number', value: 'NUMBER' },
  BOOLEAN: { name: 'Boolean', value: 'BOOLEAN' },
};

export const codeOptionTypes = {
  ...settingTypes,
  SINGLE_SELECT: { name: 'SingleSelect', value: 'SINGLE_SELECT' },
  MULTI_SELECT: { name: 'MultiSelect', value: 'MULTI_SELECT' },
};

export const invoiceStatus = {
  UNDEFINED: 'UNDEFINED',
  REGISTERED: 'REGISTERED',
  TRANSFERRED: 'TRANSFERRED',
  ASSIGNED: 'ASSIGNED',
  CENSORED: 'CENSORED',
  CHECKED: 'CHECKED',
  RECEIVED: 'RECEIVED',
  OUTED: 'OUTED',
  COMPLETED: 'COMPLETED',
};

export const invoiceActions = {
  REGISTER: 'REGISTER',
  UNREGISTER: 'UNREGISTER',
  TRANSFER: 'TRANSFER',
  UNTRANSFER: 'UNTRANSFER',
  ASSIGN: 'ASSIGN',
  UNASSIGN: 'UNASSIGN',
  CENSOR: 'CENSOR',
  UNCENSOR: 'UNCENSOR',
  CHECK: 'CHECK',
  UNCHECK: 'UNCHECK',
  RECEIVE: 'RECEIVE',
  UNRECEIVE: 'UNRECEIVE',
  OUT: 'OUT',
  UNOUT: 'UNOUT',
  COMPLETE: 'COMPLETE',
  UNCOMPLETE: 'UNCOMPLETE',
};

export const findCategory = {
  ALL: 'ALL',
  DEP: 'DEP',
  MINE: 'MINE',
};

export const dataTypes = {
  ALL: 'ALL',
  EMAIL: 'EMAIL',
  FTP: 'FTP',
};

export const receiptStatusTabs = [
  { name: 'All', value: 'ALL', min: invoiceStatus.UNDEFINED, max: invoiceStatus.COMPLETED },
  { name: 'Undefined', value: invoiceStatus.UNDEFINED },
  { name: 'Registered', value: invoiceStatus.REGISTERED },
  { name: 'Checking', value: 'CHECKING', min: invoiceStatus.TRANSFERRED, max: invoiceStatus.CHECKED },
  { name: 'Received', value: invoiceStatus.RECEIVED },
  { name: 'Outed', value: invoiceStatus.OUTED },
];

export const depStatusTabs = [
  {
    name: 'All',
    value: 'ALL',
    min: invoiceStatus.TRANSFERRED,
    max: invoiceStatus.COMPLETED,
    category: findCategory.DEP,
  },
  { name: 'Transferred', value: invoiceStatus.TRANSFERRED, category: findCategory.DEP },
  {
    name: 'Censoring',
    value: 'CENSORING',
    min: invoiceStatus.ASSIGNED,
    max: invoiceStatus.CENSORED,
    category: findCategory.DEP,
  },
  { name: 'Checked', value: invoiceStatus.CHECKED, category: findCategory.DEP },
];

export const personalStatusTabs = [
  {
    name: 'All',
    value: 'ALL',
    min: invoiceStatus.ASSIGNED,
    max: invoiceStatus.COMPLETED,
    category: findCategory.MINE,
  },
  { name: 'To Censor', value: invoiceStatus.ASSIGNED, category: findCategory.MINE },
  { name: 'To Check', value: invoiceStatus.CENSORED, category: findCategory.MINE },
];

export const totalStatusTabs = [
  { name: 'All', value: 'ALL', min: invoiceStatus.UNDEFINED, max: invoiceStatus.COMPLETED },
  { name: 'Checking', value: 'CHECKING', min: invoiceStatus.UNDEFINED, max: invoiceStatus.OUTED },
  { name: 'Completed', value: invoiceStatus.COMPLETED },
];

export const initialTab = { name: 'All', value: 'ALL' };

export const sidebarCategory = {
  RECEIPT: 'RECEIPT',
  DEP: 'DEP',
  PERSONAL: 'PERSONAL',
  TOTAL: 'TOTAL',
};

export const roles = {
  ADMIN: 'ADMIN',

  // USERS
  USERS_VIEW: 'USERS_VIEW',
  USERS_CREATE: 'USERS_CREATE',
  USERS_EDIT: 'USERS_EDIT',
  USERS_DELETE: 'USERS_DELETE',

  // CODES
  CODES_VIEW: 'CODES_VIEW',
  CODES_CREATE: 'CODES_CREATE',
  CODES_EDIT: 'CODES_EDIT',
  CODES_DELETE: 'CODES_DELETE',

  // SETTINGS
  SETTINGS_VIEW: 'SETTINGS_VIEW',
  SETTINGS_CREATE: 'SETTINGS_CREATE',
  SETTINGS_EDIT: 'SETTINGS_EDIT',
  SETTINGS_DELETE: 'SETTINGS_DELETE',

  // NEWS
  NEWS_VIEW: 'NEWS_VIEW',
  NEWS_CREATE: 'NEWS_CREATE',
  NEWS_EDIT: 'NEWS_EDIT',
  NEWS_DELETE: 'NEWS_DELETE',

  // RECEIPT
  RECEIPT_VIEW: 'RECEIPT_VIEW',
  RECEIPT_REGISTER: 'RECEIPT_REGISTER',
  RECEIPT_TRANSFER: 'RECEIPT_TRANSFER',
  RECEIPT_OUT: 'RECEIPT_OUT',

  // DEP
  DEP_VIEW: 'DEP_VIEW',
  DEP_ASSIGN: 'DEP_ASSIGN',
  DEP_RECEIVE: 'DEP_RECEIVE',

  // CENSOR
  PERSONAL_VIEW: 'PERSONAL_VIEW',
  PERSONAL_CENSOR: 'PERSONAL_CENSOR',
  PERSONAL_CHECK: 'PERSONAL_CHECK',

  // TOTAL
  TOTAL_VIEW: 'TOTAL_VIEW',

  // STATISTIC
  PEOPLE_VIEW: 'PEOPLE_VIEW',
  PUB_VIEW: 'PUB_VIEW',
  FLOW_VIEW: 'FLOW_VIEW',
};

export const roleObjectArray = [
  {
    id: 'ADMIN',
    label: 'Admin',
  },
  {
    id: 'ADMINISTRATION',
    label: 'Administration',
    children: [
      {
        id: 'USERS',
        label: 'Users',
        children: [
          {
            id: roles.USERS_VIEW,
            label: 'Users View',
          },
          {
            id: roles.USERS_CREATE,
            label: 'Users Create',
          },
          {
            id: roles.USERS_EDIT,
            label: 'Users Edit',
          },
          {
            id: roles.USERS_DELETE,
            label: 'Users Delete',
          },
        ],
      },
      {
        id: 'CODES',
        label: 'Codes',
        children: [
          {
            id: roles.CODES_VIEW,
            label: 'Codes View',
          },
          {
            id: roles.CODES_CREATE,
            label: 'Codes Create',
          },
          {
            id: roles.CODES_EDIT,
            label: 'Codes Edit',
          },
          {
            id: roles.CODES_DELETE,
            label: 'Codes Delete',
          },
        ],
      },
      {
        id: 'SETTINGS',
        label: 'Settings',
        children: [
          {
            id: roles.SETTINGS_VIEW,
            label: 'Settings View',
          },
          {
            id: roles.SETTINGS_CREATE,
            label: 'Settings Create',
          },
          {
            id: roles.SETTINGS_EDIT,
            label: 'Settings Edit',
          },
          {
            id: roles.SETTINGS_DELETE,
            label: 'Settings Delete',
          },
        ],
      },
    ],
  },
  {
    id: 'CENSOR',
    label: 'Censor',
    children: [
      {
        id: 'RECEIPT',
        label: 'Receipt',
        children: [
          {
            id: roles.RECEIPT_VIEW,
            label: 'Receipt View',
          },
          {
            id: roles.RECEIPT_REGISTER,
            label: 'Receipt Register',
          },
          {
            id: roles.RECEIPT_TRANSFER,
            label: 'Receipt Transfer',
          },
          {
            id: roles.RECEIPT_OUT,
            label: 'Receipt OUT',
          },
        ],
      },
      {
        id: 'DEP',
        label: 'Dep',
        children: [
          {
            id: roles.DEP_VIEW,
            label: 'Dep View',
          },
          {
            id: roles.DEP_ASSIGN,
            label: 'Dep Assign',
          },
          {
            id: roles.DEP_RECEIVE,
            label: 'Dep Receipt',
          },
        ],
      },
      {
        id: 'PERSONAL',
        label: 'Personal',
        children: [
          {
            id: roles.PERSONAL_VIEW,
            label: 'Personal View',
          },
          {
            id: roles.PERSONAL_CENSOR,
            label: 'Personal Censor',
          },
          {
            id: roles.PERSONAL_CHECK,
            label: 'Personal Check',
          },
        ],
      },
      {
        id: 'TOTAL',
        label: 'Total',
        children: [
          {
            id: roles.TOTAL_VIEW,
            label: 'Total View',
          },
        ],
      },
    ],
  },
  {
    id: 'STATISTICS',
    label: 'Statistics',
    children: [
      {
        id: 'PEOPLE',
        label: 'People',
        children: [
          {
            id: roles.PEOPLE_VIEW,
            label: 'People View',
          },
        ],
      },
      {
        id: 'PUB',
        label: 'Pub',
        children: [
          {
            id: roles.PUB_VIEW,
            label: 'Pub View',
          },
        ],
      },
      {
        id: 'FLOW',
        label: 'Flow',
        children: [
          {
            id: roles.FLOW_VIEW,
            label: 'Flow View',
          },
        ],
      },
    ],
  },
];

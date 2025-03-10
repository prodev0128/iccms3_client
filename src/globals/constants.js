export const pageSizes = [10, 20, 50, 100, 1000, 10000];

export const initialPaginationModel = { page: 0, pageSize: 10 };

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

export const fileTypes = {
  ALL: 'ALL',
  EMAIL: 'EMAIL',
  FTP: 'FTP',
  OUTFTP: 'OUTFTP',
};

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
    name: 'Checking',
    value: 'CHECKING',
    min: invoiceStatus.TRANSFERRED,
    max: invoiceStatus.CHECKED,
    category: findCategory.DEP,
  },
  { name: 'To Check', value: invoiceStatus.ASSIGNED, category: findCategory.MINE },
  { name: 'Censored', value: invoiceStatus.CENSORED, category: findCategory.DEP },
  { name: 'Checked', value: invoiceStatus.CHECKED, category: findCategory.DEP },
];

export const receiptStatusTabs = [
  { name: 'All', value: 'ALL', min: invoiceStatus.UNDEFINED, max: invoiceStatus.RECEIVED },
  { name: 'Undefined', value: invoiceStatus.UNDEFINED },
  { name: 'Registered', value: invoiceStatus.REGISTERED },
  { name: 'Checking', value: 'CHECKING', min: invoiceStatus.TRANSFERRED, max: invoiceStatus.CHECKED },
  { name: 'Received', value: invoiceStatus.RECEIVED },
];

export const totalStatusTabs = [
  { name: 'All', value: 'ALL', min: invoiceStatus.UNDEFINED, max: invoiceStatus.COMPLETED },
  { name: 'Checking', value: 'CHECKING', min: invoiceStatus.UNDEFINED, max: invoiceStatus.OUTED },
  { name: 'Completed', value: invoiceStatus.COMPLETED },
];

export const initialTab = 'ALL';

export const sidebarCategory = {
  RECEIPT: 'RECEIPT',
  DEP: 'DEP',
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
    children: [
      {
        id: 'USERS',
        label: 'Users',
        children: [
          {
            id: roles.USERS_CREATE,
            label: 'Users Create',
            role: roles.USERS_CREATE,
          },
          {
            id: roles.USERS_EDIT,
            label: 'Users Edit',
            role: roles.USERS_EDIT,
          },
          {
            id: roles.USERS_DELETE,
            label: 'Users Delete',
            role: roles.USERS_DELETE,
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
        id: 'PROCESS',
        label: 'Process',
        children: [
          {
            id: roles.PROCESSING_ASSIGN,
            label: 'Censor Create',
            role: roles.PROCESSING_ASSIGN,
          },
        ],
      },
    ],
  },
];

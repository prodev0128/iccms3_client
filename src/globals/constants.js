export const pageSizes = [10, 20, 50, 100, 1000, 10000];

export const initialPaginationModel = { page: 0, pageSize: 10 };

export const debounceTime = 300;

export const initialTab = { name: 'All', value: 'ALL' };

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

export const roles = {
  // ADMIN
  USERS_CREATE: 'USERS_CREATE',
  USERS_EDIT: 'USERS_EDIT',
  USERS_DELETE: 'USERS_DELETE',

  // CENSOR
  PROCESSING_TRANSFER: 'PROCESSING_TRANSFER',
  PROCESSING_ASSIGN: 'PROCESSING_ASSIGN',
  PROCESSING_CENSOR: 'PROCESSING_CENSOR',
  PROCESSING_CHECK: 'PROCESSING_CHECK',
  PROCESSING_RECEIVE: 'PROCESSING_RECEIVE',
  PROCESSING_OUT: 'PROCESSING_OUT',
  PROCESSING_COMPLETE: 'PROCESSING_COMPLETE',

  INCOMING_REGISTER: 'INCOMING_REGISTER',
  INCOMING_VIEW: 'INCOMING_VIEW',

  OUTGOING_COMPLETE: 'OUTGOING_COMPLETE',
  OUTGOING_VIEW: 'OUTGOING_VIEW',

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

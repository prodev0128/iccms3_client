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

export const codeOptionTypes = {
  TEXT: { name: 'Text', value: 'TEXT' },
  BOOLEAN: { name: 'Boolean', value: 'BOOLEAN' },
  SINGLE_SELECT: { name: 'SingleSelect', value: 'SINGLE_SELECT' },
  MULTI_SELECT: { name: 'MultiSelect', value: 'MULTI_SELECT' },
};

export const roles = {
  USERS_CREATE: 'USERS_CREATE',
  USERS_EDIT: 'USERS_EDIT',
  USERS_DELETE: 'USERS_DELETE',
  CENSOR_CREATE: 'CENSOR_CREATE',
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
            id: roles.CENSOR_CREATE,
            label: 'Censor Create',
            role: roles.CENSOR_CREATE,
          },
        ],
      },
    ],
  },
];

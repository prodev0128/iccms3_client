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

export const userRoles = [
  {
    id: 'ADMIN',
    label: 'Admin',
    children: [
      {
        id: 'USERS',
        label: 'Users',
        children: [
          {
            id: 'CREATE',
            label: 'Create',
            value: 'CREATE',
          },
          {
            id: 'EDIT',
            label: 'Edit',
            value: 'EDIT',
          },
          {
            id: 'DELETE',
            label: 'Delete',
            value: 'DELETE',
          },
        ],
      },
    ],
  },
];

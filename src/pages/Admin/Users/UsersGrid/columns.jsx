import { Check, Delete, DoDisturb, Edit, Key } from '@mui/icons-material';

import GridAction from '../../../../components/DataGrid/GridAction';

const useColumns = (actions) => {
  return [
    {
      field: 'actions',
      getActions: (params) => [
        <GridAction
          icon={<Check />}
          key="Allow"
          label="Allow"
          visible={!params.row.isActive}
          onClick={() => actions.allowUser(params.row)}
        />,
        <GridAction
          icon={<DoDisturb />}
          key="Disallow"
          label="Disallow"
          visible={params.row.isActive}
          onClick={() => actions.disallowUser(params.row)}
        />,
        <GridAction
          visible
          icon={<Key />}
          key="Reset"
          label="Reset Password"
          onClick={() => actions.resetPassword(params.row)}
        />,
        <GridAction visible icon={<Edit />} key="Edit" label="Edit" onClick={() => actions.editUser(params.row)} />,
        <GridAction
          visible
          icon={<Delete />}
          key="Delete"
          label="Delete"
          onClick={() => actions.removeUser(params.row)}
        />,
      ],
      type: 'actions',
      width: 160,
    },
    { field: 'userID', headerName: 'User ID', width: 150 },
    { field: 'name', headerName: 'Name', width: 150 },
    { field: 'genderNo', headerName: 'Gender', width: 150 },
    { field: 'birthday', headerName: 'Birthday', width: 150 },
    { field: 'stampNo', headerName: 'Stamp No', width: 150 },
    { field: 'depNo', headerName: 'Dep Name', width: 150 },
    { field: 'isActive', headerName: 'Active', width: 150 },
  ];
};

export default useColumns;

import { CheckTwoTone, DeleteTwoTone, DoDisturbTwoTone, EditTwoTone, KeyTwoTone } from '@mui/icons-material';

import GridActionItem from '../../../../components/DataGrid/GridActionItem';

const useColumns = (actions) => {
  return [
    {
      field: 'actions',
      getActions: (params) => [
        <GridActionItem
          icon={<CheckTwoTone />}
          key="Allow"
          label="Allow"
          visible={!params.row.isActive}
          onClick={() => actions.allowUser(params.row)}
        />,
        <GridActionItem
          icon={<DoDisturbTwoTone />}
          key="Disallow"
          label="Disallow"
          visible={params.row.isActive}
          onClick={() => actions.disallowUser(params.row)}
        />,
        <GridActionItem
          visible
          icon={<KeyTwoTone />}
          key="Reset"
          label="Reset Password"
          onClick={() => actions.resetPassword(params.row)}
        />,
        <GridActionItem
          visible
          icon={<EditTwoTone />}
          key="Edit"
          label="Edit"
          onClick={() => actions.updateUser(params.row)}
        />,
        <GridActionItem
          visible
          icon={<DeleteTwoTone />}
          key="Delete"
          label="Delete"
          onClick={() => actions.deleteUser(params.row)}
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

import {
  CheckTwoTone,
  DeleteTwoTone,
  DoDisturbTwoTone,
  EditTwoTone,
  ErrorTwoTone,
  InfoTwoTone,
  KeyTwoTone,
} from '@mui/icons-material';
import { Chip } from '@mui/material';

import GridActionItem from '../../../../components/DataGrid/GridActionItem';

const useColumns = (actions) => {
  return [
    {
      field: 'actions',
      getActions: ({ row }) => [
        <GridActionItem
          icon={<CheckTwoTone />}
          key="Allow"
          label="Allow"
          visible={!row.isActive}
          onClick={() => actions.allowUser(row)}
        />,
        <GridActionItem
          icon={<DoDisturbTwoTone />}
          key="Disallow"
          label="Disallow"
          visible={row.isActive}
          onClick={() => actions.disallowUser(row)}
        />,
        <GridActionItem
          visible
          icon={<KeyTwoTone />}
          key="Reset"
          label="Reset Password"
          onClick={() => actions.resetPassword(row)}
        />,
        <GridActionItem
          visible
          icon={<EditTwoTone />}
          key="Edit"
          label="Edit"
          onClick={() => actions.updateUser(row)}
        />,
        <GridActionItem
          visible
          icon={<DeleteTwoTone />}
          key="Delete"
          label="Delete"
          onClick={() => actions.deleteUser(row)}
        />,
      ],
      type: 'actions',
      width: 160,
    },
    { field: 'userID', headerName: 'User ID', width: 150 },
    { field: 'name', headerName: 'Name', width: 150 },
    { field: 'genderNo', headerName: 'Gender', type: 'number', width: 150 },
    { field: 'birthday', headerName: 'Birthday', type: 'date', width: 150 },
    { field: 'stampNo', headerName: 'Stamp No', type: 'number', width: 150 },
    { field: 'depNo', headerName: 'Dep Name', type: 'number', width: 150 },
    {
      field: 'isActive',
      headerName: 'Active',
      type: 'boolean',
      width: 150,
      renderCell: ({ value }) => {
        const color = value ? 'info' : 'secondary';
        const icon = value ? <InfoTwoTone fontSize="small" /> : <ErrorTwoTone fontSize="small" />;
        const label = value ? 'Active' : 'Disabled';
        return <Chip color={color} icon={icon} label={label} sx={{ fontWeight: 'bold' }} variant="outlined" />;
      },
    },
  ];
};

export default useColumns;

import {
  CheckTwoTone,
  DeleteTwoTone,
  DoDisturbTwoTone,
  EditNoteTwoTone,
  EditTwoTone,
  ErrorTwoTone,
  InfoTwoTone,
  KeyTwoTone,
} from '@mui/icons-material';
import { Chip } from '@mui/material';

import GridActionItem from '../../../../components/CustomDataGrid/GridActionItem';
import { getDateFromString } from '../../../../globals/utils';
import { useCodes } from '../../../../redux/selectors';

const useColumns = (actions) => {
  const { individualCodes } = useCodes();
  const { dep: deps = [], gender: genders = [], job: jobs = [] } = individualCodes;

  return [
    {
      field: 'actions',
      renderCell: ({ row }) => (
        <>
          <GridActionItem
            icon={CheckTwoTone}
            label="Allow"
            visible={!row.isActive}
            onClick={() => actions.allowUser(row)}
          />
          <GridActionItem
            icon={DoDisturbTwoTone}
            label="Disallow"
            visible={!!row.isActive}
            onClick={() => actions.disallowUser(row)}
          />
          <GridActionItem icon={KeyTwoTone} label="Reset Password" onClick={() => actions.resetPassword(row)} />
          <GridActionItem icon={EditNoteTwoTone} label="Edit Roles" onClick={() => actions.updateUserRoles(row)} />
          <GridActionItem icon={EditTwoTone} label="Edit" onClick={() => actions.updateUser(row)} />
          <GridActionItem icon={DeleteTwoTone} label="Delete" onClick={() => actions.deleteUser(row)} />
        </>
      ),
      type: 'actions',
      width: 220,
    },
    { field: 'userID', headerName: 'User ID', width: 150 },
    { field: 'name', headerName: 'Name', width: 150 },
    {
      field: 'gender',
      headerName: 'Gender',
      width: 150,
      valueFormatter: (value) => (genders?.find((gender) => gender.value === value) || {}).name,
    },
    {
      field: 'birthday',
      headerName: 'Birthday',
      type: 'date',
      width: 150,
      valueFormatter: (value) => getDateFromString(value),
    },
    { field: 'stampNo', headerName: 'Stamp No', type: 'number', width: 150 },
    {
      field: 'dep',
      headerName: 'Dep Name',
      width: 150,
      valueFormatter: (value) => (deps?.find((dep) => dep.value === value) || {}).name,
    },
    {
      field: 'job',
      headerName: 'Job Name',
      width: 150,
      valueFormatter: (value) => (jobs?.find((job) => job.value === value) || {}).name,
    },
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

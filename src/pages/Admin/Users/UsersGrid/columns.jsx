import DeleteIcon from '@mui/icons-material/Delete';
import { useDialogs } from '@toolpad/core';
import { useCallback } from 'react';
import { useDispatch } from 'react-redux';

import GridAction from '../../../../components/DataGrid/GridAction';

const useColumns = () => {
  const dispatch = useDispatch();
  const dialogs = useDialogs();

  const removeUser = useCallback(
    async (data) => {
      const confirm = await dialogs.confirm('Are you sure you want to delete this user?');
      if (!confirm) {
        return;
      }
      console.log(data);
    },
    [dispatch, dialogs],
  );

  return [
    {
      field: 'actions',
      getActions: (params) => [
        <GridAction icon={<DeleteIcon />} key="Delete" label="Delete" onClick={() => removeUser(params.row)} />,
      ],
      type: 'actions',
      width: 100,
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

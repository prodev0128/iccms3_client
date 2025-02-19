import { DataGridPro } from '@mui/x-data-grid-pro';
import { useEffect, useMemo, useState } from 'react';
import { useDispatch } from 'react-redux';

import { fetchUsers } from '../../../redux/actions/users';
import useUsers from '../../../redux/selectors/useUsers';

const UserGrid = () => {
  const dispatch = useDispatch();
  const users = useUsers();
  const [paginationModel, setPaginationModel] = useState({ page: 0, pageSize: 10 });
  const [filterModel, setFilterModel] = useState({ items: [] });
  const [sortModel, setSortModel] = useState([]);

  useEffect(() => {
    if (users.status === 'loading') {
      return;
    }
    dispatch(
      fetchUsers(
        JSON.stringify({
          filterModel,
          page: paginationModel.page,
          pageSize: paginationModel.pageSize,
          sortModel,
        }),
      ),
    );
  }, [dispatch, paginationModel, sortModel, filterModel]);

  const rows = useMemo(() => users.users.map((user) => ({ ...user, id: user._id })), [users.users]);

  const columns = [
    { field: 'no', headerName: 'No', width: 150 },
    { field: 'userID', headerName: 'User ID', width: 150 },
    { field: 'name', headerName: 'Name', width: 150 },
  ];

  console.log('users', users.users);

  return (
    <>
      {users.status === 'succeeded' ? (
        <DataGridPro
          pagination
          columns={columns}
          filterMode="server"
          pageSizeOptions={[10, 20, 50, 100, 1000, 10000]}
          paginationMode="server"
          rows={rows}
          sortingMode="server"
          onFilterModelChange={(newFilterModel) => {
            setFilterModel(newFilterModel);
          }}
          onPaginationModelChange={(newPaginationModel) => {
            setPaginationModel(newPaginationModel);
          }}
          onSortModelChange={(newSortModel) => {
            setSortModel(newSortModel);
          }}
        />
      ) : (
        'processing'
      )}
    </>
  );
};

export default UserGrid;

import { DataGridPro } from '@mui/x-data-grid-pro';
import { useEffect, useMemo, useState } from 'react';
import { useDispatch } from 'react-redux';

import QuickSearchToolbar from '../../../components/DataGrid/QuickSearchToolbar';
import { fetchUsers } from '../../../redux/actions/users';
import useUsers from '../../../redux/selectors/useUsers';

const UserGrid = () => {
  const dispatch = useDispatch();
  const { status, totalCount: rowCount, users } = useUsers();
  const [paginationModel, setPaginationModel] = useState({ page: 0, pageSize: 10 });
  const [filterModel, setFilterModel] = useState({ items: [] });
  const [sortModel, setSortModel] = useState([]);

  useEffect(() => {
    console.log('filterModel', filterModel);
    console.log('sortModel', sortModel);
    dispatch(
      fetchUsers({
        ...paginationModel,
        filterModel: JSON.stringify(filterModel),
        sortModel: JSON.stringify(sortModel),
      }),
    );
  }, [dispatch, paginationModel, sortModel, filterModel]);

  const rows = useMemo(() => users.map((user) => ({ ...user, id: user._id })), [users]);

  const columns = [
    { field: 'no', headerName: 'No', width: 150 },
    { field: 'userID', headerName: 'User ID', width: 150 },
    { field: 'name', headerName: 'Name', width: 150 },
  ];

  return (
    <>
      <DataGridPro
        headerFilters
        pagination
        columns={columns}
        filterMode="server"
        loading={status === 'loading'}
        pageSizeOptions={[10, 20, 50, 100, 1000, 10000]}
        paginationMode="server"
        rowCount={rowCount}
        rows={rows}
        slots={{ toolbar: QuickSearchToolbar }}
        sortingMode="server"
        slotProps={{
          toolbar: {
            showQuickFilter: true,
          },
        }}
        onFilterModelChange={setFilterModel}
        onPaginationModelChange={setPaginationModel}
        onSortModelChange={setSortModel}
      />
    </>
  );
};

export default UserGrid;

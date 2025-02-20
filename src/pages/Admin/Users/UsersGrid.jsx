import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { useDispatch } from 'react-redux';

import DataGrid from '../../../components/DataGrid';
import useDebounceCallback from '../../../hooks/useDebounceCallback';
import { fetchUsers } from '../../../redux/actions/users';
import { useUsers } from '../../../redux/selectors';
import { debounceTime, initialPaginationModel } from '../../../utils/utils';

const UsersGrid = () => {
  const dispatch = useDispatch();
  const { status, totalCount, users } = useUsers();
  const [paginationModel, setPaginationModel] = useState(initialPaginationModel);
  const [filterModel, setFilterModel] = useState({ items: [] });
  const [sortModel, setSortModel] = useState([]);

  const debouncedFetchUsers = useDebounceCallback(
    useCallback(async () => {
      dispatch(
        fetchUsers({
          ...paginationModel,
          filterModel: JSON.stringify(filterModel),
          sortModel: JSON.stringify(sortModel),
        }),
      );
    }, [dispatch, paginationModel, filterModel, sortModel]),
    debounceTime,
  );

  useEffect(() => {
    debouncedFetchUsers();
  }, [debouncedFetchUsers]);

  const rows = useMemo(() => users.map((user) => ({ ...user, id: user._id })), [users]);

  const columns = [
    { field: 'no', headerName: 'No', width: 150 },
    { field: 'userID', headerName: 'User ID', width: 150 },
    { field: 'name', headerName: 'Name', width: 150 },
  ];

  return (
    <>
      <DataGrid
        columns={columns}
        loading={status === 'loading'}
        rowCount={totalCount}
        rows={rows}
        onFilterModelChange={setFilterModel}
        onPaginationModelChange={setPaginationModel}
        onSortModelChange={setSortModel}
      />
    </>
  );
};

export default UsersGrid;

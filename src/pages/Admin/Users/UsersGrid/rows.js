import { useCallback, useEffect, useMemo } from 'react';
import { useDispatch } from 'react-redux';

import useDebounceCallback from '../../../../hooks/useDebounceCallback';
import { fetchUsers } from '../../../../redux/actions/users';
import { useUsers } from '../../../../redux/selectors';
import { debounceTime } from '../../../../utils/utils';

const useRows = (paginationModel, filterModel, sortModel) => {
  const dispatch = useDispatch();
  const { status, totalCount, users } = useUsers();

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
  return { rows, status, totalCount };
};

export default useRows;

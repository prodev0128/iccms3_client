import { useCallback, useEffect, useRef, useState } from 'react';
import { useSearchParams } from 'react-router';

import CustomDataGrid from '../../../../components/CustomDataGrid';
import { initialPaginationModel } from '../../../../utils/utils';
import useActions from './actions';
import useColumns from './columns';
import useRows from './rows';
import useToolbar from './toolbar';

const UsersGrid = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const initialPagination = useRef({
    page: parseInt(searchParams.get('page')) || initialPaginationModel.page,
    pageSize: parseInt(searchParams.get('page_size')) || initialPaginationModel.pageSize,
  }).current;

  const [paginationModel, setPaginationModel] = useState(initialPagination);
  const [filterModel, setFilterModel] = useState({ items: [] });
  const [sortModel, setSortModel] = useState([]);

  const setPagination = useCallback(
    (pagination) => {
      setPaginationModel(pagination);
      setSearchParams((prev) => {
        const newParams = new URLSearchParams(prev);
        newParams.set('page', pagination.page);
        newParams.set('page_size', pagination.pageSize);
        return newParams;
      });
    },
    [setSearchParams],
  );

  const actions = useActions(paginationModel, filterModel, sortModel);
  const columns = useColumns(actions);
  const { status, totalCount, users } = useRows();
  const toolbar = useToolbar(actions);

  return (
    <>
      <CustomDataGrid
        columns={columns}
        initialPagination={initialPagination}
        loading={status === 'loading'}
        placeholder="User ID / Name"
        rowCount={totalCount}
        rows={users}
        toolbar={toolbar}
        onFilterModelChange={setFilterModel}
        onPaginationModelChange={setPagination}
        onSortModelChange={setSortModel}
      />
    </>
  );
};

export default UsersGrid;

import { useCallback, useRef, useState } from 'react';
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
    page: parseInt(searchParams.get('code_option_page')) || initialPaginationModel.page,
    pageSize: parseInt(searchParams.get('code_option_page_size')) || initialPaginationModel.pageSize,
  }).current;

  const [paginationModel, setPaginationModel] = useState(initialPagination);
  const [filterModel, setFilterModel] = useState({ items: [] });
  const [sortModel, setSortModel] = useState([]);

  const setPagination = useCallback(
    (pagination) => {
      setPaginationModel(pagination);
      setSearchParams((prev) => {
        const newParams = new URLSearchParams(prev);
        newParams.set('code_option_page', pagination.page);
        newParams.set('code_option_page_size', pagination.pageSize);
        return newParams;
      });
    },
    [setSearchParams],
  );

  const setCurrentCodeOption = useCallback(
    (currentOptionID) => {
      setSearchParams((prev) => {
        const newParams = new URLSearchParams(prev);
        newParams.set('current_option', currentOptionID);
        return newParams;
      });
    },
    [setSearchParams],
  );

  const actions = useActions(paginationModel, filterModel, sortModel);
  const columns = useColumns(actions);
  const { codeOptions, status, totalCount } = useRows();
  const toolbar = useToolbar(actions);

  return (
    <>
      <CustomDataGrid
        columns={columns}
        initialPagination={initialPagination}
        loading={status === 'loading'}
        placeholder="Type / Name"
        rowCount={totalCount}
        rows={codeOptions}
        toolbar={toolbar}
        onFilterModelChange={setFilterModel}
        onPaginationModelChange={setPagination}
        onRowClick={(data) => setCurrentCodeOption(data.id)}
        onSortModelChange={setSortModel}
      />
    </>
  );
};

export default UsersGrid;

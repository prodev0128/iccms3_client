import { useCallback, useRef, useState } from 'react';
import { useSearchParams } from 'react-router';

import CustomDataGrid from '../../../../components/CustomDataGrid';
import { initialPaginationModel } from '../../../../globals/constants';
import { useCodes } from '../../../../redux/selectors';
import useActions from './actions';
import useColumns from './columns';
import useToolbar from './toolbar';

const CodesGrid = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const initialPagination = useRef({
    page: parseInt(searchParams.get('code_page')) || initialPaginationModel.page,
    pageSize: parseInt(searchParams.get('code_page_size')) || initialPaginationModel.pageSize,
  }).current;

  const [paginationModel, setPaginationModel] = useState(initialPagination);
  const [filterModel, setFilterModel] = useState({ items: [] });
  const [sortModel, setSortModel] = useState([]);

  const actions = useActions(paginationModel, filterModel, sortModel);
  const columns = useColumns(actions);
  const { codes, status, totalCount } = useCodes();
  console.log('codes', codes);
  const toolbar = useToolbar(actions);

  const setPagination = useCallback(
    (pagination) => {
      setPaginationModel(pagination);
      setSearchParams((prev) => {
        const newParams = new URLSearchParams(prev);
        newParams.set('code_page', pagination.page);
        newParams.set('code_page_size', pagination.pageSize);
        return newParams;
      });
    },
    [setSearchParams],
  );

  return (
    <>
      <CustomDataGrid
        columns={columns}
        initialPagination={initialPagination}
        loading={status === 'loading'}
        placeholder="Name"
        rowCount={totalCount}
        rows={codes}
        toolbar={toolbar}
        onFilterModelChange={setFilterModel}
        onPaginationModelChange={setPagination}
        onSortModelChange={setSortModel}
      />
    </>
  );
};

export default CodesGrid;

import { useCallback, useMemo, useRef, useState } from 'react';
import { useSearchParams } from 'react-router';

import CustomDataGrid from '../../../../components/CustomDataGrid';
import { initialPaginationModel } from '../../../../globals/constants';
import { useCodes, useInvoices } from '../../../../redux/selectors';
import useActions from './actions';
import useColumns from './columns';
import useToolbar from './toolbar';

const CensorGrid = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const initialPagination = useRef({
    page: parseInt(searchParams.get('page')) || initialPaginationModel.page,
    pageSize: parseInt(searchParams.get('page_size')) || initialPaginationModel.pageSize,
  }).current;

  const paginationModel = useMemo(
    () => ({
      page: parseInt(searchParams.get('page')) || initialPaginationModel.page,
      pageSize: parseInt(searchParams.get('page_size')) || initialPaginationModel.pageSize,
    }),
    [searchParams],
  );
  const [filterModel, setFilterModel] = useState({ items: [] });
  const [sortModel, setSortModel] = useState([]);

  const actions = useActions(paginationModel, filterModel, sortModel);
  const columns = useColumns(actions);
  const { invoices, status, totalCount } = useInvoices();
  const toolbar = useToolbar(actions);

  const setPagination = useCallback(
    (pagination) => {
      setSearchParams((prev) => {
        const newParams = new URLSearchParams(prev);
        newParams.set('page', pagination.page);
        newParams.set('page_size', pagination.pageSize);
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
        placeholder="User ID / Name"
        rowCount={totalCount}
        rows={invoices}
        toolbar={toolbar}
        onFilterModelChange={setFilterModel}
        onPaginationModelChange={setPagination}
        onSortModelChange={setSortModel}
      />
    </>
  );
};

export default CensorGrid;

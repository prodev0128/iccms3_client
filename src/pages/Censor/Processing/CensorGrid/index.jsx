import { useCallback, useRef, useState } from 'react';
import { useSearchParams } from 'react-router';

import CustomDataGrid from '../../../../components/CustomDataGrid';
import { useCodes, useInvoices } from '../../../../redux/selectors';
import { initialPaginationModel } from '../../../../utils/utils';
import useActions from './actions';
import useColumns from './columns';
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

  const { individualCodes } = useCodes();
  const actions = useActions(paginationModel, filterModel, sortModel, individualCodes);
  const columns = useColumns(actions, individualCodes);
  const { invoices, status, totalCount } = useInvoices();
  const toolbar = useToolbar(actions);

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

export default UsersGrid;

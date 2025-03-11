import PropTypes from 'prop-types';
import { useCallback, useMemo, useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useSearchParams } from 'react-router';

import CustomDataGrid from '../../../../components/CustomDataGrid';
import { initialPaginationModel } from '../../../../globals/constants';
import { setSelectedInvoices } from '../../../../redux/actions/invoices';
import { useInvoices } from '../../../../redux/selectors';
import Toolbar from './Toolbar';
import useActions from './useActions';
import useColumns from './useColumns';

const CensorGrid = ({ type }) => {
  const dispatch = useDispatch();
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
  const columns = useColumns(actions, type);
  const { invoices, status, totalCount } = useInvoices();

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
        placeholder="Name"
        rowCount={totalCount}
        rows={invoices}
        toolbar={<Toolbar actions={actions} />}
        onFilterModelChange={setFilterModel}
        onPaginationModelChange={setPagination}
        onSortModelChange={setSortModel}
        onRowSelectionModelChange={(data, { api }) =>
          dispatch(setSelectedInvoices(api.getSelectedRows().values().toArray()))
        }
      />
    </>
  );
};

CensorGrid.propTypes = {
  type: PropTypes.string.isRequired,
};

export default CensorGrid;

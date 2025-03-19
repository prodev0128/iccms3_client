import PropTypes from 'prop-types';
import { useCallback, useMemo, useRef, useState } from 'react';
import { useSearchParams } from 'react-router';

import CustomDataGrid from '../../../../components/CustomDataGrid';
import { initialPaginationModel } from '../../../../globals/constants';
import { useInvoices } from '../../../../redux/selectors';
import Toolbar from './Toolbar';
import useCensorActions from './useCensorActions';
import useColumns from './useColumns';
import useInvoiceActions from './useInvoiceActions';

const CensorGrid = ({ type }) => {
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

  const actions = useInvoiceActions(paginationModel, filterModel, sortModel);
  const censorActions = useCensorActions();
  const columns = useColumns(actions, censorActions, type);
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
        onRowSelectionModelChange={(data, { api }) => actions.selectInvoices(api.getSelectedRows().values().toArray())}
        onSortModelChange={setSortModel}
      />
    </>
  );
};

CensorGrid.propTypes = {
  type: PropTypes.string.isRequired,
};

export default CensorGrid;

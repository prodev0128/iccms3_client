import PropTypes from 'prop-types';
import { useEffect } from 'react';

import CustomDataGrid from '../../../../components/CustomDataGrid';
import { initialPaginationModel } from '../../../../globals/constants';
import { useInvoices } from '../../../../redux/selectors';
import Toolbar from './Toolbar';
import useActions from './useActions';
import useColumns from './useColumns';

const InvoiceGrid = ({ type }) => {
  const columns = useColumns(type);
  const { fetchDepUsers, fetchIndividualCodes, fetchInvoices, setSearchModel, setSelectedInvoices } = useActions();
  const { invoices, status, totalCount } = useInvoices();

  useEffect(() => fetchInvoices(), [fetchInvoices]);
  useEffect(() => fetchDepUsers(), [fetchDepUsers]);
  useEffect(() => fetchIndividualCodes(), [fetchIndividualCodes]);

  return (
    <>
      <CustomDataGrid
        columns={columns}
        initialPagination={initialPaginationModel}
        loading={status === 'loading'}
        placeholder="Name"
        rowCount={totalCount}
        rows={invoices}
        toolbar={<Toolbar />}
        onFilterModelChange={(filterModel) => setSearchModel({ filterModel })}
        onPaginationModelChange={(paginationModel) => setSearchModel({ paginationModel })}
        onRowSelectionModelChange={(data, { api }) => setSelectedInvoices(api.getSelectedRows().values().toArray())}
        onSortModelChange={(sortModel) => setSearchModel({ sortModel })}
      />
    </>
  );
};

InvoiceGrid.propTypes = {
  type: PropTypes.string.isRequired,
};

export default InvoiceGrid;

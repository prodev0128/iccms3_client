import { DataGridPro } from '@mui/x-data-grid-pro';
import PropTypes from 'prop-types';
import { useMemo, useState } from 'react';

import QuickSearchToolbar from '../../components/DataGrid/QuickSearchToolbar';
import { initialPaginationModel, pageSizes } from '../../utils/utils';

const DataGrid = ({ columns, ...props }) => {
  const [selectedRows, setSelectedRows] = useState([]);

  const newColumns = useMemo(
    () => [
      {
        editable: false,
        field: 'no',
        filterable: false,
        headerName: 'No',
        renderCell: (params) => {
          const pageSize = params.api.state.pagination.paginationModel.pageSize; // Get page size
          const currentPage = params.api.state.pagination.paginationModel.page; // Get current page
          const sortedRowIds = params.api.getSortedRowIds(); // Get all sorted row IDs
          const rowIndex = sortedRowIds.indexOf(params.id); // Get index of the current row
          return currentPage * pageSize + rowIndex + 1; // Adjusted to start from 1
        },
        sortable: false,
        width: 50,
      },
      ...columns,
    ],
    [columns],
  );

  return (
    <DataGridPro
      checkboxSelection
      pagination
      columns={newColumns}
      filterMode="server"
      pageSizeOptions={pageSizes}
      paginationMode="server"
      selectionModel={selectedRows}
      slots={{ toolbar: QuickSearchToolbar }}
      sortingMode="server"
      initialState={{
        pagination: {
          paginationModel: initialPaginationModel,
        },
        pinnedColumns: { left: ['no'] },
      }}
      slotProps={{
        loadingOverlay: {
          noRowsVariant: 'skeleton',
          variant: 'circular-progress',
        },
        toolbar: {
          showQuickFilter: true,
        },
      }}
      onRowClick={(params) => setSelectedRows([params.id])}
      onRowSelectionModelChange={(newSelection) => setSelectedRows(newSelection)}
      {...props}
    />
  );
};

DataGrid.propTypes = {
  columns: PropTypes.array.isRequired,
};

export default DataGrid;

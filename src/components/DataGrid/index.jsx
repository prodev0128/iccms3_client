import { DataGridPro, useGridApiRef } from '@mui/x-data-grid-pro';
import { LicenseInfo } from '@mui/x-license';
import PropTypes from 'prop-types';
import { useMemo } from 'react';

import { initialPaginationModel, pageSizes } from '../../utils/utils';
import GridCustomToolbar from './GridCustomToolbar';

LicenseInfo.setLicenseKey(
  'e0d9bb8070ce0054c9d9ecb6e82cb58fTz0wLEU9MzI0NzIxNDQwMDAwMDAsUz1wcmVtaXVtLExNPXBlcnBldHVhbCxLVj0y',
);

const DataGrid = ({ columns, toolbar, ...props }) => {
  const apiRef = useGridApiRef();

  const newColumns = useMemo(
    () => [
      {
        field: 'no',
        headerName: 'No',
        width: 50,
        filterable: false,
        editable: false,
        sortable: false,
        renderCell: (params) => {
          const pageSize = params.api.state.pagination.paginationModel.pageSize; // Get page size
          const currentPage = params.api.state.pagination.paginationModel.page; // Get current page
          const sortedRowIds = params.api.getSortedRowIds(); // Get all sorted row IDs
          const rowIndex = sortedRowIds.indexOf(params.id); // Get index of the current row
          return currentPage * pageSize + rowIndex + 1; // Adjusted to start from 1
        },
      },
      ...columns,
    ],
    [columns],
  );

  return (
    <>
      <DataGridPro
        checkboxSelection
        pagination
        apiRef={apiRef}
        columns={newColumns}
        filterMode="server"
        pageSizeOptions={pageSizes}
        paginationMode="server"
        slots={{ toolbar: () => <GridCustomToolbar toolbar={toolbar} /> }}
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
        }}
        {...props}
        disableRowSelectionOnClick={true}
        onRowClick={(params) => apiRef.current.setRowSelectionModel([params.id])}
      />
    </>
  );
};

DataGrid.propTypes = {
  columns: PropTypes.array.isRequired,
  toolbar: PropTypes.element.isRequired,
};

export default DataGrid;

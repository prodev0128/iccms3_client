import { DataGridPro, useGridApiRef } from '@mui/x-data-grid-pro';
import { LicenseInfo } from '@mui/x-license';
import PropTypes from 'prop-types';
import { useMemo } from 'react';

import { pageSizes } from '../../utils/utils';
import GridCustomToolbar from './GridCustomToolbar';

LicenseInfo.setLicenseKey(
  'e0d9bb8070ce0054c9d9ecb6e82cb58fTz0wLEU9MzI0NzIxNDQwMDAwMDAsUz1wcmVtaXVtLExNPXBlcnBldHVhbCxLVj0y',
);

const CustomDataGrid = ({ columns, initialPagination, onRowClick, placeholder, toolbar, ...props }) => {
  const apiRef = useGridApiRef();

  console.log('This is CustomDataGrid');

  const newColumns = useMemo(
    () => [
      {
        field: 'no',
        headerName: 'No',
        width: 50,
        filterable: false,
        editable: false,
        sortable: false,
        renderCell: ({ api, id }) => {
          const pageSize = api.state.pagination.paginationModel.pageSize;
          const currentPage = api.state.pagination.paginationModel.page;
          const sortedRowIds = api.getSortedRowIds();
          const rowIndex = sortedRowIds.indexOf(id);
          return currentPage * pageSize + rowIndex + 1;
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
        disableRowSelectionOnClick={true}
        filterMode="server"
        pageSizeOptions={pageSizes}
        paginationMode="server"
        slots={{ toolbar: () => <GridCustomToolbar placeholder={placeholder} toolbar={toolbar} /> }}
        sortingMode="server"
        initialState={{
          pagination: { paginationModel: initialPagination },
          pinnedColumns: { left: ['no'] },
        }}
        slotProps={{
          loadingOverlay: {
            noRowsVariant: 'skeleton',
            variant: 'circular-progress',
          },
        }}
        onRowClick={(params) => {
          apiRef.current.setRowSelectionModel([params.id]);
          onRowClick && onRowClick(params);
        }}
        {...props}
      />
    </>
  );
};

CustomDataGrid.propTypes = {
  columns: PropTypes.array.isRequired,
  initialPagination: PropTypes.object.isRequired,
  onRowClick: PropTypes.func,
  placeholder: PropTypes.string.isRequired,
  toolbar: PropTypes.element.isRequired,
};

export default CustomDataGrid;

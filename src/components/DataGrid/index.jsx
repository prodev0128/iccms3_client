import { DataGridPro } from '@mui/x-data-grid-pro';
import { useState } from 'react';

import QuickSearchToolbar from '../../components/DataGrid/QuickSearchToolbar';
import { initialPaginationModel, pageSizes } from '../../utils/utils';

const DataGrid = ({ ...props }) => {
  const [selectedRows, setSelectedRows] = useState([]);
  return (
    <>
      <DataGridPro
        checkboxSelection
        pagination
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
    </>
  );
};

export default DataGrid;

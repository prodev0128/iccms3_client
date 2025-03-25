import { Box } from '@mui/material';
import { useEffect } from 'react';

import CustomDataGrid from '../../../../components/CustomDataGrid';
import { useFiles } from '../../../../redux/selectors';
import Toolbar from './Toolbar';
import useActions from './useActions';
import useColumns from './useColumns';

const FilesGrid = () => {
  const columns = useColumns();
  const { fetchFiles, setSelectedFiles } = useActions();
  const { files, status, totalCount } = useFiles();

  useEffect(() => fetchFiles(), [fetchFiles]);

  return (
    <Box sx={{ height: 600, p: 1, width: '100%' }}>
      <CustomDataGrid
        checkboxSelection={false}
        columns={columns}
        loading={status === 'loading'}
        placeholder="Name"
        rowCount={totalCount}
        rows={files}
        toolbar={<Toolbar />}
        onRowSelectionModelChange={(data, { api }) => setSelectedFiles(api.getSelectedRows().values().toArray())}
      />
    </Box>
  );
};

export default FilesGrid;

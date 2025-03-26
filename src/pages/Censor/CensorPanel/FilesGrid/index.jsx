import { Box } from '@mui/material';
import PropTypes from 'prop-types';

import CustomDataGrid from '../../../../components/CustomDataGrid';
import { useFiles } from '../../../../redux/selectors';
import Toolbar from './Toolbar';
import useActions from './useActions';
import useColumns from './useColumns';

const FilesGrid = ({ fetchFiles }) => {
  const columns = useColumns();
  const { setSelectedFiles } = useActions();
  const { files, status, totalCount } = useFiles();

  return (
    <Box sx={{ height: 700, p: 1, width: '100%' }}>
      <CustomDataGrid
        checkboxSelection={false}
        columns={columns}
        loading={status === 'loading'}
        placeholder="Name"
        rowCount={totalCount}
        rows={files}
        toolbar={<Toolbar fetchFiles={fetchFiles} />}
        onRowSelectionModelChange={(data, { api }) => setSelectedFiles(api.getSelectedRows().values().toArray())}
      />
    </Box>
  );
};

FilesGrid.propTypes = {
  fetchFiles: PropTypes.func.isRequired,
};

export default FilesGrid;

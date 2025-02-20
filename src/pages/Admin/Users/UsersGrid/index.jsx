import { useState } from 'react';

import DataGrid from '../../../../components/DataGrid';
import { initialPaginationModel } from '../../../../utils/utils';
import useColumns from './columns';
import useRows from './rows';

const UsersGrid = () => {
  const [paginationModel, setPaginationModel] = useState(initialPaginationModel);
  const [filterModel, setFilterModel] = useState({ items: [] });
  const [sortModel, setSortModel] = useState([]);

  const { rows, status, totalCount } = useRows(paginationModel, filterModel, sortModel);
  const columns = useColumns();

  return (
    <>
      <DataGrid
        columns={columns}
        loading={status === 'loading'}
        rowCount={totalCount}
        rows={rows}
        onFilterModelChange={setFilterModel}
        onPaginationModelChange={setPaginationModel}
        onSortModelChange={setSortModel}
      />
    </>
  );
};

export default UsersGrid;

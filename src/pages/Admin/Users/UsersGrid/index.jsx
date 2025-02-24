import { useState } from 'react';

import CustomDataGrid from '../../../../components/CustomDataGrid';
import { initialPaginationModel } from '../../../../utils/utils';
import useActions from './actions';
import useColumns from './columns';
import useRows from './rows';
import useToolbar from './toolbar';

const UsersGrid = () => {
  const [paginationModel, setPaginationModel] = useState(initialPaginationModel);
  const [filterModel, setFilterModel] = useState({ items: [] });
  const [sortModel, setSortModel] = useState([]);

  const actions = useActions(paginationModel, filterModel, sortModel);
  const columns = useColumns(actions);
  const { status, totalCount, users } = useRows();
  const toolbar = useToolbar(actions);

  return (
    <>
      <CustomDataGrid
        columns={columns}
        loading={status === 'loading'}
        placeholder="User ID/Name"
        rowCount={totalCount}
        rows={users}
        toolbar={toolbar}
        onFilterModelChange={setFilterModel}
        onPaginationModelChange={setPaginationModel}
        onSortModelChange={setSortModel}
      />
    </>
  );
};

export default UsersGrid;

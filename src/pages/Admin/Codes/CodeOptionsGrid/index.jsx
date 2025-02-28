import { useCallback, useRef, useState } from 'react';
import { useSearchParams } from 'react-router';

import CustomDataGrid from '../../../../components/CustomDataGrid';
import { initialPaginationModel } from '../../../../globals/constants';
import { useCodeOptions } from '../../../../redux/selectors';
import useActions from './actions';
import useColumns from './columns';
import useToolbar from './toolbar';

const CodeOptionsGrid = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const initialPagination = useRef({
    page: parseInt(searchParams.get('code_option_page')) || initialPaginationModel.page,
    pageSize: parseInt(searchParams.get('code_option_page_size')) || initialPaginationModel.pageSize,
  }).current;

  const [paginationModel, setPaginationModel] = useState(initialPagination);
  const [filterModel, setFilterModel] = useState({ items: [] });
  const [sortModel, setSortModel] = useState([]);

  const actions = useActions(paginationModel, filterModel, sortModel);
  const columns = useColumns(actions);
  const { codeOptions, status, totalCount } = useCodeOptions();
  const toolbar = useToolbar(actions);

  const setPagination = useCallback(
    (pagination) => {
      setPaginationModel(pagination);
      setSearchParams((prev) => {
        const newParams = new URLSearchParams(prev);
        newParams.set('code_option_page', pagination.page);
        newParams.set('code_option_page_size', pagination.pageSize);
        return newParams;
      });
    },
    [setSearchParams],
  );

  const setCurrentCodeOption = useCallback(
    (currentOption) => {
      actions.setCurrentCodeOption(currentOption);
      setSearchParams((prev) => {
        const newParams = new URLSearchParams(prev);
        newParams.set('current_option', currentOption.id);
        return newParams;
      });
    },
    [setSearchParams, actions],
  );

  return (
    <>
      <CustomDataGrid
        columns={columns}
        initialPagination={initialPagination}
        loading={status === 'loading'}
        placeholder="Type / Name"
        rowCount={totalCount}
        rows={codeOptions}
        toolbar={toolbar}
        onFilterModelChange={setFilterModel}
        onPaginationModelChange={setPagination}
        onRowClick={(data) => setCurrentCodeOption(data.row)}
        onSortModelChange={setSortModel}
      />
    </>
  );
};

export default CodeOptionsGrid;

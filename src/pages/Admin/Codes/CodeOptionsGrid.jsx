import PropTypes from 'prop-types';
import { useCallback, useEffect, useMemo, useState } from 'react';
import { useDispatch } from 'react-redux';

import DataGrid from '../../../components/DataGrid';
import useDebounceCallback from '../../../hooks/useDebounceCallback';
import { fetchCodeOptions } from '../../../redux/actions/codeOptions';
import { useCodeOptions } from '../../../redux/selectors';
import { debounceTime, initialPaginationModel } from '../../../utils/utils';

const CodeOptionsGrid = ({ setCurrentCodeOption }) => {
  const dispatch = useDispatch();
  const { codeOptions, status, totalCount } = useCodeOptions();
  const [paginationModel, setPaginationModel] = useState(initialPaginationModel);
  const [filterModel, setFilterModel] = useState({ items: [] });
  const [sortModel, setSortModel] = useState([]);

  const debouncedFetchCodeOptions = useDebounceCallback(
    useCallback(() => {
      dispatch(
        fetchCodeOptions({
          ...paginationModel,
          filterModel: JSON.stringify(filterModel),
          sortModel: JSON.stringify(sortModel),
        }),
      );
    }, [dispatch, paginationModel, filterModel, sortModel]),
    debounceTime,
  );

  useEffect(() => {
    debouncedFetchCodeOptions();
  }, [debouncedFetchCodeOptions]);

  const rows = useMemo(() => codeOptions.map((codeOption) => ({ ...codeOption, id: codeOption._id })), [codeOptions]);

  const columns = [
    { field: 'no', headerName: 'No', width: 150 },
    { field: 'type', headerName: 'Type', width: 150 },
    { field: 'name', headerName: 'Name', width: 150 },
  ];

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
        onRowClick={(data) => {
          setCurrentCodeOption(data.row);
        }}
      />
    </>
  );
};

CodeOptionsGrid.propTypes = {
  setCurrentCodeOption: PropTypes.func.isRequired,
};

export default CodeOptionsGrid;

import PropTypes from 'prop-types';
import { useCallback, useEffect, useMemo, useState } from 'react';
import { useDispatch } from 'react-redux';

import CustomDataGrid from '../../../components/CustomDataGrid';
import useDebounceCallback from '../../../hooks/useDebounceCallback';
import { fetchCodes } from '../../../redux/actions/codes';
import { useCodes } from '../../../redux/selectors';
import { debounceTime, initialPaginationModel } from '../../../utils/utils';

const CodesGrid = ({ currentCodeOption }) => {
  const dispatch = useDispatch();
  const { codes, status, totalCount } = useCodes();
  const [paginationModel, setPaginationModel] = useState(initialPaginationModel);
  const [filterModel, setFilterModel] = useState({ items: [] });
  const [sortModel, setSortModel] = useState([]);

  const debouncedFetchCodes = useDebounceCallback(
    useCallback(() => {
      dispatch(
        fetchCodes(currentCodeOption.type, {
          ...paginationModel,
          filterModel: JSON.stringify(filterModel),
          sortModel: JSON.stringify(sortModel),
        }),
      );
    }, [dispatch, paginationModel, filterModel, sortModel, currentCodeOption]),
    debounceTime,
  );

  useEffect(() => {
    if (!currentCodeOption) {
      return;
    }
    debouncedFetchCodes();
  }, [debouncedFetchCodes, currentCodeOption]);

  const rows = useMemo(() => codes.map((code) => ({ ...code, id: code._id })), [codes]);

  const columns = [
    { field: 'type', headerName: 'Type', width: 150 },
    { field: 'name', headerName: 'Name', width: 150 },
    { field: 'value', headerName: 'Value', width: 150 },
  ];

  return (
    <CustomDataGrid
      columns={columns}
      loading={status === 'loading'}
      placeholder="Name/Type"
      rowCount={totalCount}
      rows={rows}
      onFilterModelChange={setFilterModel}
      onPaginationModelChange={setPaginationModel}
      onSortModelChange={setSortModel}
    />
  );
};

CodesGrid.propTypes = {
  currentCodeOption: PropTypes.object.isRequired,
};

export default CodesGrid;

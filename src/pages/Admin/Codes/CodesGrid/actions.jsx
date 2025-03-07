import { useDialogs } from '@toolpad/core';
import { useCallback, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { codeOptionTypes, debounceTime } from '../../../../globals/constants';
import useDebounceCallback from '../../../../hooks/useDebounceCallback';
import { createCode, deleteCode, fetchCodes, fetchIndividualCodes, updateCode } from '../../../../redux/actions/codes';
import { useCodeOptions } from '../../../../redux/selectors';
import CodeDialog from '../Dialogs/CodeDialog';

const useActions = (paginationModel, filterModel, sortModel) => {
  const dispatch = useDispatch();
  const dialogs = useDialogs();
  const { currentCodeOption } = useCodeOptions();

  const debouncedFetchIndividualCodes = useDebounceCallback(
    useCallback(async () => {
      if (!currentCodeOption) {
        return;
      }
      const optionArray = currentCodeOption.options
        .filter((option) =>
          [codeOptionTypes.SINGLE_SELECT.value, codeOptionTypes.MULTI_SELECT.value].includes(option?.type),
        )
        .map((option) => option?.ref);
      const optionUniqueArray = [...new Set(optionArray)].join(',');
      await dispatch(fetchIndividualCodes({ types: optionUniqueArray }));
    }, [dispatch, currentCodeOption]),
    debounceTime,
  );

  const debouncedFetchCodes = useDebounceCallback(
    useCallback(async () => {
      if (!currentCodeOption) {
        return;
      }
      await dispatch(
        fetchCodes(currentCodeOption.type, {
          ...paginationModel,
          filterModel: JSON.stringify(filterModel),
          sortModel: JSON.stringify(sortModel),
        }),
      );
    }, [dispatch, currentCodeOption, paginationModel, filterModel, sortModel]),
    debounceTime,
  );

  const handleCreateCode = useCallback(async () => {
    const createdCode = await dialogs.open(CodeDialog, {
      type: 'Create',
      option: currentCodeOption,
    });
    if (!createdCode) {
      return;
    }
    await dispatch(createCode({ type: currentCodeOption.type, ...createdCode }));
  }, [dispatch, dialogs, currentCodeOption]);

  const handleUpdateCode = useCallback(
    async (data) => {
      const updatedCode = await dialogs.open(CodeDialog, {
        type: 'Edit',
        option: currentCodeOption,
        data,
      });
      if (!updatedCode) {
        return;
      }
      await dispatch(updateCode(data.id, updatedCode));
    },
    [dispatch, dialogs, currentCodeOption],
  );

  const handleDeleteCode = useCallback(
    async (data) => {
      const confirm = await dialogs.confirm('Are you sure you want to delete this code?', {
        title: 'Confirm',
        cancelText: 'No',
        okText: 'Yes',
      });
      if (!confirm) {
        return;
      }
      await dispatch(deleteCode(data.id));
    },
    [dispatch, dialogs],
  );

  const handleAllowCode = useCallback(
    async (data) => {
      await dispatch(updateCode(data.id, { isActive: true }));
    },
    [dispatch],
  );

  const handleDisallowCode = useCallback(
    async (data) => {
      await dispatch(updateCode(data.id, { isActive: false }));
    },
    [dispatch],
  );

  useEffect(() => {
    debouncedFetchCodes();
  }, [debouncedFetchCodes]);

  useEffect(() => {
    debouncedFetchIndividualCodes();
  }, [debouncedFetchIndividualCodes]);

  return {
    fetchCodes: debouncedFetchCodes,
    createCode: handleCreateCode,
    updateCode: handleUpdateCode,
    deleteCode: handleDeleteCode,
    allowCode: handleAllowCode,
    disallowCode: handleDisallowCode,
    fetchIndividualCodes: debouncedFetchIndividualCodes,
  };
};

export default useActions;

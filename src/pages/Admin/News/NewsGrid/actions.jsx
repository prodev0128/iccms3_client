import { useDialogs } from '@toolpad/core';
import { useCallback, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { debounceTime } from '../../../../globals/constants';
import useDebounceCallback from '../../../../hooks/useDebounceCallback';
import { createNews, deleteNews, fetchNews, updateNews } from '../../../../redux/actions/news';
import NewsDialog from '../Dialogs/NewsDialog';

const useActions = (paginationModel, filterModel, sortModel) => {
  const dispatch = useDispatch();
  const dialogs = useDialogs();

  const debouncedFetchNews = useDebounceCallback(
    useCallback(async () => {
      await dispatch(
        fetchNews({
          ...paginationModel,
          filterModel: JSON.stringify(filterModel),
          sortModel: JSON.stringify(sortModel),
        }),
      );
    }, [dispatch, paginationModel, filterModel, sortModel]),
    debounceTime,
  );

  const handleCreateNews = useCallback(async () => {
    const createdNews = await dialogs.open(NewsDialog, { type: 'Create' });
    if (!createdNews) {
      return;
    }
    await dispatch(createNews(createdNews));
    await debouncedFetchNews();
  }, [dispatch, dialogs, debouncedFetchNews]);

  const handleUpdateNews = useCallback(
    async (data) => {
      const updatedNews = await dialogs.open(NewsDialog, { type: 'Edit', data });
      if (!updatedNews) {
        return;
      }
      await dispatch(updateNews(data.id, updatedNews));
    },
    [dispatch, dialogs],
  );

  const handleDeleteNews = useCallback(
    async (data) => {
      const confirm = await dialogs.confirm('Are you sure you want to delete this user?', {
        title: 'Confirm',
        cancelText: 'No',
        okText: 'Yes',
      });
      if (!confirm) {
        return;
      }
      await dispatch(deleteNews(data.id));
      await debouncedFetchNews();
    },
    [dispatch, dialogs, debouncedFetchNews],
  );

  useEffect(() => {
    debouncedFetchNews();
  }, [debouncedFetchNews]);

  return {
    fetchNews: debouncedFetchNews,
    createNews: handleCreateNews,
    updateNews: handleUpdateNews,
    deleteNews: handleDeleteNews,
  };
};

export default useActions;

import apiAction from '../apiAction';
import mediaSlice from '../slices/media';

const filesUrl = `http://localhost:${process.env.REACT_APP_MEDIA_PORT}/media`;

export const fetchMedia = (filePath) => {
  const apiInfo = {
    method: 'GET',
    url: `${filesUrl}?fileName=${filePath}`,
    responseType: 'blob',
  };

  return apiAction(mediaSlice.actions.fetchMedia, apiInfo, {
    transformResponse: (response) => ({
      blobUrl: URL.createObjectURL(response),
    }),
  });
};

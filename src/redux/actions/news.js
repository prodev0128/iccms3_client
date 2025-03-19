import apiAction from '../apiAction';
import newsSlice from '../slices/news';

const newsUrl = `http://localhost:${process.env.REACT_APP_ADMIN_PORT}/news`;

export const fetchNews = (params) => {
  const apiInfo = {
    method: 'GET',
    params,
    url: `${newsUrl}`,
  };
  return apiAction(newsSlice.actions.fetchNews, apiInfo);
};

export const createNews = (data) => {
  const apiInfo = {
    data,
    method: 'POST',
    url: `${newsUrl}`,
  };
  return apiAction(newsSlice.actions.createNews, apiInfo);
};

export const updateNews = (id, data) => {
  const apiInfo = {
    data,
    method: 'PUT',
    url: `${newsUrl}/${id}`,
  };
  return apiAction(newsSlice.actions.updateNews, apiInfo);
};

export const deleteNews = (id) => {
  const apiInfo = {
    method: 'DELETE',
    url: `${newsUrl}/${id}`,
  };
  return apiAction(newsSlice.actions.deleteNews, apiInfo);
};

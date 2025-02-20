export const delay = (time) => new Promise((res) => setTimeout(res, time));

export const pageSizes = [10, 20, 50, 100, 1000, 10000];

export const initialPaginationModel = { page: 0, pageSize: 10 };

export const debounceTime = 300;

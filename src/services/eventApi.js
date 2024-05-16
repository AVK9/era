import { api } from './api';

export const getAllEventApi = async () => {
  const { data } = await api('/event');
  console.log(data);
  return data;
};

export const getPageEventApi = async (page) => {
  const { data } = await api(`/adverts?page=${page}&limit=4`);
  console.log('getPageAdvertsApi', data);
  return data;
};

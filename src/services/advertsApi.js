import { api } from './api';

export const getAllAdvertsApi = async () => {
  const { data } = await api('/adverts');
  return data;
};

export const getPageAdvertsApi = async (page) => {
  const { data } = await api(`/adverts?page=${page}&limit=4`);
  console.log('getPageAdvertsApi', data);
  return data;
};

export const getByIDAdvertsApi = async (id) => {
  const { data } = await api(`/adverts/${id}`);
  return data;
};

export const addAdvertsApi = async (advert) => {
  const { data } = await api.post('/adverts', advert);
  return data;
};

export const delAdvertsApi = async (id) => {
  const { data } = await api.delete(`/adverts/${id}`);
  return data;
};

//PUT /adverts/:id

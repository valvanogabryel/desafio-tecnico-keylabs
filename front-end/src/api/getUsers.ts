import api from '../api/api';

export default async function getUsers() {
  const { data } = await api.get('/users');

  return data;
}

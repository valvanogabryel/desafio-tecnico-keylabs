/* eslint-disable @typescript-eslint/no-explicit-any */
import { enqueueSnackbar } from 'notistack';
import api from '../api/api';
import IUser from '../interface/IUser';

export default async function registerUser(user: IUser) {
  try {
    await api.post('/signup', user, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
  } catch (err: any) {
    enqueueSnackbar(err.response.data.error, { variant: 'error' });
  }
}

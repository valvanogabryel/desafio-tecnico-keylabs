/* eslint-disable @typescript-eslint/no-explicit-any */

import { enqueueSnackbar } from 'notistack';
import api from '../api/api';
import IUser from '../interface/IUser';

export default async function login(user: IUser) {
  try {
    const { data } = await api.post('/auth/login', user, {
      headers: {
        'Content-Type': 'application/json',
      },
    });

    return { auth: data.auth };
  } catch (err: any) {
    enqueueSnackbar(err.response.data.error, { variant: 'error' });
  }
}

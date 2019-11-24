import { axios } from '../core';

export default {  
  authMe: () => axios.get('users/authMe').catch(err => console.log('error', err.request)),
  login: data => axios.get(`users/login/${data}`).catch(err => console.log('error', err.request)),
  register: data => axios.post(`users/register`, { data } ).catch(err => console.log('error', err.request)),
};
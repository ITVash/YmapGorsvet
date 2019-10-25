import { axios } from '../core';

export default {  
  authMe: () => axios.get('users/authMe').catch(err => console.log('error', err.request)),
  login: data => axios.post('users/login', data),
};
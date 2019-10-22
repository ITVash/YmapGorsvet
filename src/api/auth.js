import { axios } from '../core';

/*const inst = axios.create({
  withCredentials: false,
  baseURL: 'http://vashsite.000webhostapp.com/api/users/',
  headers: { 
    'API-KEY': 'faeaf1caa98c4b00ebe6f09d81ccb2b5',
    //'Content-Type': 'application/json',
    //'X-Custom-Header': 'foobar',
    'X-Requested-With': 'XMLHttpRequest'
  },
  transformRequest: [ (data, headers) => {
    return data;
  }],
  transformResponse: [data => {
    return data;
  }],
  validateStatus: status => {
    return status >= 200 && status < 300;
  },
});*/
export default {  
  authMe: () => axios.get('users/authMe').catch(err => console.log('error', err.request)),
  login: data => axios.post('users/login', data),
};
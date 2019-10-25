import axios from 'axios'

//axios.defaults.baseURL = 'https://5db19792e9751d0014ccf9b0.mockapi.io/api/v1/';
axios.defaults.baseURL = 'https://vashsite.000webhostapp.com/api/';
axios.defaults.withCredentials = true;
//axios.defaults.baseURL = 'http://http://dkpservice.ho.ua/api/';
//axios.defaults.headers.common['Content-Type'] = 'application/json; charset=UTF-8';
//axios.defaults.headers.get['crossDomain'] = true;
//axios.defaults.headers.common['Accept'] = 'application/json';
//axios.defaults.headers.common['Access-Control-Allow-Headers'] = 'x-api-key';
//axios.defaults.headers.common['XMLHttpRequest'] = 'XMLHttpRequest';
//axios.defaults.headers.common['x-api-key'] = 'faeaf1caa98c4b00ebe6f09d81ccb2b5';
window.axios = axios;

export default axios;
import axios from 'axios'

axios.defaults.baseURL = 'http://vashsite.000webhostapp.com/api/';
axios.defaults.headers.common['API-KEY'] = 'faeaf1caa98c4b00ebe6f09d81ccb2b5';
window.axios = axios;

export default axios;
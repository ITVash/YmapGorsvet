import axios from 'axios';

export default {
  getAll: () => axios.get('/opora.json'),
};
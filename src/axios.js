import axios from 'axios';

const axiosClient = axios.create({
  baseURL: 'http://79.143.31.216',
  timeout: 999999,
});

export { axiosClient };

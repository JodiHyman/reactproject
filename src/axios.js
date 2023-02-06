import axios from 'axios';

const customFetch = axios.create({
  baseURL: 'https://http://3.17.216.66:4000',
});

export default customFetch;
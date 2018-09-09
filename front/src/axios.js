import axios from 'axios';
import * as qs from 'qs';

const {
  env: { API_URL = 'http://localhost:3119' },
} = process;

export default axios.create({
  baseURL: API_URL,
  paramsSerializer: params => qs.stringify(params, { indices: false }),
  validateStatus: status => status >= 200 && status < 400,
});

import axios from 'axios';

const instance = axios.create({
  baseURL: process.env.FANP_DOMAIN,
  withCredentials: true,
});

instance.defaults.headers.common['Accept'] = 'application/json';
instance.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

function handleNormalResponse(response) {
  const contentType = response.headers['content-type'];
  // Handle non-json serializable responses
  if (!(contentType && contentType.toLowerCase().includes('application/json'))) {
    throw new Error('Response not processable');
  }
  return response;
}

function handleErrorResponse(error) {
  // Any status codes that falls outside the range of 2xx cause this function to trigger
  // Do something with response error
  return Promise.reject(error);
}

instance.interceptors.response.use(handleNormalResponse, handleErrorResponse);

export default instance;

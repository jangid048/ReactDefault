import { getToken } from '../healper/healpers';
import axios from 'axios';

export const get = (url, headers, queryParams) => {
  return call('GET', url, headers, queryParams);
};

export const put = (url, data, headers, queryParams) => {
  return call('PUT', url, headers, queryParams, data);
};

export const post = (url, data, headers, queryParams) => {
  let formHeader = {};
  formHeader['Content-Type'] = 'multipart/form-data';
  const receivedHeaders = { ...headers, ...formHeader };
  return call('POST', url, receivedHeaders, queryParams, data);
};

export const remove = (url, data, headers, queryParams) => {
  return call('DELETE', url, headers, queryParams, data);
};

const apiUrl = "https://wellxai.we4php.com/api/v1"
const mediaBaseUrl = 'https://wellxai.we4php.com'
// const apiUrl = "http://192.168.1.106/wellx-ai/api/v1"
// const mediaBaseUrl = 'http://192.168.1.106/wellx-ai'
const whoopBaseUrl = 'https://api-7.whoop.com'



function checkResponse(resp) {
  if (resp === '') return {};

  return resp.data;
}

const call = async (method, url, headers, queryParams, data) => {
  const receivedHeaders = (headers === undefined) ? {} : headers;
  const authHeader = await getAuthorizationHeader();
  const requestHeaders = { ...receivedHeaders, ...authHeader };
  const options = {
    method: method,
    url: apiUrl + url,
    headers: requestHeaders,
    data: data,
    params: queryParams,
  };

  return axios(options)
    .then(resp => checkResponse(resp))
    .catch(error => {
      const response = error.response;
      const data = response.data;
      if (data && data.errors) {
        return Promise.reject(data.message);
      }
      return Promise.reject(data.message);
    });
};

const getAuthorizationHeader = async () => {
  let headers = {};

  // const token = jwtToken;
  const token = getToken()
  headers['Accept'] = 'application/json';
  if (token) {
    headers['Authorization'] = 'Bearer ' + token;
  }

  return headers;
};

// ======================Whoop==========================







export const mediaUrl = url => {
  return `${mediaBaseUrl}/public/storage/${url}`;
};

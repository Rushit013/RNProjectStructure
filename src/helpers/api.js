import axios from 'axios';
import AsyncStorage from '@react-native-community/async-storage';
import {LIVEURL, APITOKEN} from '@env';

/* switch this for testing on staging or production */
export const staging = false;

// You Can Also Use Environement Varible
export const apiRootLive = LIVEURL;
export const apiRootStaging = 'YOUR LOCAL URL';
export const apiRoot = !staging ? apiRootLive : apiRootStaging;

export const client = axios.create({
  baseURL: apiRoot,
  timeout: 60000,
  headers: {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': '*',
    'X-Custom-Header': 'foobar',
  },
});
// Add a request interceptor
client.interceptors.request.use(
  async function (config) {
    // Do something before request is sent
    var basicAuth = await AsyncStorage.getItem('userToken');
    if (basicAuth && basicAuth != null) {
      config.headers.Authorization = `Bearer ${basicAuth}`;
    } else {
    }
    return config;
  },
  function (error) {
    return Promise.reject(error);
  },
);

// Add a response interceptor
client.interceptors.response.use(
  function (response) {
    if (response.data) return response.data;
    else {
      var message = 'We had trouble connecting to the server';
      if (response.data.message) message = response.data.message;
      return Promise.reject(response);
    }
  },
  function (error) {
    return Promise.reject(error);
  },
);

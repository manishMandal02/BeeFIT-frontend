import axios from 'axios';

const backendURL = import.meta.env.VITE_BACKEND_URL as string;

const axiosConfig = () => {
  axios.defaults.baseURL = `${backendURL}/api`;

  axios.defaults.withCredentials = true;

  //intercept all response
  axios.interceptors.response.use(
    function (response) {
      return response;
    },
    function (error) {
      if (error.request.status === 401) {
        window.location.pathname = '/logout';
      }

      return Promise.reject(error);
    }
  );
};

export default axiosConfig;

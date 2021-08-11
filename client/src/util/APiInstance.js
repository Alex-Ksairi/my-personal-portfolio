import axios from 'axios';

const axiosApiInstance = axios.create();

axiosApiInstance.defaults.baseURL = 'https://alex-portfolio-2021-server.herokuapp.com/';
axiosApiInstance.defaults.headers.post['Content-Type'] = 'application/json';


export default axiosApiInstance;
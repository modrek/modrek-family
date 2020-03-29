import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://localhost:64001/'
    //baseURL:'http://modrekfamily.azurewebsites.net/'
});

// instance.defaults.headers.common['Authorization'] = 'AUTH TOKEN FROM INSTANCE';
// ,{PageIndex:1,PageSize:10 ,expression:''}
// instance.interceptors.request...

export default instance;
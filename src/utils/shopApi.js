import axios from "axios";

const shopApi = axios.create({
    baseURL: '/api/shop',
    timeout: 5000 //5 cami
});


export default api;
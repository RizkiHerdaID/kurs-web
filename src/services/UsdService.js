import axios from 'axios';

const USD_API_BASE_URL = "http://localhost:8000/usd";

class UsdService {

    getUsd(){
        return axios.get(USD_API_BASE_URL);
    }

    createUsd(usd){
        return axios.post(USD_API_BASE_URL, usd);
    }

    getUsdById(usdId){
        return axios.get(USD_API_BASE_URL + '/' + usdId);
    }

    updateUsd(usd, usdId){
        return axios.put(USD_API_BASE_URL + '/' + usdId, usd);
    }

    deleteUsd(usdId){
        return axios.delete(USD_API_BASE_URL + '/' + usdId);
    }
}

export default new UsdService()
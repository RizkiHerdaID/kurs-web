import axios from 'axios';

const ERATE_API_BASE_URL = "http://localhost:8000/erate";

class ErateService {

    getErate(){
        return axios.get(ERATE_API_BASE_URL);
    }

    createErate(erate){
        return axios.post(ERATE_API_BASE_URL, erate);
    }

    getErateById(erateId){
        return axios.get(ERATE_API_BASE_URL + '/' + erateId);
    }

    updateErate(erate, erateId){
        return axios.put(ERATE_API_BASE_URL + '/' + erateId, erate);
    }

    deleteErate(erateId){
        return axios.delete(ERATE_API_BASE_URL + '/' + erateId);
    }
}

export default new ErateService()
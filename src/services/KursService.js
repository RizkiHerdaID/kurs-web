import axios from 'axios';

const KURS_API_BASE_URL = "http://localhost:8000/kurs";

class KursService {

    getKurs(){
        return axios.get(KURS_API_BASE_URL);
    }

    createKurs(kurs){
        return axios.post(KURS_API_BASE_URL, kurs);
    }

    getKursById(kursId){
        return axios.get(KURS_API_BASE_URL + '/' + kursId);
    }

    updateKurs(kurs, kursId){
        return axios.put(KURS_API_BASE_URL + '/' + kursId, kurs);
    }

    deleteKurs(kursId){
        return axios.delete(KURS_API_BASE_URL + '/' + kursId);
    }
}

export default new KursService()
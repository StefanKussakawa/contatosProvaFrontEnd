import axios from 'axios'

const API_URL = 'http://localhost:8080'

class DataService {

    retornarTodosProdutos() {
        return axios.get(`${API_URL}/products`);
    }

}

export default new DataService()
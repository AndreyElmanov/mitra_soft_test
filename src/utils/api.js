import axios from "axios";

class Api {
    constructor() {
        this.url = "https://jsonplaceholder.typicode.com";
        this.onResponse = (res) => res.status === 200 ? Promise.resolve(res.data) : Promise.reject(`Ошибка: ${res.status}`);
      }

    getPosts = () => {
       return axios.get(`${this.url}/posts`)
        .then(this.onResponse);
    }

    getOneUser = (id) => {
        return axios.get(`${this.url}/users/${id}`)
         .then(this.onResponse);
     }

    getCommentsOfPost = (id) => {
       return axios.get(`${this.url}/posts/${id}/comments`)
        .then(this.onResponse);
    }
};

const api = new Api();

export default api;
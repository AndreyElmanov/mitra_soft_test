import axios from "axios";

const onResponse = (res) => res.status === 200 ? Promise.resolve(res.data) : Promise.reject(`Ошибка: ${res.status}`);

class Api {
    constructor() {
        this.url = "https://jsonplaceholder.typicode.com";
      }

    getPosts = () => {
       return axios.get(`${this.url}/posts`)
        .then(onResponse);
    }

    getUsers = () => {
       return axios.get(`${this.url}/users`)
        .then(onResponse);
    }

    getCommentsOfPost = (id) => {
       return axios.get(`${this.url}/posts/${id}/comments`)
        .then(onResponse);
    }
};

const api = new Api();

export default api;
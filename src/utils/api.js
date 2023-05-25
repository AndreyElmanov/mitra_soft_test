import axios from "axios";

const onResponse = (res) => res.status === 200 ? res.data : Promise.reject(`Ошибка: ${res.status}`);

class Api {
    constructor() {
        this.url = "https://jsonplaceholder.typicode.com";
      }

    getPosts = () => {
        axios.get(`${this.url}/posts`)
        .then(onResponse)
    }

    getUsers = () => {
        axios.get(`${this.url}/users`)
        .then(onResponse)
    }

    getCommentsOfPost = (id) => {
        axios.get(`${this.url}/posts/${id}/comments`)
        .then(onResponse)
    }
};

const api = new Api();

export default api;
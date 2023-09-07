import axios from "axios";

const instance = axios.create({
    baseURL: 'http://127.0.0.1:5001/clone-a8f92/us-central1/api'
    //  THE API (cloud function) URL
    // 'https://us-central1-clone-a8f92.cloudfunctions.net/api'
})

export default instance;
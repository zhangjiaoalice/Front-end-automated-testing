import axios from "axios";

export const fetchData = (fn) => {
    axios.get('http://127.0.0.1').then(res => {
        fn(res.data);
    })
}

export const promiseFun = () => {
    return axios.get('http://127.0.0.1/msg');
}

export const runCallback = (callback) => {
    callback();
}
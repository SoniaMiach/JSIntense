import { rejects } from 'assert';
import axios, { isCancel, AxiosError } from 'axios';
import { resolve } from 'path';


let asyncFunction = () => {
    return new Promise(async (resolve, reject) => {
        try {
            let response = await axios.get("https://jsonplaceholder.typicode.com/comments/1");
            resolve(response.data)
        } catch (error) {
            reject(error.message)
        }
    })
}

asyncFunction().then((comments) => console.log(comments));

let asyncFunction2 = () => {
    return new Promise(async (resolve, reject) => {
        try {
            let response2 = await axios.get("https://jsonplaceholder.typicode.com/posts/2");
            resolve(response2.data)
        } catch (error) {
            reject(error.message)
        }
    })
}

asyncFunction2().then((comments) => console.log(comments));
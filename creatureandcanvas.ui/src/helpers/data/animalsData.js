/* eslint-disable import/no-anonymous-default-export */
import axios from "axios";
import {baseUrl} from "../constants.json"

const getAllAnimals = () => new Promise((resolve,reject) => {
    axios.get(`${baseUrl}/animals`)
        .then(response => resolve(response.data))
        .catch(error => reject(error));
});

export default {getAllAnimals};
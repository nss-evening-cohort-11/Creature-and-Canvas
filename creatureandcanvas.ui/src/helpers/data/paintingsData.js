/* eslint-disable import/no-anonymous-default-export */
import axios from "axios";
import {baseUrl} from "../constants.json"

const getAllPaintings = () => new Promise((resolve,reject) => {
    axios.get(`${baseUrl}/paintings`)
        .then(response => resolve(response.data))
        .catch(error => reject(error));
});

export default {getAllPaintings};
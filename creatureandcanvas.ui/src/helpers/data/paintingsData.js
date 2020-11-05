/* eslint-disable import/no-anonymous-default-export */
import axios from "axios";
import {baseUrl} from "../constants.json"

const getAllPaintings = () => new Promise((resolve, reject) => {
    axios.get(`${baseUrl}/paintings/getLatest20Paintings`)
        .then(response => resolve(response.data))
        .catch(error => reject(error));
});

const getSinglePainting = (itemId) => new Promise((resolve, reject) => {
    axios.get(`${baseUrl}/paintings/${itemId}`)
        .then(response => resolve(response.data))
        .catch(err => reject(err));
})


export default {getAllPaintings, getSinglePainting};


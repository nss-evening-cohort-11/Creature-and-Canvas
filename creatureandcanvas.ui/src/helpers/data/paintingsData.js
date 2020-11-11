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

// const getPaintingIdByTitle = (title) => new Promise((resolve, reject) => {
//     axios.get(`${baseUrl}/paintings/GetPaintingIdByTitle(${title})`)
//         .then(response => resolve(response.data))
//         .catch(err => reject(err))
// })

const getPaintingsByKeyword = (keyword) => new Promise((resolve,reject) => {
    axios.get(`${baseUrl}/paintings/search/${keyword}`)
        .then(response => resolve(response.data))
        .catch(error => reject(error));
});

const getAllAnimalPaintingsById = (animalId) => new Promise((resolve, reject) => {
    axios.get(`${baseUrl}/paintings/animalPainting/${animalId}`)
        .then(response => resolve(response.data))
        .catch(error => reject(error));
});

export default {getAllPaintings, getSinglePainting, getPaintingsByKeyword, getAllAnimalPaintingsById};


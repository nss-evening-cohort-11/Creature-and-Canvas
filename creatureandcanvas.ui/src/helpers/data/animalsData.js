/* eslint-disable import/no-anonymous-default-export */
import axios from "axios";
import {baseUrl} from "../constants.json"

const getAllAnimals = () => new Promise((resolve,reject) => {
    axios.get(`${baseUrl}/animals`)
        .then(response => resolve(response.data))
        .catch(error => reject(error));
});

const getSingleAnimal = (animalId) => new Promise((resolve, reject) => {
    axios.get(`${baseUrl}/animals/${animalId}`)
        .then(response => resolve(response.data))
        .catch(err => reject(err));
})

const getAnimalAndTopThreePaintings =() => new Promise((resolve, reject) => {
    axios.get(`${baseUrl}/animals/topThree`)
        .then(response => resolve(response.data))
        .catch(error => reject(error));
});

export default { getAllAnimals, getSingleAnimal, getAnimalAndTopThreePaintings };
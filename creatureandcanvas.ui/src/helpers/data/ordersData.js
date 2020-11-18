import axios from "axios";
import {baseUrl} from "../constants.json"

const getAllOrders = () => new Promise((resolve,reject) => {
    axios.get(`${baseUrl}/orders`)
        .then(response => resolve(response.data))
        .catch(error => reject(error));
});

const getOrdersByCustomerId = (customerId) => new Promise((resolve,reject) => {
    axios.get(`${baseUrl}/orders/history/${customerId}`)
        .then(response => console.error("order resp", response.data))
            // resolve(response.data))
        .catch(error => reject(error));
});

export default {getAllOrders, getOrdersByCustomerId}; 
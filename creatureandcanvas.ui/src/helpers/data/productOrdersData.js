/* eslint-disable import/no-anonymous-default-export */
import axios from "axios";
import {baseUrl} from "../constants.json";

const getOrderDetailsByCustomerId = (customerId) => new Promise((resolve,reject) => {
  axios.get(`${baseUrl}/productOrders/details/${customerId}`)
      .then(response => resolve(response.data))
      .catch(error => reject(error));
});

export default { getOrderDetailsByCustomerId };
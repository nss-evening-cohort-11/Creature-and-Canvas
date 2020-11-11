import firebase from 'firebase';
import axios from 'axios';
import {baseUrl} from '../constants.json';

import customersData from './customersData.js';

axios.interceptors.request.use(function (request) {
  const token = sessionStorage.getItem('token');

  if (token != null) {
      request.headers.Authorization = `Bearer ${token}`;
  }

  return request;
}, function (err) {
  return Promise.reject(err);
});

const checkExistingUser = (uid) => {
    if (customersData.checkCustomerUid(uid)) {
        firebase.auth.signInWithPopup();
    } else {
        console.log('You are not registered');
    }

}

const loginUser = (user) => {
  return firebase.auth().signInWithPopup
    .then(cred => {
    cred.user.getIdToken()
      .then(token => sessionStorage.setItem('token',token));
  });
};

const logoutUser = () => {
  return firebase.auth().signOut();
};

const getUid = () => {
  return firebase.auth().currentUser.uid;
};

export default {getUid, loginUser, logoutUser};
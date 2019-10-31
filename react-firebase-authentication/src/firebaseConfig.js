//vai precisar pro tutorial de mostrar dados
import firebase from 'firebase';

const config = {
    apiKey: "AIzaSyADSABmvGyKabBgONZH9UyO5Iuz9ZWJzRM",
    authDomain: "tcc-2019-8f616.firebaseapp.com",
    databaseURL: "https://tcc-2019-8f616.firebaseio.com",
    projectId: "tcc-2019-8f616",
    storageBucket: "tcc-2019-8f616.appspot.com",
    messagingSenderId: "605243143793",
    appId: "1:605243143793:web:e4732a1ca998b4d9",
    measurementId: "G-D08RGT3NBF"
  };/*
  const config = {
    apiKey: "AIzaSyADMZYdSPRFBMSBpuQpIUXAd5falXrE4Uk",
    authDomain: "projetos-eb013.firebaseapp.com",
    databaseURL: "https://projetos-eb013.firebaseio.com",
    projectId: "projetos-eb013",
    storageBucket: "projetos-eb013.appspot.com",
    messagingSenderId: "1060952161263",
    appId: "1:1060952161263:web:c92bd34814cb68ea65941a"
  };*/
  //vai precisar pro tutorial de mostrar dados
  firebase.initializeApp(config);
  export default  firebase;

//export default config;
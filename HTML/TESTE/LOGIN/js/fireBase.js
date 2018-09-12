var app_fireBase = {};
(function () {

    // Initialize Firebase
    var config = {
        apiKey: "AIzaSyCfAk5tYFWfpsvZi6UDIFLpo2sELVpT76k",
        authDomain: "projeto-teste-ded26.firebaseapp.com",
        databaseURL: "https://projeto-teste-ded26.firebaseio.com",
        projectId: "projeto-teste-ded26",
        storageBucket: "projeto-teste-ded26.appspot.com",
        messagingSenderId: "577466942401"
    };
    firebase.initializeApp(config);

    app_fireBase = firebase;

})()
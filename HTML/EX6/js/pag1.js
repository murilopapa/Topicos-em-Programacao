function iniciajogo() {
    if (document.form1.dificuldade.value === "default") {
        alert("Selecione a dificuldade!");
    }
    else {
        window.location = document.form1.dificuldade.value + ".html";
        //redirecionar pra pag da dificuldade
    }
}

var config = {
    apiKey: "AIzaSyB9H9S94tRSMT8ll21eCJD-DNLTndbMcFc",
    authDomain: "ex6-tp.firebaseapp.com",
    databaseURL: "https://ex6-tp.firebaseio.com",
    projectId: "ex6-tp",
    storageBucket: "ex6-tp.appspot.com",
    messagingSenderId: "770797914160"
};
firebase.initializeApp(config);
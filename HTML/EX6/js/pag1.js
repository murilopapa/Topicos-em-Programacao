function iniciajogo() {
    if (document.form1.dificuldade.value === "default") {
        alert("Selecione a dificuldade!");
    }
    else {
        window.location = document.form1.dificuldade.value + ".html";
        //redirecionar pra pag da dificuldade
    }
}
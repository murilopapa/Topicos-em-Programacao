function iniciajogo(){
    if(document.form1.dificuldade.value === "default"){
        alert("Selecione a dificuldade!");
    }
    else{
        if(document.form1.dificuldade.value === "facil"){
            window.location = "facil.html";
        }
        else{
            if(document.form1.dificuldade.value === "medio"){
                window.location = "medio.html";
            }
            else{
                window.location = "dificil.html";
            }
        }
        
        //redirecionar pra pag da dificuldade
    }
    
}
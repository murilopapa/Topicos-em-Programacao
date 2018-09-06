function limpa_formulario(){
    var opcao = confirm("Deseja mesmo limpar o formulário?");
    if(opcao === true){
        document.form1.reset();
    }
}

function verifica_formulario(){
    var verificacao = true;
    var nome = document.form1.nome.value;
    if(nome.length <= 3){
        alert("Nome deve ter mais do que 3 caracteres");
        document.form1.nome.value = null;
        verificacao = false;
    }
    else{
        document.form1.nome.value = nome.toUpperCase();
    }
    var estado_civil = document.form1.estado_civil.value;
    if(estado_civil === "default"){
        document.getElementById("estado_civil_erro").innerHTML = "Selecione um estado civil valido!";
        verificacao = false;
    }
    else{
        document.getElementById("estado_civil_erro").innerHTML = "";
    }
    var objetivo = document.form1.objetivo.value;
    document.form1.objetivo.value = objetivo.toLowerCase();

    if(document.form1.telefone.value === "" && document.form1.email.value === ""){
        alert("Favor inserir telefone ou email");
        verificacao = false;
    }

    var nivel_ingles = document.form1.ingles.value;
    var nivel_espanhol = document.form1.espanhol.value;

    if(nivel_espanhol === "default" || nivel_ingles === "default"){
        alert("Favor selecionar o nível de Ingles/Espanhol");
        verificacao = false;
    }
    var linguagem_escolhida = document.getElementsByName("linguagem");
    var count_checkbox = 0;
    for(var i=0; i<linguagem_escolhida.length;i++){

        if(linguagem_escolhida[i].checked)
        {
            count_checkbox++;
        }
    }
    if(verificacao){
        if(count_checkbox === 0){
            var opcao = confirm("Tem certeza que deseja enviar o formulário sem nenhuma linguagem de programação escolhida?");
            if(opcao){
                alert("FORMULARIO ENVIADO");
            }
            else{
                alert("FORMULARIO NAO ENVIADO");
            }
        }
        else{
            alert("FORMULARIO ENVIADO");
        }
        
    }
    else{
        alert("FORMULARIO NAO ENVIADO");
    }
    

}


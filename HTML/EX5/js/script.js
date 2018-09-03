function limpa_formulario(){
    var opcao = confirm("Deseja mesmo limpar o formulário?");
    if(opcao === true){
        document.form1.reset();
    }
}

function verifica_formulario(){
    var nome = document.form1.nome.value;
    if(nome.length <= 3){
        alert("Nome deve ser maior do que 3 caracteres");
        document.form1.nome.value = null;
    }
    else{
        document.form1.nome.value = nome.toUpperCase();
    }
}
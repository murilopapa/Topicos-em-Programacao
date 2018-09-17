function sorteio(){
    alert("Primeiro sorteio feito");
    document.form1.botao1.value = Math.floor((Math.random() * 3));
    document.form1.botao2.value = Math.floor((Math.random() * 3));
    document.form1.botao3.value = Math.floor((Math.random() * 3));
    document.form1.botao4.value = Math.floor((Math.random() * 3));
}
function submissao(num_botao){
    document.form1.botao1.value = "teste";
    alert("vc clicou no botao " + num_botao);
}
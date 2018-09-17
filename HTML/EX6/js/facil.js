function sorteio(database){

    var sorteado = Math.floor((Math.random() * 5 ));
    document.form1.botao1.value = database[Math.floor((Math.random() * 5 ))].nome;
    document.form1.botao2.value = database[Math.floor((Math.random() * 5 ))].nome;
    document.form1.botao3.value = database[Math.floor((Math.random() * 5 ))].nome;
    document.form1.botao4.value = database[Math.floor((Math.random() * 5 ))].nome;
    alert(database[sorteado].nome);
    document.getElementById("imagem").innerHTML = "<img width="+"10%"+" height="+"10%"+" src="+ database[sorteado].src +">";

}
function submissao(num_botao){
    document.form1.botao1.value = "teste";
    alert("vc clicou no botao " + num_botao);
}
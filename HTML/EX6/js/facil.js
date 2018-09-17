var database;
var vetor_sorteado;
var ponteiro_vetor = 0;

function sorteio(database_recebida) {
    vetor_sorteado = new Array(database_recebida.length);
    database = database_recebida;
    var booleano;
    var num_sorteado;

    for (var i = 0; i < database.length; i++) {
        booleano = false;
        num_sorteado = Math.floor((Math.random() * database.length));
        for (var j = 0; j <= i; j++) {
            if (vetor_sorteado[j] === num_sorteado) {
                booleano = true;
            }
        }
        if (booleano) {
            num_sorteado = Math.floor((Math.random() * database.length));
            i--;
        }
        else {
            vetor_sorteado[i] = num_sorteado;
        }
    }
    console.log("Vetor sorteado:" + vetor_sorteado[0] + ", " + vetor_sorteado[1] + ", " + vetor_sorteado[2] + ", " + vetor_sorteado[3] + ", " + vetor_sorteado[4]);

    jogo_inciado();
}

function jogo_inciado() {

    document.getElementById("imagem").innerHTML = "<img width=" + "10%" + " height=" + "10%" + " src=" + database[vetor_sorteado[ponteiro_vetor]].src + ">";

    var vetor_botoes = new Array(4);
    var booleano;
    var num_sorteado;
    var posicao_resposta_certa = Math.floor((Math.random() * 4));
    vetor_botoes[posicao_resposta_certa] = vetor_sorteado[ponteiro_vetor];

    for (var i = 0; i < vetor_botoes.length; i++) {
        if (i != posicao_resposta_certa) {
            booleano = false;
            num_sorteado = Math.floor((Math.random() * vetor_botoes.length));
            for (var j = 0; j < vetor_botoes.length; j++) {
                if (vetor_botoes[j] === num_sorteado) {
                    booleano = true;
                }
            }
            if (booleano) {
                num_sorteado = Math.floor((Math.random() * database.length));
                i--;
            }
            else {
                vetor_botoes[i] = num_sorteado;
            }
        }

    }
    console.log("Botoes sorteados:" + vetor_botoes[0] + ", " + vetor_botoes[1] + ", " + vetor_botoes[2] + ", " + vetor_botoes[3]);

    document.form1.botao1.value = database[vetor_botoes[0]].nome;
    document.form1.botao2.value = database[vetor_botoes[1]].nome;
    document.form1.botao3.value = database[vetor_botoes[2]].nome;
    document.form1.botao4.value = database[vetor_botoes[3]].nome;
}

function submissao(num_botao) {
    if (ponteiro_vetor < database.length) {

        if (document.getElementById("botao" + num_botao).value === database[vetor_sorteado[ponteiro_vetor]].nome) {
            alert("vc acertou");
            ponteiro_vetor++;
            jogo_inciado();
        }
        else {
            alert("vc errou");
        }
    }
    else {

    }
}
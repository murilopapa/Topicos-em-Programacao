var database;       //vetor database que estava no JSON
var vetor_sorteado; //vetor contendo os indices sorteados para serem pegos no vetor database
var ponteiro_vetor = 0; //qual elemento do vetor_sorteado eu estou exibindo na tela
var pontuacao = 0;      //pontuação inicial, como é o primeiro nivel, começa com 0, pois nao tem como ter vindo de outra dificuldade
var vidas = 3;  //quantidade de vidas inicial, como é o primeiro nive, começa com 3, pois nao tem como ter vindo de outra dificuldade
var valor_pontuacao = 50;   //valor de cada acerto
var quantidade_de_botoes = 4;   //quantidade de botoes, acho que nao vira mudar, pq nos logs eu to fazendo manualmente a quantidade

function sorteio(database_recebida) {
    vetor_sorteado = new Array(database_recebida.length);   //crio o array de numeros, do tamanho do database
    database = database_recebida;     //seto o database global, com o recebido pelo HTML
    var booleano;
    var num_sorteado;

    for (var i = 0; i < database.length; i++) {     //loop para preencher o vetor_sorteado
        booleano = false;
        num_sorteado = Math.floor((Math.random() * database.length));   //gero um num aleatorio, do tamanho do database
        for (var j = 0; j <= i; j++) {      //vejo se esse numero ja esta no vetor_sorteado, pq n pode ter fotos repetidas
            if (vetor_sorteado[j] === num_sorteado) {
                booleano = true;
            }
        }
        if (booleano) {     //se eu ja tenho, gero um novo numero e faço o loop de novo
            num_sorteado = Math.floor((Math.random() * database.length));
            i--;
        }
        else {      //se nao tenho, seto o numero sorteado no vetor_sorteado
            vetor_sorteado[i] = num_sorteado;
        }
    }
    //prints para monitoramento
    console.log("Vidas: " + vidas + "   Pontuacao: " + pontuacao);
    console.log("Vetor sorteado:" + vetor_sorteado[0] + ", " + vetor_sorteado[1] + ", " + vetor_sorteado[2] + ", " + vetor_sorteado[3] + ", " + vetor_sorteado[4]);
    jogo_inciado();
}

function jogo_inciado() { //funcao para exibir na tela os dados daquele nivel/fase
    //deixa os botoes clicaveis
    document.getElementById("botao1").disabled = false;
    document.getElementById("botao2").disabled = false;
    document.getElementById("botao3").disabled = false;
    document.getElementById("botao4").disabled = false;
    

    document.getElementById("botao1").style.backgroundColor = "rgb(241,241,241)";
    document.getElementById("botao2").style.backgroundColor = "rgb(241,241,241)";
    document.getElementById("botao3").style.backgroundColor = "rgb(241,241,241)";
    document.getElementById("botao4").style.backgroundColor = "rgb(241,241,241)";

    //escrevo no HTML o codigo para exibir a foto sorteada
    document.getElementById("imagem").src = database[vetor_sorteado[ponteiro_vetor]].src;

    //basicamente a mesma coisa da função acima, que gerava o vetor aleatorio, faz a mesma coisa pra
    //gerar os botoes aleatoriamente
    var vetor_botoes = new Array(quantidade_de_botoes);
    var booleano;
    var num_sorteado;
    //mas eu ja seto um botao aleatorio definido, com a resposta
    var posicao_resposta_certa = Math.floor((Math.random() * quantidade_de_botoes));
    vetor_botoes[posicao_resposta_certa] = vetor_sorteado[ponteiro_vetor];
    atualiza_vidas();
    //função igual a função de gerar o vetor aleatorio, com a verificação de ver se nao é o botao com a resposta certa
    for (var i = 0; i < vetor_botoes.length; i++) {
        if (i != posicao_resposta_certa) {
            booleano = false;
            num_sorteado = Math.floor((Math.random() * vetor_botoes.length));
            booleano = vetor_botoes.includes(num_sorteado);
            if (booleano) {
                num_sorteado = Math.floor((Math.random() * database.length));
                i--;
            }
            else {
                vetor_botoes[i] = num_sorteado;
            }
        }

    }
    //log para mostrar os botoes gerados
    console.log("Botoes sorteados:" + vetor_botoes[0] + ", " + vetor_botoes[1] + ", " + vetor_botoes[2] + ", " + vetor_botoes[3]);

    //printo a pontuação
    document.getElementById("pontuacao").innerHTML = pontuacao;

    //printo os botoes com a resposta + 3 valores aleatorios
    document.form1.botao1.value = database[vetor_botoes[0]].nome;
    document.form1.botao2.value = database[vetor_botoes[1]].nome;
    document.form1.botao3.value = database[vetor_botoes[2]].nome;
    document.form1.botao4.value = database[vetor_botoes[3]].nome;
}

function prox_fase() {
    localStorage.setItem("quantidade_vidas_facil", vidas);    //salvo a quantidade de vidas
    localStorage.setItem("pontuacao_facil", pontuacao);       //salvo a pontuação atual para a prox fase
    window.location = "medio.html";     //vou para a prox fase
}

function submissao(num_botao) {
    //vejo se o valor do botao pressionado é o mesmo valor da imagem
    if (document.getElementById("botao" + num_botao).value === database[vetor_sorteado[ponteiro_vetor]].nome) {
        //se sim...
        document.getElementById("botao" + num_botao).style.backgroundColor = "#42f445";
        console.log("Resposta correta!");
        ponteiro_vetor++; //ando com o meu ponteiro 
        pontuacao += valor_pontuacao;   //somo a pontuação
        //desabilito os botoes
        document.getElementById("botao1").disabled = true;
        document.getElementById("botao2").disabled = true;
        document.getElementById("botao3").disabled = true;
        document.getElementById("botao4").disabled = true;

        if (ponteiro_vetor < database.length) { //se eu ainda tiver dados pra exibir, eu exibo
            document.getElementById("imagem").src = database[vetor_sorteado[ponteiro_vetor - 1]].src2;
            setTimeout(jogo_inciado, 1000);
        }
        else {  //se nao, significa que eu acabei a fase
            document.getElementById("imagem").src = database[vetor_sorteado[ponteiro_vetor - 1]].src2;
            //mostra a foto real, e mostra o botao pro prox nivel
            atualiza_vidas();
            document.getElementById("botao0").style.visibility = "visible";
        }
    }
    else {  //se eu tiver errado...
        vidas--;    //tirou uma vida
        
        document.getElementById("botao" + num_botao).style.backgroundColor = "#f44141";
        document.getElementById("botao" + num_botao).disabled = true;
        if (vidas === 0) {  //se as vidas for = 0
            alert("PERDEU, ACABARAM AS VIDAS! ENCAMINHADO PARA PAGINA PRINCIPAL!");
            window.location = "pag1.html"       //volto pra pag inicial

        }
        atualiza_vidas();       //se nao for = 0, atualizo a foto do coração
    }
}
function atualiza_vidas() {     //função para atualizar a img do coração conforme as vidas restantes
    //printo a pontuação
    document.getElementById("pontuacao").innerHTML = pontuacao;

    switch (vidas) {
        case 1:
            document.getElementById("img_vidas").src = "img/empty-heart.png";
            break;
        case 2:
            document.getElementById("img_vidas").src = "img/half-heart.png";
            break;
        case 3:
            document.getElementById("img_vidas").src = "img/full-heart.png";
            break;
    }
}
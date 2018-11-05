var database_clientes;
var bool_editando = false;

function atualizaDatabase_clientes() {
    $.ajax({
        url: '/cliente/lista',
        dataType: 'json',
        error: function (dados) {
            alert('Erro: ' + dados.data);
        },
        success: function (dados) {
            if (dados.status === 'ERRO')
                alert('Erro: ' + dados.data);
            else
                database_clientes = dados.data;
        }
    });

}
function exibeClientes(clientes) {
    atualizaDatabase_clientes();
    for (var i = 0; i < clientes.length; i++) {
        var cliente = clientes[i];
        var dadosCliente =
            '<div id="' + cliente.id + '"> ' +
            '<br><br>' +
            '<div class="dados" id="dados_id">ID: ' + cliente.id + '</div>' +
            '<div class="dados" id="dados_nome"><br>Nome: ' + cliente.nome + '</div>' +
            '<div class="dados" id="dados_end"><br>Endereço: ' + cliente.endereco + '</div>' +
            '<div class="dados" id="dados_tel"><br>Telefone: ' + cliente.telefone + '</div>' +
            '<div class="dados" id="dados_email"><br>Email: ' + cliente.email + '</div>' +
            '<br> <button onclick="deletaCliente(' + cliente.id + ');"> EXCLUIR</a>' +
            '<br> <button onclick="editaCliente(' + cliente.id + ');"> EDITAR</a>' +
            '</div>';
        document.getElementById('result').innerHTML += dadosCliente;
    }
}
function deletaCliente(id) {
    $.ajax({
        url: '/cliente/deleta?id=' + id,
        type: 'post',
        dataType: 'json',
        error: function (dados) {
            alert('Erro: ' + dados.data);
        },
        success: function (dados) {
            if (dados.status === 'ERRO')
                alert('Erro: ' + dados.data);
            else {
                document.result.removeChild(document.getElementById(id));
                alert(dados.data);
            }
        }
    });
    atualizaDatabase_clientes();
}
function editaCliente(id) {
    if (!bool_editando) {
        var cliente;
        for (var i = 0; i < database_clientes.length; i++) {
            if (database_clientes[i].id === id) {
                cliente = database_clientes[i];
            }
        }
        var dadosCliente =
            '<br><br>' +
            '<form name="formEditaCliente" method="post" action="">' +
            'ID: ' + cliente.id +
            '<br>Nome: <input type="text" name="nome" value="' + cliente.nome + '" required>' +
            '<br>Endereço: <textarea name="endereco" required cols="30" rows="2">' + cliente.endereco + '</textarea>' +
            '<br>Telefone: <input type="text" name="telefone" value="' + cliente.telefone + '" required>' +
            '<br>Email: <input type="text" name="email" value="' + cliente.email + '"required>' +
            '<br> <input type="button" value="CANCELAR" onClick="cancelaEditaCliente(' + cliente.id + ')" />' +
            '     <input type="button" value="CONFIRMAR" onClick="confirmaEditaCliente(' + cliente.id + ')" />' +
            '</form>';
        document.getElementById(id).innerHTML = dadosCliente;
        bool_editando = true;
    }
    else {
        alert("JÁ EXISTEM DADOS SENDO EDITADOS");
    }
    atualizaDatabase_clientes();
}
function confirmaEditaCliente(id) {
    bool_editando = false;
    var input = {
        id: id,
        nome: document.formEditaCliente.nome.value,
        endereco: document.formEditaCliente.endereco.value,
        email: document.formEditaCliente.email.value,
        telefone: document.formEditaCliente.telefone.value
    };
    $.ajax({
        url: '/cliente/atualiza',
        type: 'post',
        data: input,
        error: function (dados) {
            alert('Erro: ' + dados.data);
        },
        success: function (dados) {
            if (dados.status === 'ERRO') {
                alert('Erro: ' + dados.data);
            }
            else {
                alert(dados.data);
                cancelaEditaCliente(id);
            }
        }
    });
    atualizaDatabase_clientes();
}
function cancelaEditaCliente(id) {
    atualizaDatabase_clientes();
    bool_editando = false;
    var cliente;
    for (var i = 0; i < database_clientes.length; i++) {
        if (database_clientes[i].id === id) {
            cliente = database_clientes[i];
        }
    }
    var dadosCliente =
        '<br><br>' +
        '<div class="dados" id="dados_id">ID: ' + cliente.id + '</div>' +
        '<div class="dados" id="dados_nome"><br>Nome: ' + cliente.nome + '</div>' +
        '<div class="dados" id="dados_end"><br>Endereço: ' + cliente.endereco + '</div>' +
        '<div class="dados" id="dados_tel"><br>Telefone: ' + cliente.telefone + '</div>' +
        '<div class="dados" id="dados_email"><br>Email: ' + cliente.email + '</div>' +
        '<br> <button onclick="deletaCliente(' + cliente.id + ');"> EXCLUIR</button>' +
        '<button onclick="editaCliente(' + cliente.id + ');"> EDITAR</button>';
    document.getElementById(id).innerHTML = dadosCliente;
}
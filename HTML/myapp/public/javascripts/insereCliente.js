function salvaCliente() {
    var input = {
        nome: document.formCliente.nome.value,
        endereco: document.formCliente.endereco.value,
        email: document.formCliente.email.value,
        telefone: document.formCliente.telefone.value
    };
    $.ajax({
        url: '/cliente/insere',
        type: 'post',
        data: input,
        error: function (dados) {
            alert('Erro: ' + dados.data);
        },
        success: function (dados) {
            if (dados.status === 'ERRO')
                alert('Erro: ' + dados.data);
            else
                alert(dados.data);
                window.location.href ='/index.html';
        }
    });
}
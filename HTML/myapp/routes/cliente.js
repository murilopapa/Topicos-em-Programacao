var express = require('express');
var router = express.Router();

router.get('/lista', function (req, res, next) {
    req.getConnection(function (err, connection) {
        connection.query("SELECT * from cliente", function (err, rows) {
            if (err)
                res.json({ status: 'ERROR', data: err });
            res.json({ status: 'OK', data: rows });
        });
        if (err)
            res.json({ status: 'ERROR', data: err });
    });
});
router.post('/deleta', function (req, res, next) {
    var id = req.query.id;
    req.getConnection(function (err, connection) {
        connection.query("DELETE FROM cliente WHERE id = " + id, function (err, rows) {
            if (err)
                res.json({ status: 'ERROR', data: + err });
            res.json({ status: 'OK', data: 'Excluído com sucesso!' });
        });
    });
});
router.post('/insere', function (req, res, next) {
    var input = req.body;
    req.getConnection(function (err, connection) {
        connection.query("INSERT INTO cliente SET ? ", input, function (err, rows) {
            if (err)
                res.json({ status: 'ERROR', data: + err });
            else
                res.json({ status: 'OK', data: 'Incluído com sucesso!' });
        });
    });
});
router.post('/atualiza', function (req, res, next) {
    var input = req.body;
    req.getConnection(function (err, connection) {
        var request = "UPDATE cliente SET nome='" + input.nome + "', endereco='" + input.endereco + "', email='" + input.email + "', telefone='" + input.telefone + "' WHERE id='" + input.id + "';";
        connection.query(request, function (err, rows) {
            if (err) {
                res.json({ status: 'ERROR', data: + err });
            }
            else {
                res.json({ status: 'OK', data: 'Atualizado com sucesso!' });
            }
        });
    });
});
module.exports = router;
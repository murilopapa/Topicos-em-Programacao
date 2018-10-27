//mysql -u root -p
var http = require('http');
var mysql = require('mysql');
var fs = require('fs');

http.createServer(function (req, res) {
  fs.readFile('../index.html', function(err, data) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    res.end();
  });
}).listen(3000);


var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "murilo97427",//colocar senha do mysql
    database: "teste"
});
con.connect(function (err) {
    if (err) throw err;
    console.log("Connected!");
    var sql = "CREATE DATABASE teste";  //cria database, tirar a var "database" quando for usar essa
    var sql = "CREATE TABLE customers (name VARCHAR(255), address VARCHAR(255))";   //criar tabela
    var sql = "ALTER TABLE customers ADD COLUMN id INT AUTO_INCREMENT PRIMARY KEY"; //add uma PK chamada id que incrementa sozinha
    var sql = "DELETE FROM customers WHERE address = 'Highway 37'"; //delete os dados com adress = highway 37
    var sql = "INSERT INTO customers (name, address) VALUES ('Company Inc', 'Highway 37')"; //adiciona um dado a tabela
    var sql = "SELECT * FROM customers"; //recebe todos os dados de costumers

    con.query(sql, function (err, result) {
        if (err) throw err;
        console.log("Ação : " + sql);
        console.log(result);
    });
});

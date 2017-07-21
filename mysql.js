var mysql = require('mysql')
var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: ''
})

connection.connect();
connection.query('use test')

connection.query('SELECT * from total_number', function(err, rows, fields) {
  if (err) throw err;
  console.log(rows[0])
  console.log('The solution is: ');
});

connection.end();

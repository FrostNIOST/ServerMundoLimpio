const mysql = require('../config/config');
const Cliente = {};
User.create = (user, result) => {
const sql = `INSERT INTO users(
email, 
name,
lastname,
phone,
image,
password,
created_at,
updated_at
)
VALUES (?, ?, ?, ?, ?, ?, ?, ?)`
;
db.query(
sql, 
[
Clientes.email, 
Clientes.name,
Clientes.lastname,clientesr.phone,
Clientes.image,
Clientes.password
],
(err, res) => {
if (err) {
console.log('error: ', err);
result(err, null);
}
else {
console.log('Id del nuevo Usuario: ', res.insertId);
result(null, res.insertId);
}
}
)
};
module.exports = User;
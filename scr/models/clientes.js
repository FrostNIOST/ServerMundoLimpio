const { query } = require('express');
const db = require('../config/config');
const User = {};


User.register = (user, result) => {
    //Revisa si el cliente existe
    const sql = `SELECT id_cliente FROM cliente WHERE correo = ?`;
    db.query(sql, [user.correo], (err, res) => {
        if (err) {
            result(err, null);
        } else {
            if (res.length > 0) {
                result(null, { message: 'Cliente ya registrado' });
            } else {
                //Si no existe, lo registra
                const sql = `INSERT INTO cliente (nombre, correo, celular, fecha_nacimiento, password) VALUES (?, ?, ?, ?, ?); `;
                db.query(
                    sql,
                    [user.nombre,
                    user.correo,
                    user.celular,
                    user.fecha_nacimiento,
                    user.password],
                    (err, res) => {
                        if (err) {
                            result(err, null);
                        } else {
                            result(null, { message: 'ID Cliente registrado: ' + res.insertId });
                        }
                    }
                );
            }
        }
    });
};

User.login = (user, result) => {
    const sql =
        `SELECT id_cliente, nombre, 'cliente' AS tipo FROM cliente WHERE correo = ? AND password = ? 
    UNION ALL 
    SELECT id_empresa, nombre_empresa ,'empresa' AS tipo FROM empresa WHERE correo =? AND password = ?` ;

    db.query(sql,
        [
            user.correo,
            user.password,
            user.correo,
            user.password,
        ],
        (err, res) => {
            if (err) {
                console.log('Model error: ', err); //for debugging
                result(err, null);
            } else {
                result(null, res);
            }
        }
    )
};

User.updatePassword = (user, result) => {
    const sql = `UPDATE cliente SET password = ? WHERE id_cliente = ?`;
    db.query(sql, [user.password, user.id_cliente], (err, res) => {
        if (err) {
            result(err, null);
        } else {
            result(null, res);
        }
    });
};


User.empresas = (user, result) => {
    const sql = `SELECT nombre_empresa, NIT, telefono, direccion, correo, especialidad FROM empresa WHERE id_empresa = ? OR NIT = ? OR especialidad = ? OR nombre_empresa LIKE = ?%`
    db.query(sql, [], (err, res) => {
            if (err) {
                result(err, null);
            } else {
                result(null, res);
            }
        });
    };

User.update = (user, result) => {
    const sql = `UPDATE cliente SET nombre = ?, correo = ?, celular = ?  WHERE id_cliente = ?`;
    db.query(sql, [user.nombre,
        user.correo,
        user.celular,
        user.id_cliente],
        (err, res) => {
            if (err) {
                result(err, null);
            } else {
                result(null, res);
            }
        });
};


User.defuse = (user, result) => {
    const sql = `UPDATE cliente SET status = "false"  WHERE id_cliente = ?`;
    db.query(sql, [user.id_cliente],
        (err, res) => {
            if (err) {
                result(err, null);
            } else {
                result(null, res);
            }
        });
};





module.exports = User;
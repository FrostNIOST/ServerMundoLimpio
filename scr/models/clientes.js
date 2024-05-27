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
                console.log(res);
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


User.update = (id, result) => {
    const sql = `UPDATE cliente SET nombre = ?, correo = ?, celular = ?  WHERE id_cliente = ?`;
    db.query(sql, [id.nombre,
    id.correo,
    id.celular,
    id.id_cliente],
        (err, res) => {
            if (err) {
                result(err, null);
            } else {
                result(null, res);
            }
        });
};


/*User.update = (id, result) => {
    const sql = `SELECT * FROM CLIENTES`;
    db.query(sql, [id],
        (err, res) => {
            if (err) {
                result(err, null);
            } else {
                result(null, res);
            }
        });
};*/



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


User.recolectar = (user, result) => {

    //Si no existe, lo registra
    const sql = `INSERT INTO recoleccion (fecha, ubicacion, id_cliente, id_empresa) VALUES (?, ?, ?, ?); `;
    db.query(
        sql,
        [user.fecha,
        user.ubicacion,
        user.id_cliente,
        user.id_empresa],
        (err, res) => {
            if (err) {
                result(err, null);
            } else {
                result(null, res.insertId );
            }
        }
    );
};


User.recolectarMaterial = (material, result) => {
    // Crear una matriz de valores a insertar
    //console.log('Recolectando materiales', material);
    const values = material.map(item => [item.id_materia, item.cantidad_Kg, item.id_recoleccion]);
    // Crear la consulta SQL
    //console.log('Mapeado ', values);
    const sql = `INSERT INTO materia_recoleccion (id_materia, cantidad_Kg, id_recoleccion) VALUES 
    ?`;
    db.query(sql, [values], (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }
        console.log("Registros creados: ", { affectedRows: res.affectedRows }); //Only for debugging
        result(null, { message: 'Registros creados: ' + res.affectedRows });
    });
};


User.listOne = (idClient, result) => {
    //Consulta la recolección por id del cliente y para cada recolección, los materiales recolectados
    // devolver la consulta como un objeto anidado json
    const sql = `SELECT 
    r.id_recoleccion, r.ubicacion, r.fecha, m.id_materia, m.nombre_materia, mr.cantidad_kg FROM recoleccion r 
    JOIN materia_recoleccion mr ON r.id_recoleccion = mr.id_recoleccion
    JOIN materia m ON mr.id_materia = m.id_materia WHERE r.id_cliente = ?`; //HACER UN JOIN PARA VER LOS NOMBRES DE LA EMPRESA
    db.query(sql, [idClient], (err, res) => {
        if (err) {
            result(err, null);
        } else {
            result(null, res);
        }
    });
};


User.listAll = (result) => {
    //Consulta todas recolecciónes, los materiales recolectados
    // devolver la consulta como un objeto anidado json
    //Faltan datos del cliente y empresa
    const sql = `SELECT 
    r.id_recoleccion, r.ubicacion, r.fecha, m.id_materia, m.nombre_materia, mr.cantidad_kg FROM recoleccion r
    JOIN materia_recoleccion mr ON r.id_recoleccion = mr.id_recoleccion
    JOIN materia m ON mr.id_materia = m.id_materia WHERE r.id_cliente = ?`; //HACER EL JOIN PARA VER LA EMPRESA
    db.query(sql, (err, res) => {
        if (err) {
            result(err, null);
        } else {
            result(null, res);
        }
    });
}






module.exports = User;
const { query } = require('express');
const db = require('../config/config');
const Company = {};

Company.register = (company, result) => {
    //Revisa si el empresa existe
    const sql = `SELECT id_empresa FROM empresa WHERE correo = ?`;
    db.query(sql, [company.correo], (err, res) => {
        if (err) {
            result(err, null);
        } else {
            if (res.length > 0) {
                result(null, { message: 'empresa ya registrado' });
            } else {
                //Si no existe, lo registra
                const sql = `INSERT INTO empresa (nombre_empresa, NIT, telefono, direccion, correo, password, especialidad) VALUES (?, ?, ?, ?, ?, ?, ?); `;
                db.query(
                    sql,
                    [company.nombre_empresa,
                    company.NIT,
                    company.telefono,
                    company.direccion,
                    company.correo,
                    company.password,
                    company.especialidad],
                    (err, res) => {
                        if (err) {
                            result(err, null);
                        } else {
                            result(null, { message: 'ID empresa registrado: ' + res.insertId });
                        }
                    }
                );
            }
        }
    });
};


Company.login = (company, result) => {
    const sql =
        `SELECT id_empresa, nombre, 'empresa' AS tipo FROM empresa WHERE correo = ? AND password = ? 
    UNION ALL 
    SELECT id_empresa, nombre_empresa ,'empresa' AS tipo FROM empresa WHERE correo =? AND password = ?` ;

    db.query(sql,
        [
            company.correo,
            company.password,
            company.correo,
            company.password,
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


Company.updatePassword = (company, result) => {
    const sql = 'UPDATE empresa SET password = ? WHERE id_empresa = ?';
    db.query(sql, [company.password, company.id_empresa], (err, res) => {
        if (err) {
            result(err, null);
        } else {
            result(null, res);
        }
    });
};






module.exports = Company;
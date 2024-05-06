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


//id, nit, nombre, esp
Company.empresas = (id, nit, nombre, esp, result) => {
    //console.log(id + "--" + nit + "--" + nombre + "--" + esp + "------");
    let sql = `SELECT id_empresa, nombre_empresa, NIT, telefono, direccion, correo, especialidad FROM empresa WHERE `;
    let ya =  false;
    let parametros = [];
 
    if (id) {
        sql = sql + "id_empresa = ?";
        ya = true;
        parametros.push(id);
    }

    if(nit){
        if(ya){
            sql += " OR ";
        }
        sql = sql + "NIT = ?";
        ya = true;
        parametros.push(nit);
    }

    if(nombre){
        if(ya){
            sql += " OR ";
        }
        sql = sql + "nombre_empresa LIKE ?";
        ya = true;
        parametros.push("%" + nombre +"%");
    }

    if(esp){
        if(ya){
            sql += " OR ";
        }
        sql = sql + "especialidad LIKE ?";
        ya = true;
        parametros.push("%" + esp  + "%");
    }

    if  (!ya) {
        sql = `SELECT id_empresa, nombre_empresa, NIT, telefono, direccion, correo, especialidad FROM empresa`;
    }

    //console.log("sql: "+ sql);
    //console.log(parametros);   
    
    db.query(sql, parametros, (err, res) => {
        if (err) {
            result(err, null);
        } else {
            result(null, res);
        }
    });
};


Company.update = (id, result) => {
    const sql = `UPDATE empresa SET nombre_empresa = ?, correo = ?, telefono = ?  WHERE id_empresa = ?`;
    db.query(sql, [id.nombre_empresa,
    id.correo,
    id.telefono,
    id.id_empresa],
        (err, res) => {
            if (err) {
                result(err, null);
            } else {
                result(null, res);
            }
        });
};


Company.defuse = (company, result) => {
    const sql = `UPDATE empresa SET status = "false"  WHERE id_empresa = ?`;
    db.query(sql, [company.id_empresa],
        (err, res) => {
            if (err) {
                result(err, null);
            } else {
                result(null, res);
            }
        });
};






module.exports = Company;
const fs = require('fs');
const colors = require('colors');

let listarTabla = (base, limite = 10) => {

        console.log('=================='.green);
        console.log(`Tabla de ${ base }`.green);
        console.log('=================='.green);

        for (let i = 1; i <= limite; i++) {

            console.log(`${ base } * ${i} =${ base*i }`)

        }




    }
    //const fs = require('express'); no son nativos de node
    //const fs = require('./fs'); nosotros mismos escribimos

let crearArchivo = (base, limite = 10) => {


    console.log('========================='.yellow);
    console.log(`[Fue creada la tabla de ${ base }]`.yellow);
    console.log('========================='.yellow);

    return new Promise((resolve, reject) => {
        if (!Number(base)) {

            reject(`El valor introducido ${ base } base no es un numero`);
            return;

        }

        let data = '';

        for (let i = 1; i <= limite; i++) {

            data += (`${ base } * ${i} =${ base*i }\n`);

        }
        fs.writeFile(`tablas/tabla-${ base }-al-${ limite }.txt`, data, (err) => {
            if (err)
                reject(err)
            else
                resolve(`tabla-${ base }-al-${ limite }.txt`);
        });

    });


}
module.exports = {
    crearArchivo,
    listarTabla

}
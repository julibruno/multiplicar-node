const { rejects } = require('assert');
const fs = require('fs');
var colors = require('colors');
const { resolve } = require('path');

let crearArchivo = (base, limite=10) => {
    return new Promise ((resolve,reject) =>{
    
        // Si no recibe un numero lo saco
            
        if(!Number(base)){
            reject(`El valor de base ${base}No es un numero`);
            //si no pongo el retun el codigo sigue.
            return;
        }
        

            let data= "";


            for (let index = 1; index <= limite; index++){
                const resultado = index * base;
                //console.log(resultado)
                data += `El resultado de ${index} por  ${base} es ${resultado} \n`;
            };

            //const data = new Uint8Array(Buffer.from('Hola Mundo'));
            fs.writeFile(`Tablas/Tabla de ${base}.txt`, data, (err) => {
            if (err) 
            reject(err)
            else 
                resolve(`Tabla de ${base}`)
          
            });


    });
}

let listarTabla = (base, limite=10) => {
    if(!Number(base)){
        reject(`El valor de base ${base}No es un numero`);
        //si no pongo el retun el codigo sigue.
        return;
    }

    let data= "";

    for (let index = 1; index <= limite ; index++) {
        const resultado = index * base;
                //console.log(resultado)
                data += `El resultado de ${index} por  ${base} es ${resultado} \n`;
               // console.log(data)
        }
        console.log(data)
        
       // console.log(data)
         //   resolve(`Tabla de ${base} creada con un limite de ${limite}`)
      //
        
    }






module.exports = {
    crearArchivo,
    listarTabla
}

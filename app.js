//requireds

const argv = require('./config/yargs').argv;
var colors = require('colors');

const {crearArchivo,listarTabla}= require('./Multiplicar/multiplicar')


let comando = argv._[0]

switch( comando ){
    case 'listar':
        listarTabla(argv.base, argv.limite)
       // .then(archivo => console.log(archivo))
       // .catch(e=> console.log(e))

    break
    case 'crear':
            crearArchivo(argv.base, argv.limite)
    .then(archivo => console.log(`Archivo creado: ${archivo}`))
    .catch(e=> console.log(e) )

    break
    default:
        console.log("comando no reconocido")
}


//Hay 3 tipos de Require
//const fs = require('express'); => Esto no es propio de express, se instala
//const fs = require('../'); => Estos son propios de los archivos que creamos
//let base = '3';

//ARGV nos permite tomar los parametros que estan dentro del CMD
//console.log(process.argv)



// let argv2 = process.argv;

// console.log(argv.base)
// console.log(argv.limite)


// let parametro = argv[2];

// let base = parametro.split('=')[1]


//console.log(base)





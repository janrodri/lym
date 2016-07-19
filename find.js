// 1.- rescatando el argumento que es pasado al scrippt
var ageArgument = +process.argv[2];
// conectarnos a la BD
// Paso1.- cargar el driver en nuestro script
var mongodb = require('mongodb');
//paso2.- el driver de mongodb nos proporciona un cliente,
// por lo que lo extraemos de la libreria 
var mongoClient = mongodb.MongoClient;
// Paso 3.- conectamos el cliente con la BD
mongoClient.connect("mongodb://127.0.0.1:27017/learnyoumongo", 
function(err, db){
    //verificando si hubo un error en la conexion
    if(err){
        console.log("> Error al conectar a: "+
        'mongodb://127.0.0.1:27017/learnyoumongo');
        throw err;
    }
    //realuizamos una consulta obteniendo la coleccion
    var parrotsColection = db.collection('parrots');
    var objetoResultado = parrotsColection = db.collection('parrots');
    parrotsColection.find(
        {
            age : {$gt : ageArgument}
        });
        objetoResultado.toArray(function(err, docs){
            console.log(docs);
            //serrando la coneccion
            db.close();
        });
});
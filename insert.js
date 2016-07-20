var mongo = require('mongodb').MongoClient
// agumentos vector
var firstName = process.argv[2]
var lastName = process.argv[3]
// a variable del documento con los valores pedidos
var doc = {
  firstName: firstName
, lastName: lastName
}
// La url que nos dieron desde el tercer ejercicio
var url = 'mongodb://localhost:27017/learnyoumongo'
mongo.connect(url, function(err, db) {
  //devolvemos error
  if (err) throw err
  var collection = db.collection('docs')
  // coleccion de datos que seria los registros
  collection.insert(doc, function(err, data) {
    if (err) throw err
    //imprimimos mensaje
    console.log(JSON.stringify(doc));
    db.close()
    // fin, cerramos servidor
  });
});

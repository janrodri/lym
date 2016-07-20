var ageArgument = +process.argv[2];
var mongo = require('mongodb').MongoClient
// concatenamos el valor del argumento
var url = 'mongodb://localhost:27017/' + process.argv[2]
// conectamos la funcion del contenido de la db
mongo.connect(url, function(err, db) {
  //  mandamos error si lo hay, si no mandamos el contenido
  if (err) throw err
  var collection = db.collection('users')
  collection.update({
      // en la coleccion deseo buscar el campo username
    username: 'tinatime'
  }, {
    $set: {
        //agrergamos nuevo valor al documento
      age: 40
    }
  }, function(err) {
    if (err) throw err
    db.close()
  })
})
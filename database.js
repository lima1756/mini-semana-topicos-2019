let config = {
    apiKey: "AIzaSyBtMVsyPP8CFnJKNxh9ypJCvdbAMWg5rPQ",
    authDomain: "newagent-14ac4.firebaseapp.com",
    databaseURL: "https://newagent-14ac4.firebaseio.com",
    projectId: "newagent-14ac4",
    storageBucket: "newagent-14ac4.appspot.com",
    messagingSenderId: "396806670362"
  };

firebase.initializeApp(config);

let db = firebase.firestore();

function write(nombre, decisionTomada, callback){
    // Definimos primero el nombre de la bdd que usaremos (nombre del documento), en este caso sera el de la variable nombre
    let docRef = db.collection("answers").doc(nombre);
    // Aqui guardaremos la información que exista por si es necesario actualizarla
    let allData = null;

    // Esta función llama a la base de datos y nos regresa el documento
    docRef.get().then(function(doc){
        // Si el documento existe entonces agregaremos o actualizaremos información
        if(doc.exists){
            // Guardamos la inforamción, usamos esta variable si quisieramos actualizar su información
            allData=doc.data();
            let valorActual = 0;
            if(isNaN(allData[decisionTomada])){
                valorActual = 1;
            }
            else{
                valorActual = allData[decisionTomada] + 1;
            }
            docRef.update({
                // Nombre del dato que queremos cambiar 
                [decisionTomada]:valorActual
                // Si quisieramos cambiar más de un valor a la vez separamos por comas cada linea
            })
            .then(function() {
                // Lo que sucederá si se guardo exitosamente
                console.log("Document successfully updated!");
                callback();
            })
            .catch(function(error) {
                // Lo que sucederá si hubo algún tipo de error
                console.error("Error updating document: ", error);
                callback();
            });
        }
        else{
            // Si no existe el documento entonces lo crea
            docRef.set({
                [decisionTomada]:1
            }, { merge: true })
            .then(function() {
                // Lo que sucederá si se guardo exitosamente
                console.log("Document written");
                callback();
            })
            .catch(function(error) {
                // Lo que sucederá si hubo algún tipo de error
                console.error("Error adding document: ", error);
                callback();
            });
        }
    });
}


function read(callback){
    // Seleccionamos la base de datos que queremos (documento) en este caso "answers"
    db.collection("answers")
    .get()
    .then(function(querySnapshot) {
        // Si se obtuvo exitosamente la variable querySnapshot tiene toda la información
        callback(querySnapshot)
    })
    .catch(function(error) {
        // En caso de error
        console.log("Error getting documents: ", error);
    }); 
}


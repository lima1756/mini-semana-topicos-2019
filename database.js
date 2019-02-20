// const firebase = require("firebase");
// // Required for side-effects
// require("firebase/firestore");

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


function saveToDB(obj, callback){
    let docRef = db.collection("answers").doc(obj.name);
    let allData = null;

    docRef.get().then(function(doc){
        if(doc.exists){
            allData=doc.data();
            docRef.update({
                [obj.opc]:isNaN(allData[obj.opc])?1:allData[obj.opc]+1
            })
            .then(function() {
                console.log("Document successfully updated!");
                executeCallBack(callback);
            })
            .catch(function(error) {
                console.error("Error updating document: ", error);
                executeCallBack(callback);
            });
        }
        else{
            docRef.set({
                [obj.opc]:1
            }, { merge: true })
            .then(function() {
                console.log("Document written");
                executeCallBack(callback);
            })
            .catch(function(error) {
                console.error("Error adding document: ", error);
                executeCallBack(callback);
            });
        }
    });
    
}

function loadDB(callback){
    db.collection("answers")
    .get()
    .then(function(querySnapshot) {
        callback(querySnapshot);
    })
    .catch(function(error) {
        console.log("Error getting documents: ", error);
    });

}

function executeCallBack(callback){
    if(callback!=null){
        callback();
    }
}


export {saveToDB, loadDB};
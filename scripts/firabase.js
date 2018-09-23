// configuracion
const config = {
    apiKey: "AIzaSyCqoUyb997dwkIq4nX-lJqrkayx7fHH5VU",
    authDomain: "maps-db.firebaseapp.com",
    databaseURL: "https://maps-db.firebaseio.com",
    projectId: "maps-db",
    storageBucket: "maps-db.appspot.com",
    messagingSenderId: "166249140711"
  };

firebase.initializeApp(config);

// Se asigna a una variable cada elemento input con su ID
const nombre = document.getElementById('name'),
    latitud = document.getElementById('lat'),
    longitud = document.getElementById('lng'),
    enviarData = document.getElementById('submit_button');



const printdb = firebase.database();

enviarData.addEventListener('click', enviar);

function enviar () {

    // Se conecta con la base de datos de Firebase
const dataDB = firebase.database().ref('Datos').push();
   // Se envía los valores de cada input
   dataDB.set({
      nombre: nombre.value,
      lat: latitud.value,
      lng: longitud.value,
   });
}

const data = printdb.ref("Datos");

data.on("value", (snapshot)=>{
    printObject(snapshot.val());
});

const printLat =  document.getElementById('print');

function printObject(data){

    printLat.innerHTML = "";

    initMap(data);
    for (id in data){

      printLat.innerHTML += data[id].lat + " ";
    };
};
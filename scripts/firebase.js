console.log("Inicio firebase");

// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.1.2/firebase-app.js";
import { getFirestore, collection, getDocs,setDoc, doc,addDoc,updateDoc, deleteField,getDoc } from 'https://www.gstatic.com/firebasejs/9.1.2/firebase-firestore.js';


    const firebaseConfig = {
    apiKey: "AIzaSyD48ZjmBUbMIsvTLYzntcRcHkuh-Aft8-c",
    authDomain: "quiz01-99925.firebaseapp.com",
    projectId: "quiz01-99925",
    storageBucket: "quiz01-99925.appspot.com",
    messagingSenderId: "241827102095",
    appId: "1:241827102095:web:5a200235c5f078b82f9ffa"
    };
    
    // Initialize Firebase /* INICIALIZO LOS MUDULOS  DE FIRESTORE
    const app = initializeApp(firebaseConfig);
    const db = getFirestore(app);

   
/**CREO EL EVENTO PARA TRAERME EL NOMBRE DEL BOTON *START */

const points = 0;

const hoy = new Date();
const day = hoy.getDate();
const mes = hoy.getMonth();
const anio = hoy.getFullYear();
const hora = hoy.getHours();
const min = hoy.getMinutes();
const factual = anio+"-"+(mes+1)+"-"+day+" "+hora+":"+min



console.log(document.getElementById("usuario").value);

if(document.getElementById("usuario") != null){

console.log("entra");

const clicstart = () =>{
    document.getElementById('start').addEventListener('click',getname =>{    

        const user = document.getElementById("usuario").value

        addDoc(collection(db,"UserQuiz"),
        {
            name : user,
            puntos: points,
            fecha : factual
        })
    })
}
clicstart  ()
}


/*PARA CAPTURAR EL ID DEL JUGADOR EN CURSO Y SETEARLE LA PUNTUACION AL FINAL*/

/*
const UpdateScore = doc(db, "UserQuiz", "LCSsg067VXNYtW5gQUlU");
await updateDoc(UpdateScore, {
  puntos: 6
});

*/

/*PARA TRAER LOS NOMBRES Y PUNTUACIONES PARA LA GRAFICA*/

const querySnapshot = await getDocs(collection(db, "UserQuiz"));
querySnapshot.forEach((doc) => {
  // doc.data() is never undefined for query doc snapshots
  const nombre= doc.data().name;
  const score = doc.data().puntos;
  console.log(nombre,score)
 // return nombre,score
});


//console.log("Fin  firebase");



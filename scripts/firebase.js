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

let name ='';

const clicstart = () =>{
    document.getElementById('start').addEventListener('click',getname =>{
        document.body.style.background='gray';
        name = document.getElementById("usuario").value
        
        console.log("DENTRO CLICK "+name)
    })
}


clicstart ()



console.log(name)


const usuarx = name

const points = 0

const hoy = new Date();
const day = hoy.getDate();
const mes = hoy.getMonth();
const anio = hoy.getFullYear();
const hora = hoy.getHours();
const min = hoy.getMinutes();
const factual = anio+"-"+(mes+1)+"-"+day+" "+hora+":"+min


console.log(points)
console.log(factual)

const docRef = await addDoc(collection(db,"UserQuiz"),
{
    name : usuarx,
    puntos: points,
    fecha : factual
 
})

console.log(docRef)

console.log("Fin  firebase");

document.getElementsByClassName("title_quiz1").innerHTML = "yourTextHere";


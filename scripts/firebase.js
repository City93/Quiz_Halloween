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

    /** *2 Crear Coleccion + ID autoamtico + Objeto**/



const usuarx = "jalid"

const q1=1
const q2=1
const q3=0
const q4=1
const q5=1
const q6=0
const q7=1
const q8=1
const q9=0
const q10=1

const points = q1+q2+q3+q4+q5+q6+q7+q8+q9+q10

const hoy = new Date();
const day = hoy.getDate();
const mes = hoy.getMonth();
const anio = hoy.getFullYear();
const hora = hoy.getHours();
const min = hoy.getMinutes();
const factual = anio+"-"+(mes+1)+"-"+day+" "+hora+":"+min

console.log(hoy)
console.log(mes+1)
console.log(points)
console.log(factual)


const docRef = await addDoc(collection(db,"UserQuiz"),
{
    name : usuarx,
    puntos: points,
    fecha : factual
 
})

console.log("Fin  firebase");


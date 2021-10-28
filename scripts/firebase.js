console.log("Inicio firebase");

// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.1.2/firebase-app.js";
import { getFirestore, collection, getDocs,setDoc, doc,addDoc,updateDoc, deleteField,getDoc } from 'https://www.gstatic.com/firebasejs/9.1.2/firebase-firestore.js';
import { getAuth,createUserWithEmailAndPassword,signInWithEmailAndPassword,sendEmailVerification } from 'https://www.gstatic.com/firebasejs/9.1.2/firebase-auth.js';


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
    const auth = getAuth(app);

   
//GEnero las variables de Score y factual para capturar el momento de jugar
    const score = 0;
    const hoy = new Date();
    const day = hoy.getDate();
    const mes = hoy.getMonth();
    const anio = hoy.getFullYear();
    const hora = hoy.getHours();
    const min = hoy.getMinutes();
    const factual = anio+"-"+(mes+1)+"-"+day+" "+hora+":"+min



/**BOTON CLICK PARA NUEVAS CUENTAS **/
    const userid ='';

    if(document.getElementById("btloguin") != null){

        document.getElementById("btloguin").addEventListener("click", ()=> {
  
             const email = document.getElementById("emailloguin").value 
             const password = document.getElementById("pswloguin").value 
  
              createUserWithEmailAndPassword(auth, email, password)

                .then((userCredential) => {
                  // Signed in
                  const user = userCredential.user;
                   userid= user.uid

                })
                .catch((error) => {
                  const errorCode = error.code;
                  const errorMessage = error.message;
                  console.log(errorCode+errorMessage)
               
                });
          })
}

console.log(userid)

/*** BOTON PASSS LOGUININ */
    document.getElementById("start").addEventListener("click", ()=> {
    console.log("entra sigIn")
    const email = document.getElementById("emailloginIn").value 
    const password = document.getElementById("pswloguinIn").value 
          
signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        /**Aqui capturo del objeto user el .uid y el .email y lo meto en la coleccion "user"* **/
        setDoc (doc(db,"User",user.uid),{
        email: email,
        uid : userid ,
        score : score

        });
                    // ...
                alert("Loguin Correcto Bienvenido al Quiz")
                alert(userid)
                //location.reload();
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode+errorMessage)
            alert("Cuenta o contaseña Incorrecta")
    });
          
})
          


/**CREO EL EVENTO PARA TRAERME EL NOMBRE DEL BOTON *START 
if(document.getElementById("usuario") != null){

console.log("entra");

const clicstart = () =>{
    document.getElementById('start').addEventListener('click',getname =>{    

        const user1 = document.getElementById("usuario").value

        addDoc(collection(db,"UserQuiz"),
        {
            name : user1,
            puntos: points,
            fecha : factual
          
        })
    })
}
clicstart  ()
console.log(auth)
}



/*PARA CAPTURAR EL ID DEL JUGADOR EN CURSO Y SETEARLE LA PUNTUACION AL FINAL


const UpdateScore = doc(db, "User", "iZUZjQhnEGN0dyZwPfnQASGyBZX2");
await updateDoc(UpdateScore, {
  score: 6
});*/



/*PARA TRAER LOS NOMBRES Y PUNTUACIONES PARA LA GRAFICA*/
let nombre=''
let scorebck=''

const querySnapshot = await getDocs(collection(db, "User"));
querySnapshot.forEach((doc) => {
  // doc.data() is never undefined for query doc snapshots
  
   nombre= doc.data().email;
   scorebck = doc.data().score; 
   console.log(nombre,scorebck)

 // return nombre,score
});

console.log(nombre,scorebck)

//console.log("Fin  firebase");


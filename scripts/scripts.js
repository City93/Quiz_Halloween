// Event listener que cambia el display de intro y preguntas para simular SPA

const openQuestions = () =>{
    document.getElementById('start').addEventListener('click',() =>{
        document.getElementById('div_enter').style.display = 'none'
        document.getElementById('div_questions').style.display = 'flex'
      
    })
}
openQuestions()

//Fetch para recoger informacion de la API

let infoAPI=''
let respuestas = []
const endpoint = 'https://opentdb.com/api.php?amount=10&difficulty=medium&type=multiple'
const getInfo = async () =>{
    const data = await fetch(endpoint)
    const json = await data.json()
    // console.log(json.results[0].incorrect_answers)
    let preguntas = []
    let respuestas = []
    let correctas = []
    for(let i = 0; i < json.results.length ; i++){
        preguntas.push(json.results[i].question)
        respuestas.push(json.results[i].incorrect_answers)
        respuestas[i].push(json.results[i].correct_answer)
        correctas.push(json.results[i].correct_answer)
    }
    // Del fetch sacamos un objeto con 3 elementos (respuestas (son 10 elementos con 4 respuestas en cada uno), preguntas y un array con las respuestas correctas.
    return infoAPI = {respuestas,preguntas,correctas}
}

// Funcion sacada de ese maravilloso lugar llamado internet para cambiar la posicion del array de repuestas para que la correcta esté en distinta posicion.

function shuffle(array) {
    let currentIndex = array.length,  randomIndex;
    while (currentIndex != 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
  
    return array;
  }

//Impresion de respuestas y preguntas

let answerUser = []
getInfo()
.then(infoAPI =>{
        let contador = 0;
        for(let i = 1; i < 20; i++){
            //Primero hay que establecer una impresion de la primera pregunta y respuestas
            shuffle(infoAPI.respuestas[0])
            document.getElementById('question').innerHTML = infoAPI.preguntas[0]
            document.getElementById('q1').innerHTML = infoAPI.respuestas[0][0]
            document.getElementById('q2').innerHTML = infoAPI.respuestas[0][1]
            document.getElementById('q3').innerHTML = infoAPI.respuestas[0][2]
            document.getElementById('q4').innerHTML = infoAPI.respuestas[0][3]
            document.getElementById(`q${i}`).addEventListener('click', () =>{
            // Este codigo llena el array de respuestas de usuario con el valor que ha clickado para poder comparar más adelante
                answerUser.push(document.getElementById(`q${i}`).innerHTML)
            // A continuación vamos imprimiendo cada pregunta sacando la informacion de la API con un contador que itera entre objetos.
                if(contador < 9){
            // Cada vez que el usuario clicka en una respuesta suma al contador para que aparezcan la siguiente pregunta y respuestas
                    contador++
                    shuffle(infoAPI.respuestas[contador])
                document.getElementById('question').innerHTML = infoAPI.preguntas[contador]
                document.getElementById('q1').innerHTML = infoAPI.respuestas[contador][0]
                document.getElementById('q2').innerHTML = infoAPI.respuestas[contador][1]
                document.getElementById('q3').innerHTML = infoAPI.respuestas[contador][2]
                document.getElementById('q4').innerHTML = infoAPI.respuestas[contador][3]
            //Cuando llega el contador a 9 (numero de preguntas - 1 ) el listener provoca que desaparezca la ventana de preguntas y devuelva los resultados
                } else{
                    document.getElementById('div_questions').style.display = 'none'
                    document.getElementById('div_results').style.display = 'inherit'
                    console.log(infoAPI.correctas)
                    console.log(answerUser)

                    // Despues de realizar el quiz este codigo guarda el usuario y su resultado
                    // El resultado se obtiene comparando 2 arrays (Respuestas correctas y respuestas del usuario)
                    // Con los dos arrays se obtiene un array de true's y false's del que se filtra para sacar la longuitud el array con solo true's
                    localStorage.setItem('Isa', JSON.stringify({
                        score: infoAPI.correctas.map((el,i) => {
                            if(el == answerUser[i]){
                                return true
                            } else {
                                return false
                            }
                        }).filter(Boolean).length
                    }))
                }
            })     
        }
        // console.log(infoAPI.respuestas[1])
    })



/****************************************************************************************/
/**********************************FIREBASE**********************************************/
/****************************************************************************************/



console.log("Inicio firebase");

// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.1.2/firebase-app.js";
import { getFirestore, collection, getDocs,setDoc, doc,addDoc,updateDoc, deleteField,getDoc ,where} from 'https://www.gstatic.com/firebasejs/9.1.2/firebase-firestore.js';
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

   
//Genero las variables de Score y f_actual para capturar el momento de jugar
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
                   console.log()
                   

                })
                .catch((error) => {
                  const errorCode = error.code;
                  const errorMessage = error.message;
                  console.log(errorCode+errorCode)
                  alert("Gracias por crear tu cuenta ahora logueate ;)")
                  location.reload();
               
                });
          })
}

let useruid=''

/*** BOTON PASSS LOGUININ */
    document.getElementById("start").addEventListener("click", ()=> {
    console.log("entra sigIn")
    const email = document.getElementById("emailloginIn").value 
    const password = document.getElementById("pswloguinIn").value 
          
signInWithEmailAndPassword(auth, email, password)

            .then((userCredential) => {
                // Signed in
                const user = userCredential.user;
                useruid=user.uid
                /**Aqui capturo del objeto user el .uid y el .email y lo meto en la coleccion "user"* **/
                setDoc (doc(db,"User",user.uid),{
                email: email,
                uid : useruid ,
                score : score

                });
                    // ...
                alert("Loguin Correcto Bienvenido al Quiz")
            
                        //location.reload();
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    console.log(errorCode+errorMessage)
                    alert("Cuenta o contaseña Incorrecta")
            });
          
})




/*PARA CAPTURAR EL ID DEL JUGADOR EN CURSO Y SETEARLE LA PUNTUACION AL FINAL


const UpdateScore = doc(db, "User", "iZUZjQhnEGN0dyZwPfnQASGyBZX2");
await updateDoc(UpdateScore, {
  score: 6
});*/



/*PARA TRAER LOS NOMBRES Y PUNTUACIONES PARA LA GRAFICA*/
let nombre=''
let scorebck=''
let data=[]
const querySnapshot = await getDocs(collection(db, "User"));
querySnapshot.forEach((doc) => {
  // doc.data() is never undefined for query doc snapshots
  
   
   nombre=doc.data().email
   scorebck = doc.data().score; 
   console.log(nombre,scorebck)

 // return nombre,score
});



//console.log("Fin  firebase");


/*
const q = querySnapshot(collection(db, "user"), where("uid", "==", true));

 querySnapshot = await getDocs(q);
querySnapshot.forEach((doc) => {
  // doc.data() is never undefined for query doc snapshots
  console.log(doc.id, " => ", doc.data());
});
*/
// const openQuestions2 = () =>{
//     document.getElementById('start').addEventListener('click',() =>{
      
//         const UpdateScore = doc(db, "User", "iZUZjQhnEGN0dyZwPfnQASGyBZX2");
//         await updateDoc(UpdateScore, {
//           score: 6
//         });
//     })
// }
// openQuestions2()
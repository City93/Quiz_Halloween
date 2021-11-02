// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.1.2/firebase-app.js";
import { getFirestore, collection, limit,query,getDocs,setDoc, doc,addDoc,updateDoc, deleteField,getDoc ,where} from 'https://www.gstatic.com/firebasejs/9.1.2/firebase-firestore.js';
import { getAuth,createUserWithEmailAndPassword,signInWithEmailAndPassword,sendEmailVerification } from 'https://www.gstatic.com/firebasejs/9.1.2/firebase-auth.js';

let usuario;
let score;
const urlApi=('');

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


/*leer una coleccion de firebase*/
const q=query(collection(db,"User"),limit(10));
let rankinUrl="";
let grapichsEmail=[];
let graficScore=[];

const querySnapshot=await getDocs(q);
//para entrar al usuario y su partida
querySnapshot.forEach(doc =>{
  rankinUrl=doc.data()
  grapichsEmail.push(rankinUrl.email)
  graficScore.push(rankinUrl.score)
console.log(rankinUrl)

});
console.log(grapichsEmail)
console.log(graficScore)

//grafica

  const data = {
      labels: grapichsEmail,
      series: [graficScore]
  };
  
const options = {
  seriesBarDistance: 5,
  onlyInteger: true, //para que muestre solo numeros enteros
  width: 500,
  height: 350
 
};
    
const responsiveOptions = [
  ['screen and (min-width: 641px) and (max-width: 1024px)', {
      seriesBarDistance: 15,
      axisX: {
        labelInterpolationFnc: function (value) {
          return value;
        }
      }
}],
    ['screen and (max-width: 640px)', {
      seriesBarDistance: 15,
      axisX: {
        labelInterpolationFnc: function (value) {
          return value[0];
        }
      }
    }]
  ];
  


//llamamos a la función Bar para inicializar un gráfico de barras. Como primer parámetro pasamos un selector donde nos gustaría crear nuestro gráfico y como segundo parámetro pasamos nuestro objeto de datos.//
new Chartist.Bar('.ct-chart', data, options, responsiveOptions);

// funcion para eliminar datos de la grafica y hacerla dinamica
/*function detach() {
  // Only detach if initialization already occurred on this chart. If this chart still hasn't initialized (therefore
  // the initializationTimeoutId is still a valid timeout reference, we will clear the timeout
  if(!this.initializeTimeoutId) {
    window.removeEventListener('resize', this.resizeListener);
    this.optionsProvider.removeMediaQueryListeners();
  } else {
    window.clearTimeout(this.initializeTimeoutId);
  }

  return this;
}*/
  
 
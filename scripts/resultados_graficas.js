/*variables que vamos a utilizar //

let usuario;
let score;
const urlApi=('');

/*Fetch para traer datos de Firebase
async function inforanking(){
  let films = await fetch(`${urlApi}//`)
      .then(res=>res.json()) //la pasa a Json
      .then(response => { //Nos traemos el Json
          console.log(response)
          for (let i=0; i<response.results.length; i++){ //creamos un bucle for  para pasar por todos los titulos
              usuario.push(response.results[i].title)//Tenemos que para el push para incluir titulo
              score.push(response.results[i].release_date.substring(0,4)) // año pelicula
              
          }  
          graphic (usuario,score) //
      }) 
      .catch(error=>console.log(error));
  }

      

inforanking()*/


// Create a simple line chart
const data = {
    // A labels contiene la puntuacion
    labels: ['Maria', 'Pepe', 'Juan','Roci'],
    // Our series contiene las preguntas
    series: [
      [1,2,3,4,5,6,7,8,9,10]
    ]
  };
  
  // tamaño de la grafica
  const options = {
    width: '500px',
    height: '300px'
  };
  
  // 
//En el espacio de nombres global Chartist, llamamos a la función Line para inicializar un gráfico de líneas. Como primer parámetro, pasamos un selector donde nos gustaría crear nuestro gráfico. El segundo parámetro es el objeto de datos real y como tercer parámetro pasamos nuestras opciones
  new Chartist.Line('.ct-chart', data, options);
 
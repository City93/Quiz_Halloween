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



  let data = {
    labels: ['Maria', 'Ppe', 'Juno'],
      series: [
      [0, 1, 2, 3, 4, 5, 6, 7],
     
    ]
  };
  
  let options = {
    seriesBarDistance: 15
  };
  
  let responsiveOptions = [
    ['screen and (min-width: 641px) and (max-width: 1024px)', {
      seriesBarDistance: 10,
      axisX: {
        labelInterpolationFnc: function (value) {
          return value;
        }
      }
    }],
    ['screen and (max-width: 640px)', {
      seriesBarDistance: 5,
      axisX: {
        labelInterpolationFnc: function (value) {
          return value[0];
        }
      }
    }]
  ];
  
  new Chartist.Bar('.ct-chart', data, options, responsiveOptions);
//grafica de la puntuacion //


// Create a simple line chart
const data = {
    // A labels contiene la puntuacion
    labels: [1,2,3,4,5,6,7,8,9,10],
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
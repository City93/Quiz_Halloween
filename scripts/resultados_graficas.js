/*leer una coleccion de firebase
const q=query(colecction(db,"UserQuiz));
let ranqkinUrl;
let grapichsDate;
let graficpoints;

const querySnapshot=await getDocs(q);

querySnapshot.forEach(doc) => {
  ranqkinUrl=doc.data ()
  grapichsDate.push(ranqkinUrl.date)
  grapichsDate.push(ranqkinUrl.goodAnswers)

});*/

var data = {
    labels: ['Maria', 'Pepe', 'Lui','Momo'],
    series: [
    [10,8,3,5],
   
  ]
};

var options = {
  seriesBarDistance: 15,
    width: 450,
    height: 250,
    
    
  };
  


var responsiveOptions = [
  ['screen and (min-width: 641px) and (max-width: 1024px)', {
    seriesBarDistance: 5,
    axisX: {
      labelInterpolationFnc: function (value) {
        return value;
      }
    }
  }],
  ['screen and (max-width: 640px)', {
    seriesBarDistance: 3,
    axisX: {
      labelInterpolationFnc: function (value) {
        return value[0];
      }
    }
  }]
];

new Chartist.Bar('.ct-chart', data, options, responsiveOptions);
  
 
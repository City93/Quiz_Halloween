// Event listener que cambia el display de intro y preguntas para simular SPA

const openQuestions = () =>{
    document.getElementById('start').addEventListener('click',() =>{
        document.getElementById('div_enter').style.display = 'none'

        document.getElementById('div_questions').style.display = 'flex'
        document.getElementById('main').style.backgroundImage = 'url("../assets/images/calabaza.jpg")';

        

    })
}
openQuestions()

//Fetch para recoger informacion de la API

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
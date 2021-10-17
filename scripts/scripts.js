// Event listener que cambia el display de intro y preguntas para simular SPA

const openQuestions = () =>{
    document.getElementById('start').addEventListener('click',() =>{
        document.getElementById('div_enter').style.display = 'none'
        document.getElementById('div_questions').style.display = 'flex'
    })
}
openQuestions()
document.getElementById('bottom_index').addEventListener('click', () => nextQuestion())

//Fetch para recoger informacion de la API

let respuestas = []
const endpoint = 'https://opentdb.com/api.php?amount=10&difficulty=medium&type=multiple'
const getInfo = async () =>{
    const data = await fetch(endpoint)
    const json = await data.json()
    // console.log(json.results[0].incorrect_answers)
    let preguntas = []
    let respuestas = []
    for(let i = 0; i < json.results.length ; i++){
       preguntas.push(json.results[i].question)
       respuestas.push(json.results[i].incorrect_answers)
       respuestas[i].push(json.results[i].correct_answer)
    }
    
    return infoAPI = {respuestas,preguntas}
}

//Impresion de respuestas y preguntas

getInfo()
    .then(infoAPI =>{
        document.getElementById('question').innerText = infoAPI.preguntas[1]
        document.getElementById('q1').innerText = infoAPI.respuestas[0][0]
        document.getElementById('q2').innerText = infoAPI.respuestas[0][1]
        document.getElementById('q3').innerText = infoAPI.respuestas[0][2]
        document.getElementById('q4').innerText = infoAPI.respuestas[0][3]
        // console.log(infoAPI.respuestas[1])
    }
        )

const openQuestions = () =>{
    document.getElementById('start').addEventListener('click',() =>{
        document.getElementById('div_questions').style.display = 'default'
        document.getElementById('div_enter').style.display = 'none'
    })
}
openQuestions()
document.getElementById('bottom_index').addEventListener('click', () => nextQuestion())
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

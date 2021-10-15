const openQuestions = () =>{
    document.getElementById('start').addEventListener('click',() =>{
        document.getElementById('div_enter').style.display = 'none'
        document.getElementById('div_questions').style.display = 'inherit';
    })
}
document.getElementById('bottom_index').addEventListener('click', () => nextQuestion())
let respuestas = []

const endpoint = 'https://opentdb.com/api.php?amount=10&difficulty=medium&type=multiple'
const getInfo = async () =>{
    const data = await fetch(endpoint)
    const json = await data.json()
    console.log(json.results[0].incorrect_answers)
    let preguntas = []
    let respuestas = []
    for(let i = 0; i < json.results.length ; i++){
       preguntas.push(json.results[i].question)
       respuestas.push(json.results[i].incorrect_answers)
       respuestas.push(json.results[i].correct_answer)
    }
    
    console.log(respuestas)
}
getInfo()
//     .then(data =>
//         console.log(data))

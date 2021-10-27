// Event listener que cambia el display de intro y preguntas para simular SPA
localStorage.setItem('score', '0')
const openQuestions = () =>{
    document.getElementById('start').addEventListener('click',() =>{
        document.getElementById('div_enter').style.display = 'none'
        document.getElementById('div_questions').style.display = 'inherit'
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
    
    return infoAPI = {respuestas,preguntas, correctas}
}

//Impresion de respuestas y preguntas
let answerUser = []
let score = 0
getInfo()
.then(infoAPI =>{
        // console.log(infoAPI)
        let contador = 0;
        for(let i = 1; i < 20; i++){
            document.getElementById('question').innerHTML = infoAPI.preguntas[0]
            document.getElementById('q1').innerHTML = infoAPI.respuestas[0][0]
            document.getElementById('q2').innerHTML = infoAPI.respuestas[0][1]
            document.getElementById('q3').innerHTML = infoAPI.respuestas[0][2]
            document.getElementById('q4').innerHTML = infoAPI.respuestas[0][3]
            document.getElementById(`q${i}`).addEventListener('click', () =>{
                answerUser.push(document.getElementById(`q${i}`).innerHTML)
                // console.log(infoAPI.correctas)
                if(contador < 9){
                    contador++
                document.getElementById('question').innerHTML = infoAPI.preguntas[contador]
                document.getElementById('q1').innerHTML = infoAPI.respuestas[contador][0]
                document.getElementById('q2').innerHTML = infoAPI.respuestas[contador][1]
                document.getElementById('q3').innerHTML = infoAPI.respuestas[contador][2]
                document.getElementById('q4').innerHTML = infoAPI.respuestas[contador][3]
                console.log(contador)
                } else{
                    document.getElementById('div_questions').style.display = 'none'
                    document.getElementById('div_results').style.display = 'inherit'
                    console.log(infoAPI.correctas)
                    console.log(answerUser)
                    localStorage.setItem('score', JSON.stringify({
                        score: infoAPI.correctas.map((el,i) => {
                            if(el == answerUser[i]){
                                return true
                            } else {
                                return false
                            }
                        }).filter(Boolean).length
                    }))
                    infoAPI.correctas.map((el,i) => {
                        if(el == answerUser[i]){
                            return true
                        } else {
                            return false
                        }
                    }).filter(Boolean).length
                }
                document.getElementById('question').addEventListener('click', () =>{
                })

            })     
        }
        // console.log(infoAPI.respuestas[1])
    }
        )


console.log('esto es score-->' + score)

// let array1 = ['cosa1', 'cosa2', 'cosa3']
// let array2 = ['cosa1', 'cosa2', 'cosa3']
// let resultado = array1.map((el,i) => {
//     if(el == array2[i]){
//         return true
//     } else {
//         return false
//     }
// }).filter(Boolean).length

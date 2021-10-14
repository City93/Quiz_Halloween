const openQuestions = () =>{
    document.getElementById('start').addEventListener('click',() =>{
        document.getElementById('div_enter').style.display = 'none'
        document.getElementById('div_questions').style.display = 'inherit';
    })
}
openQuestions()
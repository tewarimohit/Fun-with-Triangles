const quizForm=document.querySelector('.quiz-form');
const btnselector=document.querySelector('#click-btn');
const outputMessage=document.querySelector('#output-msg');
const correctAnswers=['90°','Right Angled'];

btnselector.addEventListener('click', function calculateScore() {

    var score=0;
    var index=0 ;
    const data = new FormData(quizForm);
    for(var value of data.values()){
    if(value===correctAnswers[index]){
score=score+1;

    }
    index=index+1;


           }
           outputMessage.innerText="Your Score is :-  "+score;

});


// for(let entry of data.entries()){
//    console.log(entry)
//}
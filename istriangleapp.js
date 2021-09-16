const inputAngle=document.querySelectorAll('.angle-input');
const checkButton=document.querySelector('#check-btn');
const outputMessage=document.querySelector('#output-msg');

checkButton.addEventListener('click', function inputHandler() {
    var sum=0;
     sum=parseInt(inputAngle[0].value)
     +parseInt(inputAngle[1].value)+parseInt(inputAngle[2].value);
if(inputAngle[0].value||inputAngle[1].value||inputAngle[2].value){
if(sum===180){
  
    outputMessage.innerText="Yes, it is a Triangle.🔺 🤩";
}
else{
  
    outputMessage.innerText="It is not a Triangle.😥";
}
}else{
    outputMessage.innerText="Please input the Angles.😭";
}

});
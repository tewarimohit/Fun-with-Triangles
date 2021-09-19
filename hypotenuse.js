const inputSides= document.querySelectorAll('.sides');
const inputButton=document.querySelector('#hypotenuse-calc');
const outputMessage=document.querySelector('#output-msg');

inputButton.addEventListener('click', function eventHandler() {

const a=Number(inputSides[0].value);
const b=Number(inputSides[1].value);
const sumOfSides=a*a+b*b;
const c=Math.sqrt(sumOfSides);
outputMessage.innerText="The length of Hypotenuse is :- "+c;


});
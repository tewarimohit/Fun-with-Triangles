const triangleBase=document.querySelector('#base');
const triangleHeight=document.querySelector('#height');
const areaButton=document.querySelector('#area-calc');
const outputMessage=document.querySelector('#output-msg');

areaButton.addEventListener('click', function eventHandler() {

    const base=Number(triangleBase.value);
    const height=Number(triangleHeight.value);
    const area=1/2*(base*height);

outputMessage.innerText="Area of Triangle is :- "+area;



});
let height=document.getElementById('height');
let weight=document.getElementById('weight')
let button=document.getElementById('button');

let score=document.getElementById('score');
let result=document.querySelector('.result');

button.addEventListener('click',function() {
let newHeight=parseFloat(height.value);
let newHeight=parseFloat(weight.value);
newHeight=newHeight/100;
let sqrHeight=newHeight * newHeight;

let bmi=newWeight / sqrHeight;
score.textContent =bmi.toFixes(2);
result.computedStyleMap.display='block';
});

if(score.textConteny <18.6){
score.style.background="#ffeaa7";
} else if(score.textConteny<24.9) {
    score.style.background="#ffeaa7";
}else{
score.style.background="#d63031"
}



let form=documentById('form');
form.addEventListener('submit',function(e){
    e.preventDefault();
});

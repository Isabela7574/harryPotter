function check(){
   
   


var Harry = 0 ;
var Ron =  0;
var Hermione = 0;
var Malfoy = 0;


var question1 = document.quiz.question1.value;
var question2 = document.quiz.question2.value;
var question3 = document.quiz.question3.value;
var question4 = document.quiz.question4.value;
var question5 = document.quiz.question5.value;
var question6 = document.quiz.question6.value;
var question7 = document.quiz.question7.value;

 
if (question1=="Fear"){
     Harry = Harry + 1;
}else if(question1=="Spiders"){ 
     Ron = Ron + 1;
}else if(question1=="Failing a Test"){
     Hermione = Hermione + 1;
}else{
     Malfoy = Malfoy + 1;
}


if (question2=="Hanging out with friends"){
     Harry = Harry + 1;
}else if(question2=="Playing games"){ 
     Ron = Ron + 1;
}else if(question2=="Reading"){
     Hermione = Hermione + 1;
}else{
     Malfoy = Malfoy + 1;
}

if (question3=="Red"){
     Harry = Harry + 1;
}else if(question3=="Yellow"){ 
     Ron = Ron + 1;
}else if(question3=="Purple"){
     Hermione = Hermione + 1;
}else{
     Malfoy = Malfoy + 1;
}

if (question4=="Deer"){
     Harry = Harry + 1;
}else if(question4=="Dog"){ 
     Ron = Ron + 1;
}else if(question4=="Otter"){
     Hermione = Hermione + 1;
}else{
     Malfoy = Malfoy + 1;
}

if (question5=="Science"){
     Harry = Harry + 1;
}else if(question5=="Foreign Language"){ 
     Ron = Ron + 1;
}else if(question5=="History"){
     Hermione = Hermione + 1;
}else{
     Malfoy = Malfoy + 1;
    
}

if (question6=="Chocolate"){
     Harry = Harry + 1;
}else if(question6=="Jelly Beans"){ 
     Ron = Ron + 1;
}else if(question6=="Gummies"){
     Hermione = Hermione + 1;
}else{
     Malfoy = Malfoy + 1;
}

if (question7=="Harry Potter"){
     Harry = Harry + 1;
}else if(question7=="Ron Weasley"){ 
     Ron = Ron + 1;
}else if(question7=="Hermione Granger"){
     Hermione = Hermione + 1;
}else{
     Malfoy = Malfoy + 1;
}

//Check Singles 
if (Harry > Ron && Harry > Hermione && Harry > Malfoy) {
    alert("You are Harry Potter!");
} else if (Ron > Harry && Ron > Hermione && Ron > Malfoy) {
   alert("You are Ron Weasley!");
} else if(Hermione > Harry && Hermione > Ron &&  Hermione > Malfoy) {
   alert("You are Hermione Granger!");
} else if(Malfoy > Harry && Malfoy > Hermione && Malfoy > Ron) {
    alert("You are Malfoy!");
} else if (Harry > Ron && Harry == Hermione && Harry > Malfoy) {
   alert("You are Harry and Hermione's child! "); 
} else if(Harry >= Ron && Harry > Hermione && Harry > Malfoy) {
   alert("You are Harry and Ron's child!"); 
} else if(Harry > Ron && Harry > Hermione && Harry == Malfoy) {
    alert("You are Harry and Malfoy's child!");
} else if (Ron > Harry && Ron == Hermione && Ron > Malfoy) {
   alert("You are Ron and Harry's child! "); 
} else if(Ron >= Harry && Ron > Hermione && Ron > Malfoy) {
   alert("You are Ron and Hermione's child!"); 
} else if(Ron > Harry && Ron > Hermione && Ron == Malfoy) {
    alert("You are Ron and Malfoy's child!");
} else if (Hermione > Harry && Hermione == Ron && Hermione > Malfoy) {
   alert("You are Hermione and Harry's child! "); 
} else if(Hermione >= Harry && Hermione > Ron && Hermione > Malfoy) {
   alert("You are Hermione and Ron's child!"); 
} else if(Hermione > Harry && Hermione > Ron && Hermione == Malfoy) {
    alert("You are Hermione and Malfoy's child!");
} else if (Malfoy > Harry && Malfoy == Ron && Malfoy > Hermione) {
   alert("You are Malfoy and Harry's child! "); 
} else if(Malfoy >= Harry && Malfoy > Ron && Malfoy > Hermione) {
   alert("You are Malfoy and Ron's child!"); 
} else if(Malfoy > Harry && Malfoy > Ron && Malfoy == Hermione) {
    alert("You are Malfoy and Hermione's child!");
}

}

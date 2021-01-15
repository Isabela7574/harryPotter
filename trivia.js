
function check() {
    var correct = 0 ;
    
    //storing user answers 
    var question1 = document.quiz.question1.value;
    var question2 = document.quiz.question2.value;
    var question3 = document.quiz.question3.value;
    var question4 = document.quiz.question4.value;
    var question5 = document.quiz.question5.value;
    var question6 = document.quiz.question6.value;
    var question7 = document.quiz.question7.value;
    var question8 = document.quiz.question8.value;
    var question9 = document.quiz.question9.value;
    var question10 = document.quiz.question10.value;
 
    //checking user answers
    if (question1=="7"){
         correct++;
    }
    if (question2=="7"){
         correct++;
    }
    if (question3=="fat friar" || question3 == "the fat friar"){
         correct++;
    }
    if (question4=="Harry Potter and the Deathly Hollows Part 1"){
         correct++;
    }
    if (question5=="Gillyweed"){
         correct++;  
    }
    if (question6=="142"){
         correct++;
    }
    if (question7=="Gold"){
         correct++;
    }
    if (question8=="150mph"){
         correct++;
    }
    if (question9=="Arnold"){
         correct++;
    }
    if (question10=="tom riddle"){
         correct++;
    }

    //alert("Number Correct:" + correct + "/10" );
    
    //printing out result
    document.getElementById("result").innerHTML = "Congratulations, your score is " + correct + "/10!";
    
    
    
}

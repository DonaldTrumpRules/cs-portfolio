var StephenCurry = document.getElementById("StephenCurry");
var SteveNash = document.getElementById("SteveNash");
var Question = document.getElementById("Question")
var Answer1 = document.getElementById("Answer1")
var Answer2 = document.getElementById("Answer2")
StephenCurry.addEventListener ("click", function(){
    Answer1.innerHTML = "Stephen Curry free throw perentage is .905" 
    
});


SteveNash.addEventListener ("click", function(){
   Answer2.innerHTML = "SteveNash free throw perentage is 90.43%"
})

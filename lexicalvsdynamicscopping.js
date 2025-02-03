var teacher = "Harsh";  // teacher -> global scope 
function ask(question){    // ask -> global 
    console.log(teacher,question);
}
function fun(){
    var teacher = "Pulkit";    // teacer -> fun scope  --> pulkit
    ask("why");
}
fun();



// in the case of dynamic scoping , the output would be 'Pulkit why'
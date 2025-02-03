var teacher = "Sanket";   // gloabal scope    teacher -> sanket
function fun(){
    console.log(teacher);
    var teacher = "Pulkit";    // fun scope
    let content ="JS";         // fun scope
    if(content== "JS"){
        let hours = "120+";       // block scope
        console.log(content,hours);
    }
    console.log(teacher,content);
}
fun();
console.log(teacher);
//console.log(content);


// 120+ ,Pulkit , JS
//Sanket
// not defined
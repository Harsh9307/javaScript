var teacher = "Sanket";   // gloabal scope    teacher -> sanket
function fun(){
    var teacher = "Pulkit";    // fun scope
    let content ="JS";         // fun scope
    if(content== "JS"){
        let hours = "120+";       // block scope
        console.log(hours);
    }
    console.log(teacher,content);
}
fun();
console.log(teacher);
console.log(content);


// 120+ ,Pulkit , JS
//Sanket
// not defined
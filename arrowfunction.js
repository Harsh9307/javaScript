// arrow function = compact alternative to a tradiotional fucntion
// =>
//------------------------------
const greeting =(userName)=>{
    console.log(`Hello ${userName}`);
}

greeting("Harsh");
//------------------------------------
const percent = (x,y) => x/y *100;

console.log(`${percent(45,50)} %`);

//-------------------------------
//tradional way
let grades = [100,50,90,60,80,70];

grades.sort(descending);
grades.forEach(print);

function descending(x,y){
    return y-x;
}

function print(element){
    console.log(element);
} 
//-----------------------------
//arrow function
grades.sort((x,y) => y-x);
grades.forEach(element =>console.log(element));

//-----------------------------------



// the readability of the code base increases with named function expression.

function fun(fn){
    console.log('Wecome to fun');
    fn();
}

fun(function askingAboutFun(){
    console.log('Wow so much fun');
})

function factorial(n){
    return n<=1 ? 1: factorial(n-1)*n;
}

[1,2,3,4,5].map(factorial);


// for recursive cases , named function expression are also helpful
[1,2,3,4,5].map(function factorial(n){
    return n<=1 ? 1: factorial(n-1)*n;
})



(function x(){
    console.log('HI');
})();


function f(){
    return 1;
}
function g(){
    return 2;
}
var i=10;
var res = (function evaluate(){
    if(i %2 == 0) return f();
    else return g();
})(i);
console.log(res);
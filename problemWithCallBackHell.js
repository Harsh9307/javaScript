/**
 * 1. Inversion of Control
 * 2. CallBack hell -> readability problem
 */

let arr =[1,10,1000,9,2,3,11];
arr.sort(function cmp(a,b){
    return a-b;
})

function doTask(fn,x){
    //whole implementation is done by team A

    fn(x*x);
    fn(x*x);
}
doTask(function(num){  // due to callbacks, I am passing control of how exec should be called to doTask
    console.log("Woah num is :",num);
},9)
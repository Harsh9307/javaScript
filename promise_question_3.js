function blocking_for_loop(){
    for(let i=0;i<100000000;i++){
        //something
    }
}
console.log("Start of the file");
setTimeout(function timer1(){
    console.log("Timer 1 done");
},0);
blocking_for_loop();
let x =  Promise.resolve("Sanket's promise1");
x.then(function processPromise(value){
    console.log("whose promise ?",value);
    blocking_for_loop();
});
let y= Promise.resolve("sanket's promise 2");
y.then(function processPromise(value){
    console.log("whose promise ?",value);
    setTimeout(function(){ console.log("ok done")},0);
});

let z = Promise.resolve("Sanket's promise 3");
z.then(function processPromise(value){
    console.log("whose promise ?",value);
});

setTimeout(function timer2(){
    console.log("Timer 2 done");
},0);
console.log("End of the file");



/**
 * start of the file
 * pause for 10 sec
 * end of the file
 * whose's promise Sanket Promise 1 
 * pause for 10 s
 * whose's promise sanket Promise 2
 * whose's promise sanket Promise 3
 * Timer1 done
 * Timer 2 done
 * ok done
 * 
 * runtime -> 
 * callback queue -> , , ()
 * macrotask ->  ,  ,  ,
 */
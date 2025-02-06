console.log("start of the file ");

setTimeout(function timer1(){
    console.log("Timer 1 done");
},0);

for(let i=0;i<1000000000;i++){
    //something
}

let x =  Promise.resolve("Sanket's promise");
x.then(function processPromise(value){
    console.log("whose promise ? ",value);
})

setTimeout(function timer2(){
    console.log("timer 2 done");
},0);

console.log("End of the file ");












/**
 * start of the file 
 * stop for 10 sec
 * end of the file
 * whose promise sanket's promise
 * timer1 done 
 * timer2 done
 * 
 * 
 * 
 * runtime ->  
 * callback queue -> timer1 , timer2
 * microtask queue -> processPromise
 * 
 */
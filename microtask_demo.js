function createPromise(){
    return new Promise(function exec(resolve, reject){
        setTimeout(function (){
            console.log("rejecting the promise");
            reject("Done");
            
        },1000);     
        
    });
}



let p = createPromise();

p.then(function fullfilmentHandler(value){
    console.log("we fulfilled with a value",value);
},function rejectionHandler(value){
    console.log("we reject 1 with value",value);
});
p.then(function fullfilmentHandler1(value){
    console.log("we fulfilled with a value",value);
},function rejectionHandler(value){
    console.log("we reject 2 with value", value);
});


for(let i=0;i<100000000000;i++) {}

console.log("ending");


/**
 * what happens is when your promise is resolved or rejected , the handlers present in the fullfillment array or rejectionHandler array , they are not 
 * immediately executed, 
 * after the promise is resolved or rejected , the handlers goes in the microtask queue and wait for the signal from event loop, once the call stack is empty 
 * and the global code is empty , the microtask queue is executed
 * event loop prioritizes microtask queue over event queue
 */
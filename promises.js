// readability enhancers
/**
  *  helps to solve problems of inversion of control
  
  * in JS, Promises are special type of objects that get returned immediately when we call them.

  * Promise act as a placeholder for the data we hope to get back in the future

  * x= fetch("www.xyz.com") --> downloading some data    // fetch is a runtime feature
    assume that this fetch is written using promises then , it will immedidately return a promise object which will act as a *placeholder* --> for the result

   *  in these promise objects we can attach the functionality we want to execute once the future task is done
    once the future task is done , the promises will automitically execute the attached fucntionality

    eg : lets suppose I am downloading some movies and I want to print the names of the movies , I can name the movies after I download it 
    and lets suppose it takes 5 sec to download , so the promise will return some placeholder value for the time being.

    in case of callbacks , i need to attach the functionality immediately after the task is done
    for eg : fetch("www.xyz.com", function exec(){
        consol.log("done");        
    })
    but in case of promises , I can execute some code and then can handle this.

    --> how to create a promise ?
    --> how to consume the promise?

    Creation of promise object is synchronous in nature

    3 types of states:
    1. Pending --> when we create a new object , this is the default state --> it represents the work in progress
    2. Fullfilled --> if the operation is completed successfully
    3. Rejectected  --> if the operation is not successful

    new Promise(function(resolve, reject){
        // inside this function we can write our time consuming tasks
    })
    whenenver in the ecexutor callback , you will call the resolve function ,the promise goes to a fulfilled state
    if you call the reject function, it goes to a rejected state

    if the state is pending , the value property of the promise will be undefined
    if the state is fulfilled , the value property of the promise will be updated with the arguement of resolve

    How to consume a promise ?
    p.then(fulfillmenthandler, rejectionhandler)   these are handler function , that we have to implement ourselves 
  */

function getRandomInt(max){
    return Math.floor(Math.random()*max);
}
// function createPromiseWithLoop(){
//     return new Promise(function executor(resolve, reject){
//         for(let i=0;i<1000000000;i++){}
//         let num = getRandomInt(10);
//         if(num %2==0){
//             resolve(num);
//         }else{
//             reject(num);
//         }
//     })
// }

function createPromiseWithTimeout(){
    return new Promise(function executor(resolve, reject){
        console.log("Entering the executor callback in the promise constructor");
        setTimeout(function (){
            //for(let i=0;i<1000000000;i++){}
            let num = getRandomInt(10);
            if(num %2==0){
                resolve(num);
            }else{
                reject(num);
            }
        },1000);
        console.log("Exiting from the executor callback");      
    })
}
console.log("starting");
const p= createPromiseWithTimeout();
console.log("We are now waiting for the promise");
console.log("Registering my 1st set of handlers.");
p
.then(
    function fulfillHandler1(value){
        console.log("Inside fulfill Handler 1with value ",value);
        console.log("Promise after fulfillment is ",p);
        setTimeout( function t() { console.log("ended 0s timer")},0);
        console.log("exiting the fullfilment handler 1");
}, function rejectionHandler1(value){
        console.log("Inside rejection handler1 with value",value); 
        console.log("Promise after rejection is ",p);
        setTimeout( function t() { console.log("ended 0s timer")},0);
        console.log("exiting the rejection handler 1");
})
console.log("registering my second set of handlers");
p
.then(
    function fulfillHandler2(value){
        console.log("Inside fulfill Handler2 with value ",value);
        console.log("Promise after fulfillment is ",p)
}, function rejectionHandler2(value){
        console.log("Inside rejection handler2 with value",value); 
        console.log("Promise after rejection is ",p)
})
console.log("Ending....");
setTimeout(function(){console.log("Global timer of 0s");},0);

// for(let i=0;i<10000000000;i++){}
// console.log("Ending the loop also"); 

function createPromise(){
    return new Promise(function exec(resolve , reject){
        let x = setTimeout(function giveValue(){
            return 2;
        },3000);
        if(x%2==0){
            resolve("successfull");
        }
        else{
            reject("rejected");
        }
    })
}
// in node runtime environment , x will be a object


// readability enhancers
/**
  *  helps to solve problems of inversion of control
  
  * in JS, Promises are special type of objects that get returned immediately when we call them.

  * Promise act as a placeholder for the data we hope to get back in the future

  * x= fetch("www.xyz.com") --> downloading some data
    assume that this fetch is written using promises then , it will immedidately return a promise object which will act as a *placeholder* --> for the result

   *  in these promise objects we can attach the functionality we want to execute oce the future task is done
    once the future task is done , the promises will automitically execute the attached fucntionality

    --> how to create a promise ?
    --> how to consume the promise?

    Creation of promise object is synchronous in nature

    3 types of states:
    1. Pending --> when we create a new object , this is the default state --> it represents the wokr in progress
    2. Fullfilled --> if the operation is completed successfully
    3. Rejectected  --> if the operation is not successful

    new Promise(function(resolve, reject){
        // inside this function we can write our time consuming tasks
    })
    whenenver in the ecexutor callback , you will call the resolve function ,the promise goes to a fulfilled state
    if you call the reject function, it goes to a rejected state

    if the state is pending , the value property of the promise will be undefined
    if the state is fulfilled , the value property of the promise will be updated with the arguement of resolve
 */

function getRandomInt(max){
    return Math.floor(Math.random()*max);
}
function createPromiseWithLoop(){
    return new Promise(function executor(resolve, reject){
        for(let i=0;i<1000000000;i++){}
        let num = getRandomInt(10);
        if(num %2==0){
            resolve(num);
        }else{
            reject(num);
        }
    })
}
let x= createPromiseWithLoop();
console.log(x)
function square(el)
{
    return el*el;
}
function cube(el)
{
    return el*el*el;
}

function evenOdd(x)
{
    if (x%2==0) return "Even";
    else return "Odd";
}

const arr=[1,2,3,4,5];

const result = arr.map(square);
console.log(result);

const cubeResult = arr.map(cube);
console.log(cubeResult);

const isEvenOddResult = arr.map(evenOdd);
console.log(isEvenOddResult);

const newArr = [9,8,7,4,5];

/**
 * 
 * if the function that we are passing in map takes two aruguements 
 * then first arguements will be accessible the actual value
 * second aruements will be accessing inddex of that value
 */

function print(element,idx){
    return `Element at ${idx} is ${element}`;
}
const result2= newArr.map(print);
console.log(result2);


/**
 * When to use maps ?
 * In any situations when we have to do a operation on every element of the array
 * and store the result of each operation
 * map can be a good option
 * 
 * for example 
 * array of product objects
 * 
 */

function customMapper(arr,func){
    let result =[];
    for(let i=0;i<arr.length;i++){
        result.push(func(arr[i],i));
    }
    return result;
}
const value = customMapper(newArr,print);
console.log(value);


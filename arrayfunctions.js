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

const arr=[1.,2,3,4,5];

const result = arr.map(square);
console.log(result);

const cubeResult = arr.map(cube);
console.log(cubeResult);

const isEvenOddResult = arr.map(evenOdd);
console.log(isEvenOddResult);

const newArr = [9,8,7,4,5];

function print(element,idx){
    return `Element at ${idx} is ${element}`;
}
const result2= newArr.map(print);
console.log(result2);


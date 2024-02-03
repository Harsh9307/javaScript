function oddEven(x){
    return (x%2==0);
}
let arr =[1,2,3,4,5];
const result= arr.filter(oddEven);
console.log(result);

/**
 * reduce is also a higher order function
 * reduce also takes function f as an argument, it one by one goes to every element in the array
 */
function sum(prevResult, currValue){
    return prevResult+currValue;
}
const result2 =arr.reduce(sum);
console.log(result2);

function addPrices(prevResult, currValue)
{
    console.log(prevResult,currValue);
    let newPrice = prevResult.price+currValue.price;
    return {price:newPrice};
}
let cart=[{price:100000,name:"iphone"},{price:2000,name:"cover"},{price:3000,name:"charger"}];
const totalPrice =cart.reduce(addPrices);
console.log(totalPrice);
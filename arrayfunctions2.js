/**
 * 
 * Filter function
 * Filter is also a higher order function
 * Filter also loops over the array element
 * there is one special thing about filter, i.e. the arguement function f which we have to pass inside 
 * filter should always return a booleans , otherwise output will be converted to boolean 
 * 
 * Filter loops over evry element, passes that element in the arguemnt function and then if the output of the function call 
 * is true , then it stores the original element in a new array otherwise
 * doesn't add this element to the array
 */

function oddEven(x){
    return (x%2==0);
}
let arr =[1,2,3,4,5];
const result= arr.filter(oddEven);
// console.log(result);S

/**
 * reduce is also a higher order function avialble for arrays
 * reduce also takes function f as an argument, 
 * what reduce does is , it one by one goes to every element in the array
 * say the current element is arr[i] 
 * reduce will pass this element to the function f and accumulate the result of further function calls 
 * with this particular result
 */


function sum(prevResult, currValue){
    return prevResult+currValue;
}
const result2 =arr.reduce(sum);
// console.log(result2);



function addPrices(prevResult, currValue)
{
    console.log(prevResult,currValue);
    let newPrice = prevResult.price+currValue.price;
    console.log(newPrice);
    return {price:newPrice};
}
let cart=[{price:100000,name:"iphone"},{price:2000,name:"cover"},{price:3000,name:"charger"}];
const totalPrice =cart.reduce(addPrices);
console.log(totalPrice);
/**
 * generators are a special type of functions whose execution can be broken in betweeen 
 * for eg: if I have 10 lines of code in generator function 
 * lets say I execute 3 lines , I can break it , do some another work and come back and resume from 3rd line.
 * its not equivalent to break and continue;
 * generator function are written as function* syntax
 * when called , generator functions do not initally execute their code. Instead , they return a special type of iterator
 * called a generator
 * generator functions keeps executing until the yield keyword
 * yield is similar to return but not return 
 */

function* fetchNextElement(){
    console.log("I am inside the generator function");
    yield 1;
    yield 2;
    console.log("somewhere in the middle");
    yield 3;
    yield 4;

}
const iter = fetchNextElement();    // it doesnt start its execution on calling.it returns an iterator.

console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
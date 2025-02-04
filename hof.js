//higher order functions -> there are functions which takes another function as arguements
// these are higher order functions

// function f(x,fn)
// {
//     console.log(x);
//     console.log(fn);
//     fn();
// }


// f(10,function exec(){
//     console.log('I am expression passed to HOF');
// })

let arr =[ 1,10,9,100,1000,11,12,13,14,2,3];  // unsorted array

/*
1 -> A
2 -> B
3-> C
4-> D


*/

console.log(arr.sort());

let b =[ 1,10,9,100,1000,11,12,13,14,2,3]; 

b.sort(function(a,b){
    return a-b;    // if a<b -> a-b will be negative  -> cmp function will give negative -> a will be placed before b
})
console.log(b);

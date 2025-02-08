function* fetchNextElement(){
    const x=10;
    yield 11;
    console.log("entering after a yield");
    const y= x + (yield 30);
    console.log("value of y is",y);
}
const iter = fetchNextElement();
console.log("first",iter.next());
console.log("second",iter.next());
console.log("third",iter.next(13));



/**
 * x=10
 * value: 11 done : false
 * entering after a yield 
 * y=10+ --> it will undefined as it was not computed
 * value : 30 , done : false
 * 
 * 
 */

f(10,function exec(){
    console.log('I am function passed to HOF');
})
function f(x,fn)
{
    console.log(x);
    console.log(fn);
    fn();
}


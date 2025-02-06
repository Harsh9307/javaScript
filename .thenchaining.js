/**
 * .then returns a promise object
 * let x = download("www.xyz.com") assuming download is an promise
 * 
 */

function download(url){
    console.log("started downloading content from ",url);
    return new Promise(function exec(resolve , reject){
        setTimeout(function p(){
            console.log("Completed downloading data in 5s");
            const content = "ABCDEF";
            resolve(content);
        })
    })
};
x=download("www.xyz.com")
x
.then(function fulfillHandler(value){
    console.log("content downloaded is",value);
    return "new promise string";
})
.then(function fulfillHandler(val){
    console.log("value from chained then promise",val);
})
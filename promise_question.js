function fetchData(url){
    return new Promise(function(resolve,reject){
        console.log("started downloading from",url);
        setTimeout(function processDownloading(){
            let data = "Dummy data";
            resolve(data);
            console.log("Download completed");
        },7000);
    })
}
console.log("start");
let promiseObj = fetchData("dasdhsbdjhf");
promiseObj.then(function A(value){    // registers the onfullfilment array 
    console.log("value is",value);
})
console.log("end");



/**
 * start
 * started downloading from
 * end
 * download completed
 * value is Dummy data
 * 
 * 
 * 
 * 
 * promise -> state pending
 *              value undefined
 *              f[]
 *              r[]
 * 
 * runtime -> timer start for 7s
 * callback queue -> processDownloading
 * 
 * callstack > microtask ? callback/ macrotask queue
 * 
 * 
 */
function timeConsumingLoop(){
    console.log("loop starts");
    for(let i=0;i<10000000000;i++){
        // some task 
    }
    console.log("loop ends");
}

function timeConsumeByRuntimeFeature(){
    console.log("Starting timer");
    setTimeout(function exec(){
        console.log("Completed the timer");
    },5000);
}
console.log("Hi");

timeConsumingLoop();
timeConsumeByRuntimeFeature();
timeConsumingLoop();

console.log("By");
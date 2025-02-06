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
        for(let i=0;i< 1000000000;i++){
            //some task
        }
    },5000);
}
function timeConsumeByRuntimeFeature1(){
    console.log("Starting timer1");
    setTimeout(function exec(){
        console.log("Completed the timer1");
        
    },0);
}
function timeConsumeByRuntimeFeature2(){
    console.log("Starting timer2");
    setTimeout(function exec(){
        console.log("Completed the timer2");
        
    },200);
}

console.log("Hi");

timeConsumingLoop();
timeConsumeByRuntimeFeature();
timeConsumeByRuntimeFeature1();
timeConsumeByRuntimeFeature2();
timeConsumingLoop();

console.log("By");

// Hi
// loop starts
// loop ends
// starting timer
// starting timer1
// starting timer2
// By
// completed the timer
// completed the timer1
// completed the timer2


// call stack -> 
// runtime -> timeConsumeByRuntimeFeature
// event queue -> t, timeConsumeByRuntimeFeature1,timeConsumeByRuntimeFeature2
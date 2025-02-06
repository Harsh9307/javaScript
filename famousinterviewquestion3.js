console.log("Hello World");
for(let i=0;i<3;i++){
    setTimeout(function exec(){
        console.log(`Timer ${i} done`);
    },10);
}

for(let i=0;i<10000000000;i++){
    // some task  // 10s
}
console.log("end");


// Hello World 
// gap of 10 sec
// end
// Timer 0 done
// Timer 1 done
// Timer 2 done

// Runtime -> func exec() func exec() func exec()

// event queue -> fun exec() func exec() func exec() 


// console.log()   is also a runtime feature

// you have to also say that considering that console.log() works synchrounously , the above will be the output.
// if it is not treated as synchronous ,it will be treated like any asynchrounous feature




let p1=new Promise((res,rej)=>{
    setTimeout(()=>{
        console.log("before p1")
        res("heyyy11111");
        console.log("p1")
    },3000);
});
 
 
let p2=new Promise((res,rej)=>{
    setTimeout(()=>{
        console.log("before p2");
        res("heyyy22222");
        console.log("p2");
    },7000);
});
 
 
(async () =>{ 
 
    console.log("start"); 
    let ans1=await p1; 
    console.log(ans1);
    let ans2=await p2; 
    console.log(ans2); 
    console.log("end")
 
})();


/**
 * start
 * promise p1 -> state pending , value -> undefined
 * runtime -> timer 3s , 
 */
 
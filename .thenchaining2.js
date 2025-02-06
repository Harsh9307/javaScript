Promise.resolve("foo")
.then((string)=>
    new Promise((resolve,reject)=>{
        setTimeout(()=>{
            string += "bar";
            resolve(string);
        },5000);
    })
)
.then((string)=>{
    setTimeout(()=>{
        string += "baz";
        console.log(string);
    },1);
    return string;
})
.then((string)=>{
    console.log("last then: oops didnt bother to instantiate ad return a promise in the prior then",string)
});
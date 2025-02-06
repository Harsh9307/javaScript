// function download(url, cb){
//     console.log("started downlaoding from url",url);

//     setTimeout(function exec(){
//         console.log("completed downloading after 5s");
//         const content = "ABCDEF";
//         cb(content);
//     },5000);
// }

// download("www.xyz.com",function processDownload(data){
//     console.log("downloaded data is",data);
// })

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
download("www.xyz.com")
.then(function fulfillHandler(value){
    console.log("content downloaded is",value);
})





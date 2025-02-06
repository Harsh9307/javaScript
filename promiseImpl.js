/**
 * 1. Write a function to download data from url
 */

function downloadData(url){
    console.log("Started the downloading process.....");
    console.log("downloading the data from ",url);
    return new Promise(function exec(resolve, reject){
        setTimeout(function exec(){
            const data = "abcdefgh";
            resolve(data);
        },5000)        
    })
}





/**
 * 2.  write a function to save that downloaded data in a file and return the filename
 */
function writeData(data){
    console.log("Started writing the data ")
    return new Promise(function exec(res, rej){
        setTimeout(function write(){
            console.log("completed writing the data in the file");
            const filename = "file.txt";
            res(filename);
        },3000);
    })
}


/**
 * 3. write a function to upload the file written in the previous step to a newurl
 */
function uploadData(url,file){
    return new Promise(function exec(res,rej){
        console.log("Uploading the file on",url);
        setTimeout(function write(){
            console.log("uploaded the file");
            res("SUCCESS");
        },3000);
    })
}






let p = downloadData("www.xyz.com")
.then(function onFulfillment(value){
    console.log("Downloaded the data",value);
    return writeData(value);
})
.then(function onFulfillment(val){
    console.log("written the data in ",val);
    return uploadData(val);
})
.then(function onfullfillment(val){
    console.log("uploaded the file ", val);
})
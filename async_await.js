
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

function uploadData(url,file){
    return new Promise(function exec(res,rej){
        console.log("Uploading the file on",url);
        setTimeout(function write(){
            console.log("uploaded the file");
            res("SUCCESS");
        },3000);
    })
}

async function steps(){
    const downloadedData = await downloadData("www.xyz.com");
    console.log("data downloaded is:",downloadData);
    const fileWritten = await writeData(downloadedData);
    console.log("file written is:",fileWritten);
    const uploadResponse = await uploadData(fileWritten,"www.drive.com");
    console.log("Upload response is :",uploadResponse);
    return uploadResponse;

}
steps().then((value)=> console.log("we have completed steps with",value));
console.log("outside");
for(let i=0;i<1000000000;i++){}

setTimeout(function f(){console.log("timer done")},4000);
console.log("for loop done");


/**
 * the functions decalred with async by default 
 * if you are not manually returning a promise , it will assume to be promise by default
 */
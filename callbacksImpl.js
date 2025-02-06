// Tasks:
/**
 * 1. Write a function to download data from url
 */

function downloadData(url,cb){
    console.log("starting the download process");
    console.log("The data is getting downloaded from",url);
    
    setTimeout(function processDownload(){
        console.log("downloaded the data");
        const val="abc";
        cb(val);
        
    },5000);
   
}

// downloadData("www.xyz.com", function processDownload(x){
//     console.log("the content is :",x);
    
// } );

// 2. write a function to save that downloaded data in a file and return the filename

function writeFile(data,cb){
    console.log("started writing the file with",data);
    setTimeout(function write(){
        console.log("Completed writing the data in a file");
        const filename = "file.txt";
        cb(filename);
    },5000);
}

// writeFile("abcdefghi",function writeFile(x){
//     console.log("the filename is",x);
// })

// 3.write a function to upload the file written in previous step to a newurl

function uploadFile(url,file,cb){
    console.log("Started uploading the file in ",url);
    setTimeout(function upload(){
        console.log("Uploading file completed");
        console.log();
        const response = "SUCCESS";
        cb(response)
    },3000)
}

// uploadFile("www.xyz.com","file.txt",function upload(x){
//     console.log("the response is :",x);
// })

downloadData("www.xyz.com",function processDownload(content){
    console.log("we are now going to process the downloaded data");
    writeFile(content,function processWrite(filename){
        console.log("we have downloaded and written the file and now will upload in ",filename);
        uploadFile("www.upload.com","test.txt",function processUpload(response){
            console.log("we have uploaded with ", response);
        })
    })
})
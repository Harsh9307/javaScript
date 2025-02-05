/**
 * 1. Inversion of control
 * 2. Callback hell  --> Readability problem
 */
// fs.readdir(source, function (err, files) {
//     if (err) {
//       console.log('Error finding files: ' + err)
//     } else {
//       files.forEach(function (filename, fileIndex) {
//         console.log(filename)
//         gm(source + filename).size(function (err, values) {
//           if (err) {
//             console.log('Error identifying file size: ' + err)
//           } else {
//             console.log(filename + ' : ' + values)
//             aspect = (values.width / values.height)
//             widths.forEach(function (width, widthIndex) {
//               height = Math.round(width / aspect)
//               console.log('resizing ' + filename + 'to ' + height + 'x' + height)
//               this.resize(width, height).write(dest + 'w' + width + '_' + filename, function(err) {
//                 if (err) console.log('Error writing file: ' + err)
//               })
//             }.bind(this))
//           }
//         })
//       })
//     }
//   })


//-------------------------------------------------------------------------------------------------------

function doTask(fn,x){
    // whole implementation is done by team A

    // fn(x*x);  // calling my callback with square of x
    // fn(x*x);
} // team A

//her team b tries to use it 
doTask(function exec(num){    // due to callbacks , I am passing control of how exec shouk be called to doTask
    // this is inversion of control
    console.log("Woah num is",num);

})


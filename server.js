const fs = require("fs");
const http = require('http');
const url = require('url');

////////////////////
///FILES
// Synchronous way
// const textFile = fs.readFileSync('./1-node-farm/final/txt/input.txt','utf-8')
// console.log(textFile)

// const textOut = `this is what we know about this:${textFile}.\nCreated on ${Date.now()}`;
// fs.writeFileSync('./1-node-farm/final/txt/outputtwo.txt',textOut);
// console.log("File Writes")

//asynchronous way

// fs.readFile("./1-node-farm/starter/txt/start.txt", "utf-8", (err, data1) => {
//  if(err)return console.log('ERROR!')
 
//   fs.readFile(
//     `./1-node-farm/starter/txt/${data1}.txt`,
//     "utf-8",
//     (err, data2) => {
//       console.log(data2);
//       fs.readFile(
//         `./1-node-farm/final/txt/append.txt`,
//         "utf-8",
//         (err, data3) => {
//           console.log(data3);

//           fs.writeFile(
//             "./1-node-farm/final/txt/final.txt",
//             `${data2}\n${data3}`,
//             (err) => {
//               console.log("file has been written");
//             }
//           );
//         }
//       );
//     }
//   );
// });
// console.log("will read file");


////////////
//SERVER
const data = fs.readFileSync(`${__dirname}/1-node-farm/final/dev-data/data.json`,'utf-8')
  const dataObj = JSON.parse(data);

 



const server = http.createServer((req, res)=>{
 console.log(req.url);
 const pathName = req.url;


 if(pathName === '/' || pathName === '/overview'){
  res.end('overview page');
 }else if(pathName === '/support'){
  res.end('support');
 } else if (pathName == '/api'){
   res.writeHead(200,{'content-type':'application/json'});
    res.end(data);
  

 }
 
 
 else{
  res.writeHead(404,{
  'content-type': 'text/html'

  });
  res.end('<h1>page not found</h1>');
 }
   
});

server.listen(8000,'127.0.0.1',()=>{
  console.log("listening to requests on port 8000");
})
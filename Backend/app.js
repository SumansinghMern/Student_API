const express = require('express');
const apiRouter = require('./src/Routes/userRoutes');
require('./DB/conn');

const app = express();
const PORT = 5051;

app.use((req,res,next) => {
    res.header("Access-Control-Allow-Origin", "https://yoursite.com");// "*" --> Allow from all the Origin
    res.header(
        "Access-Control-Allow-Methods",
        "GET, POST, OOPTIONS, PUT, PATCH, DELETE, HEAD"
    );
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept"
    );
    next();
})
app.use(express.json());
app.use('/api',apiRouter);

app.listen(PORT, ()=> {
    console.log(`app is running on port ${PORT}`);
});

// console.log(path.join(__dirname,'read.txt')); 
//*************************************************************FS Module******************************************************************************** */

//                                            **************Sync FS Module**************                                                               

// If File is Present ? Write in file : Create a File and then write;
// If Data is Presnet in file it will replace those Data. 
// fs.writeFileSync(path.join(__dirname,'read.txt'),"Welcome to JS Module2");



//For adding Some Extra Data/text in existing file.
// fs.appendFileSync(path.join(__dirname,'read.txt'),'\nHow are You ?'); 

// fs.readFileSync will return Buffer Data, Buffer Data is additional Data type in node. Buffer is used for Storing Binary Data Set while reading from a file or Reciving file Over the network.
// const buff_Data = fs.readFileSync(path.join(__dirname,'read.txt'));
// console.log(buff_Data);
// Buffer Data --> String
// const org_Data = buff_Data.toString();
// console.log(org_Data);

// Rename file name.
// fs.renameSync(path.join(__dirname,'read.txt'),'readwrite.txt');

// fs.mkdirSync(path.joconst express = require('express');

//             ************AsyncFSModuleMethods**************                                                                                                     

//Creating a folder Asynchronusly.
// fs.mkdir(path.join(__dirname,'/AsyncFolder'), (err) => { console.log('Async Folder is Creacted') }); 

// If File is Present ? Write in file : Create a File and then write;
// If Data is Presnet in file it will replace those Data. 
// fs.writeFile(path.join(__dirname,'/AsyncFolder/asyncRead.txt'),'Now we are working Asynchronusly',(err)=>{console.log('file is Created')});

//For adding Some Extra Data/text in existing file.
// fs.appendFile(path.join(__dirname,'/AsyncFolder/asyncRead.txt'),'\nLearn FrontEnd Also', (err)=> {console.log('Text Added');});                                              

// Reading File async.
// fs.readFile(path.join(__dirname,'/AsyncFolder/asyncRead.txt'),'utf8',(err,data)=>(console.log(data)));

//Changing File Name.
// fs.rename(path.join(__dirname,'/AsyncFolder/asyncRead.txt'),path.join(__dirname,'/AsyncFolder/asyncReadWrite.txt'),(err)=>{console.log('Changing File Name')});

// setTimeout(()=>{
//     fs.unlink(path.join(__dirname,'/AsyncFolder/asyncReadWrite.txt'), (err) => {console.log('File Deleted Async')});
//     fs.rmdir(path.join(__dirname,'/AsyncFolder'),(err)=> { console.log('Folder Deleted Async');})
// },3000);
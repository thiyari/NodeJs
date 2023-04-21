/**
const a = 5
const b = 10

console.log("a is equal to: %s and b is equal to: %s",a,b)

const os = require("os")
console.log(os.type())
console.log(os.platform())

**/

/**
const car = {
    brand: "BMW",
    model: "Z4"
}

//module.exports = car

exports.car = car

**/



//console.log("NPM Scripts")



//const _ = require("lodash")




/*
const bar = () => console.log('bar')
const baz = () => console.log('baz')

const foo = () => {
    console.log('foo')
    setTimeout(bar,1000)
    baz()
}

foo()
*/




/*
function getMessage(msg, callback){
    setTimeout(()=>{
    console.log(msg)
    callback()
    }, 1000)
}

function DisplayMessage(){
    console.log("Display Message")
}

//getMessage("Get Message",DisplayMessage)
getMessage("Get Message",()=>console.log("Display Msg"))
//getMessage()
//DisplayMessage()

*/







/*
let promise = new Promise(function(resolve,reject){
    setTimeout(()=>resolve("Run Before"),1000)
    //setTimeout(()=>reject(new Error("whoops")),1000)
});

promise.then(
    result => {
        console.log(result)
        GetAfter()
    },
    error => console.log(error)
)
function GetAfter(){
    console.log("Print After");
}
*/

/*
function Clown(){
    return new Promise(resolve => {
        setTimeout(() => {
            resolve('icon')
        },2000)
    })
}

async function msg(callback){
    const msg = await Clown()
    console.log("Message:", msg)
    callback();
}

msg(getResult)

function getResult(){
    console.log("Execute After");
}

//getResult();

*/


/*
//Http Server Method 1
const http = require("http")

const hostname = '127.0.0.1'
const port = 3000;
const server = http.createServer((req,res)=>{
    res.statusCode = 200
    res.setHeader('Content-Type','text/plain');
    res.end("Welcome to HTTP server");
})

server.listen(port,hostname,()=>{
    console.log(`Server running at http://${hostname}:${port}/`);
})
*/

/*
//Http Server Method 2
const http = require("http")

const hostname = '127.0.0.1'
const port = 3000;
http.createServer((req,res)=>{
    res.writeHeader(200,{'Content-Type':'text/plain'})
    res.write("Welcome to HTTP server");
    res.end();
}).listen(port,hostname,()=>{
    console.log(`Server running at http://${hostname}:${port}/`);
})
*/


/*
//HTTP requests
const http = require('http')

http.get('http://api.open-notify.org/astros.json',resp=>{
    let data = '';
    resp.on('data',chunk=>{
        data += chunk
    });

    resp.on('end',()=>{
        //console.log(data)
        let jsondata = JSON.parse(data)
        console.log(jsondata)
    })
})
*/


/*
//HTTP POST request

const http = require("https")

const data = JSON.stringify({
    name:"Manikanth",
    Job:"Freelancer"
});

const options = {
    hostname: 'reqres.in',
    path:'/api/users',
    method:'POST',
    header:{
        'Content-Type':'application/json'
    }
}
//request
const req = http.request(options,(res)=>{
    let body = '';
    console.log("Status Code: ",res.statusCode)

    res.on('data',(chunk)=>{
        body += chunk;
    })
    res.on('end',()=>{
        console.log("Body:", JSON.parse(body))
    })
})

req.write(data)
req.end();
*/


/*
//axios POST method
const axios = require("axios")

const data = JSON.stringify({
    name:"Manikanth",
    Job:"Freelancer"
});

axios.post('https://reqres.in/api/users',data).then(res => {
    console.log(`Status Code:${res.status}`);
    console.log(`Body:${JSON.stringify(res.data)}`);
}).catch(err => {
    console.log(err)
})

*/

/*
//Working with Files
const fs = require("fs");
fs.readFile("test.txt",'utf8',(err,data)=>{
    if(err) throw err;
    console.log(data)
}) 

const data = fs.readFileSync('test.txt',{encoding:'utf8',flag:'r'});
console.log(data)

fs.stat('test.txt',(err,stats)=>{
    if(err){
        console.error(err)
        return
    }
    console.log(stats.isFile())
    console.log(stats.isDirectory())
    console.log(stats.isSymbolicLink())
    console.log(stats.size)

})

*/

/*
//Writing and updating files
//writing json file
const fs = require('fs')

const content = [{
    type:"Node Application"
}]

fs.writeFileSync('test.json',JSON.stringify(content))
*/

/*
//Writing and updating files
// writing text file
const fs = require('fs')
const content = "Node Application"

//regarding flag options
//a+ = appending
//r+ = reading
//w+ = writing or updating the complete file
//a = open file for writing but not for reading
fs.writeFile('test.txt',content,{flag:'a+'},err=>{
    if(err){
        console.log(err);
        return
    }
    console.log("Successfully Done!")
})
*/

/*
//Writing and updating files
// removing or unlinking file
const fs = require('fs')

fs.unlink('test.txt',err=>{
    if(err){
        console.log(err)
        return
    }
    console.log('File Removed')
})
*/

/*
//Routing Method 1
const http = require('http')

function index(request, response){
    response.writeHead(200);
    response.end('Node Routing');
}

function aboutus(request,response){
    response.end('This is About Page')
}
http.createServer(function(req,res){
    if(req.url=='/'){
        return index(req,res);
    }
    if(req.url=='/aboutus'){
        return aboutus(req,res);
    }
}).listen(8000);
*/

/*
//Routing Method 2
const http = require('http')

const routes = {
    '/':function index(request, response){
        response.writeHead(200);
        response.end('Node Routing');
    },
    '/aboutus':function aboutus(request,response){
        response.end('This is About Page')
    }
}

http.createServer(function(req,res){
    if(req.url in routes){
        return routes[req.url](req,res);
    }
}).listen(process.env.PORT||8000);
*/

/*
//Path Module
const path = require("path");

//file = path.basename('Tutorial/test.json');
//file = path.dirname('Tutorial/test.json');
//file = path.parse('Tutorial/test.json');
//file = path.resolve('/Tutorial','test.json');
file = path.resolve('/Tutorial','test.json');
//file = path.isAbsolute('C:/Users/Manikanth/Desktop/Tutorialtest.json');
//let dir = 'Tutorial'
//file = path.join('C:','Users/Manikanth/Desktop',dir,'test.json');
console.log(file)
*/

/*
//Event Module
const events = require("events");

let ev = new events.EventEmitter();

ev.on('my_event',function(data){
    console.log("Event:",data);
})
ev.emit('my_event',"Call emit() method to fire my_event");
*/

/*
//Event Module
const events = require("events");

let ev = new events.EventEmitter();
ev.on('eventOnce',(code,msg)=>console.log(`Got ${code} and ${msg}`));

ev.emit('eventOnce',200,'ok');
*/

/*
//Event Module
const events = require("events");
let ev = new events.EventEmitter();
var c1 = (code,msg)=>console.log(`Got ${code} and ${msg}`);
ev.once('eventOnce',c1);
//ev.off('eventOnce',c1)
ev.emit('eventOnce',200,'ok');
*/

/*
//Streams
const http = require("http");
const fs = require("fs")

const server = http.createServer(function(req,res){
    //fs.readFile('test.json',(err,data)=>{
        //res.end(data);
    //})
    const stream = fs.createReadStream('test.json');
    stream.pipe(res); 
})

server.listen(3000,()=>{console.log("Application Started on PORT 3000")})
*/

/*
//Buffer
const buf = Buffer.from("Hey");
console.log(buf[0])
console.log(buf[1])
console.log(buf[2])

buf[1] = 111//character 'o'
console.log(buf.toString())
*/

//Exception Handling
try{
    console.log("Start try block");
    throw new Error("error")
    console.log("End try block");
}catch(err){
    console.log('Error Message',err)
}

doSomething1()
.then(()=>{
    return doSomething2().catch(err=>{
        //handle error
        throw err
    })
})
.then(()=>{
    return doSomething2().catch(err=>{
        //handle error
        throw err
    })
})
.catch(err => console.error(err))

async function someFunction(){
    try{
        await someOtherFunction()
    }catch(err){
        console.log(err,message)
    }
}
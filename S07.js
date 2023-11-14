let http = require ('http');
let fs =require('fs');
let server = http.createServer(requestHandler);
let port = 8080;
server.listen(port);
console.log("server is running on port:" + port)
let headers = {
    text:{'contact-type': 'text/plain'},
    html:{'contact-type': 'text/html'}
};
let obj = {
    x: function(){
        console.log('xxxx')        
    },
    y: function(){
        console.log('yyyyyy')
    },
    "Favico": function(){
        console.log('Favicon')
    },
    page1: paage1contoroller
}

function paage1contoroller(response){
   response.writeHead(200, headers.html);
   fs.readFile('./htmlCode.html', 'utf8' , function(error, data){
    console.log('page2controller 2')
    console.log('page2controller 2 error',error)
    console.log('page2controller 2 data',data)
    response.writeHead(200,headers.html);
    response.write(data);
    response.end();

   }
   )
   console.log('page2controller 3')
}

 function requestHandler (request,response)
 {
    console.log('request url:',request.url);
    console.log('request method:',request.method);
    let firstpage = request.url.split('/')[1];
    obj[firstpage](response);


 }
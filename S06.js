let http = require ('http');
let hichi = 55;
let server = http.createServer(requestHandler);
server.listen(80);
console.log("server is running on port:" + port)
let headers = {'contact-type': 'text-/plain'}
let obj = {
    x: function(){
        console.log('xxxx')        
    },
    y: function(){
        console.log('yyyyyy')
    },
    "Favico": function(){
        console.log('Favicon')
    }
}


 function requestHandler (request,response)
 {
    //console.log('request url:',request.url);
    //console.log('request method:',request.method);
    let firstpage = request.url.split('/')[1];
    obj[firstpage]();

    response.writeHead(200,headers);
    response.write('Salam');
    response.end();
 }

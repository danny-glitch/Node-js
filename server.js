const http=require('http')
const fs=require('fs')
//create a new server
const server=http.createServer((req,res)=>{
   console.log(req.url ,req.method);


//respond content
 res.setHeader('content-type','text/html')


 //connecting with html pages
 let path='./views/'
 switch(req.url){
     case '/':
         path += 'index.html';
         res.statusCode=200;
         break;
     case '/about':
         path += 'about.html';
         res.statusCode=200;
         break;
         //redirecting
         case '/about-me':
         res.statusCode=301;
         res.setHeader('location','./about')
         break;
     default:
         path += '404.html';
         res.statusCode=404;
         break;
 }
 
 fs.readFile(path,(err,data) => {
     if(err){
         console.log(err);
         res.end();
     }
     res.write(data)
     res.end()


});

});
//request making
server.listen(3000,'localhost',()=>{
    console.log('server is listening from port 3000')
});

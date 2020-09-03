const express = require('express')

// express app
const app=express()

//listen for app
app.listen(3000)

app.get('/',(req,res)=>{

    res.sendFile('./views/index.html',{ root: __dirname})

});
app.get('/about',(req,res)=>{

    res.sendFile('./views/about.html',{ root: __dirname})

});
//redirect
app.get('/about-us',(req,res)=>{

    res.redirect('/about')

});

//404 by USE method which checks all the urls once if it never runs in any other get method thats why it always put at the end of the code
app.use((req,res)=>{
  
    res.sendFile('./views/404.html',{ root: __dirname})
})



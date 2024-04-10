
const express = require("express")
const bodyParser=require('body-parser')
const app =express()

app.use(bodyParser.urlencoded({extended:false}))
app.use('/add-product',(req,res,next)=>{

    res.send('<form action="/product" method="post"><input type="text" name="product"><input type="number" name="size"> <button type="submit">submit</button></form>')
    next()
})
app.post('/product',(req,res,next)=>{
    
    console.log(req.body)
    res.redirect('/')
})
app.use('/',(req,res)=>{

    res.send("hello bhai")
})
app.listen(3000)

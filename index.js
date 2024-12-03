require('dotenv').config()
const express = require('express')
const app = express()
const port = 6000

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/aggarwal',(req,res)=>{
    res.send('need aggarwal')
})
app.get('/youtube',(req,res)=>{
  res.send('welcome to youtube')
})
app.get('/login',(req,res)=>{
  res.send('<h1>login page</h1>')
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})
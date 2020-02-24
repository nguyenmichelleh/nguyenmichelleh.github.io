const express = require('express')
const app = express()
 
app.get('/', function (req, res) {
  res.sendFile("index.html", {root: __dirname})
})

app.all('*', function(req,res) {
    console.log(req.path)
    res.sendFile(req.path, {root: __dirname})
})
 
app.listen(3000)
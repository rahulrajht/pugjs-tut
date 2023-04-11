const express = require('express')
const app = express()
const path = require('path');
const pug = require('pug')

app.set("view engine", "pug");
app.set("views", path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, 'public')))
async function getJson() {
    const json = require("./data.json")
    return json;
}
app.get('/' , async function(req,res){    
    res.type('text/html').render('index',{news: await getJson()})
})

app.listen(3000, function (err, address) {
    console.log("server running")
})
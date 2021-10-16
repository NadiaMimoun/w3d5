const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/css', express.static(path.join(__dirname, 'css')));

app.get('/', (req, res) => {
    const date = new Date();
const hour = date.getHours();
let cssLink;
if(hour>6 && hour<16){

 cssLink=(path.join( 'css', 'day.css'))}
 else{

    cssLink=(path.join('css', 'night.css'))}
 res.send(`
 <!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8"/>
<link href="${cssLink}" rel="stylesheet" />
<title></title>
</head>
<body>
<form action=http://localhost:3000/result method=post>
 <label>Name: <input name=name type=text></label><label>Age<input name=age type=text></label>
 <button type=submit>Submit Qurey</button></form></body>
 </html>`);
 
});
app.post('/result', (req, res,next) => {
   
    res.redirect(`/output?name=${req.body.name}&age=${req.body.age}`)
   });
app.get('/output', (req, res) => {
    let name = req.query.name;
    let age = req.query.age;
    
   
    res.send(`Welcome ${name} age:${age}`);
   });

app.listen(3000); 
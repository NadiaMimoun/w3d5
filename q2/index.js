const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', (req, res) => {
 
 res.send(`<form action=http://localhost:3000/result method=post><label>Name: <input name=name type=text></label><label>Age<input name=age type=text></label><button type=submit>Submit Qurey</button></form>`);
 
});
app.post('/result', (req, res,next) => {
   
    res.send(`Welcome ${req.body.name} age: ${req.body.age}`)
   });
app.listen(3000);
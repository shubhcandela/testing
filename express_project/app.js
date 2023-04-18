const express = require('express');
const app = express();

let data = require("./data")


const bodyParser = require('body-parser');
const cors = require('cors');
 
const port = 3000; 

app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});
 
app.get('/data',(req,res)=>{
    res.send(data)
})

app.post('/data', (req, res) => {
  const datatoadd = req.body
  console.log(datatoadd)
  data = datatoadd
    res.send(data)
});
 
app.listen(3000, () => {
  console.log('Our express server is up on port 3000');
});
const express = require('express');
const path = require('path');

const http = require('http');
const bodyParser = require('body-parser');

const api = require('./backend/api');


const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, 'dist/toDoApp')));

app.use('/api', api);


app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/toDoApp/index.html'));
});



 app.listen(3000);
 console.log('app is running');
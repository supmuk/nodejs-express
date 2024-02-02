const express = require('express');
const app = express();
const port = 3300;
const frontend = require('./router/frontend');
// const mongoose = require('mongoose');
const bodyParser = require('body-parser');
require('dotenv').config()

app.set('views', './views')
app.set('view engine', 'ejs') 

app.use(express.static('public'));

app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.use('/', frontend);  
app.get('*', (req, res) => {
    res.send('404');
});
console.log(process.env.MONGODB_URI);
// mongoose.connect(process.env.MONGODB_URI, {
    
// })

app.listen(port, () => {
    console.log(`Server started on port ${port}`);
})
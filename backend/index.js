const express = require('express');
const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://Copter1998:0889185200ter@cluster0.luxvl.gcp.mongodb.net/<dbname>?retryWrites=true&w=majority',{ useNewUrlparser: true, useUnifiedTopology: true});
const cors = require('cors')
const app = express();
const port = process.env.port | 80;

app.use(express.json())
app.use(express.urlencoded({extended:true}));
app.use(cors());

app.get('/',(req, res) => {
    res.send('Hello World');
})

app.get('/api', require('./routes/index.js'));

app.listen(port, () =>{
    console.log('Server runing http://localhost');
} );
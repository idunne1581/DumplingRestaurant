const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();

//Middleware
//Must be setup before the port
//Take form data and translate it to a readable format
app.use(express.urlencoded({extended: false}));
app.use(express.json());
/*Cross Origin Site Requests, bypasses security features on browsers. Stops requests from being blocked by telling the browser the requests are valid.*/
app.use(cors());
//Pointing the server to the static files in the public folder.
app.use(express.static('public'));

//Connect to MongoDB
//Use process.env to use environment variables
mongoose.connect(process.env.MONGODB_URI);


const db = mongoose.connection;
//Implement try catch blocks here?
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
    console.log('Connected to MongoDB')
})

//Define a schema and model for the form data

const contactSchema = new mongoose.Schema({
    name: String,
    people: Number,
    date: Date,
    message: String
})

const Contact = mongoose.model('Contact',contactSchema, );

//Handle Form Submission Request
app.post('/submit', async (req,res) => {
    const formData = {
        name: req.body.Name,
        people: req.body.People,
        date: new Date(req.body.date),
        message: req.body.Message
    }
    try {
        const newContact = new Contact(formData);
        await newContact.save();
        res.redirect('/?success');
    }catch (error) {
        res.redirect('/?error');
    }
})

app.get('/', (req,res) => {
    res.sendFile(__dirname + '/public/index.html');
})


//Start server
const PORT = process.env.PORT || 8000;
//app.listen is typically last, you want to initiate all the logic first, then run the server.
app.listen(PORT, () => {
    console.log(`Server connected on ${PORT}`);
})


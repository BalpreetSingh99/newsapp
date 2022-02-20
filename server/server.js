const express = require("express");
const app = express();
const Router = require('./Router');
const cors = require("cors");
const mongoose = require('mongoose')
const bodyParser = require("body-parser");

mongoose.connect("mongodb://localhost:27017/newsDB", { useUnifiedTopology: true,useNewUrlParser: true});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(
    cors({
        origin: '*', // allow to server to accept request from different origin
        methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
        credentials: true // allow session cookie from browser to pass through
    })
);


app.use('/api', Router);

app.get('/', (req, res) => {
    console.log('inside / get')
    res.send(`Server is Up and Running on port 8080 .`)
});


app.listen(8080, function() {
    console.log(`server is up and running on port 8080`);
});
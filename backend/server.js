const express = require("express");
const app = express();

// const bodyParser = require('body-parser');

const cors = require("cors");

const dotenv = require('dotenv');
dotenv.config();

const port = process.env.PORT || 5000;

// importing routes
const submitRoute = require('./routes/submitRoute');


// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// using routes
app.use("/", submitRoute);



app.listen(port, () => console.log("Server is successfully running and waiting for some requests on port... ", port));
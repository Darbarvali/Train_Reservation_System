const express = require('express');
const cors = require('cors');
const app = express();
const functions = require("firebase-functions")
// enable cors
app.use(
  cors({
    origin: true,
    optionsSuccessStatus: 200,
    credentials: true,
  })
);
app.options(
  '*',
  cors({
    origin: true,
    optionsSuccessStatus: 200,
    credentials: true,
  })
);


// parse json request body
app.use(express.json());

// parse url-encoded request body
app.use(express.urlencoded({ extended: true }));


app.get('/', (req, res) => res.send('Welcome to Seating Arrangement'));
app.use("/api/v1", require("./src/api/v1/routes"))


module.exports = app;

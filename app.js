const express = require('express');
const cors = require('cors');
const jobsRoute = require('./routes/v1/jobs.route');
require("dotenv").config()

// create app 
const app = express();

// middleware 
app.use(cors());
app.use(express.json());

// routes hare

app.use("/api/v1/jobs",jobsRoute);










module.exports = app;
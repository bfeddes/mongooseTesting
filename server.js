// gathering requirements 
const express = require('express');
const mongoose = require('mongoose');
const Router = require('./routes');

const app = express();
app.use(express.json());

// connecting to the MongoDB database with mongoose
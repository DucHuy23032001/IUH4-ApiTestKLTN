const express = require('express');
// const rateLimit = require('express-rate-limit');
const helmet = require('helmet');
const mongoSanitize = require('express-mongo-sanitize');
const xss = require('xss-clean');
const hpp = require('hpp');
const cors = require('cors');
const bodyParser = require('body-parser')
const accountRouter = require('./routes/accountRouter')

const app = express();
// app.use(fileUpload())
app.use(cors());
app.use(helmet());
app.use(express.json({ limit: 52428800}));
app.use(express.urlencoded({ limit: 52428800, extended:true}));
app.use(mongoSanitize());
app.use(xss());
app.use(hpp());

// Routes
app.use('/api/v1/accounts', accountRouter);

module.exports = app;
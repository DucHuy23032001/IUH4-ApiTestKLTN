const express = require('express');
// const rateLimit = require('express-rate-limit');
const helmet = require('helmet');
const mongoSanitize = require('express-mongo-sanitize');
const xss = require('xss-clean');
const hpp = require('hpp');
const cors = require('cors');
const bodyParser = require('body-parser')
console.log("Chưa lấy account router");
const accountRouter = require('./routes/accountRouter')
console.log("Đã lấy account router");

const app = express();
// app.use(fileUpload())
app.use(cors());
app.use(helmet());
app.use(express.json({ limit: 52428800}));
app.use(express.urlencoded({ limit: 52428800, extended:true}));
console.log("Huy");
app.use(mongoSanitize());
console.log("Huy 2");
app.use(xss());
app.use(hpp());

console.log("Chưa kết nối account router");
// Routes
app.use('/api/v3/accounts', accountRouter);
console.log("Đã kết nối account router");
// handle undefined Routes
// app.use('*', (req, res, next) => {
//     const err = new AppError(404, 'fail', 'undefined route');
//     next(err, req, res, next);
// });
console.log("Huy 3");

// app.use(globalErrHandler);

module.exports = app;
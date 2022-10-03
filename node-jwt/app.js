const cors = require('cors');
const express = require('express');
const bodyParser = require('body-parser');
const userRoute = require('./routes/user');
const InitiateMongoServer = require('./config/db');

// Initiate Mongo Server
InitiateMongoServer();
const app = express();
app.use(cors());

app.use(bodyParser.json({ limit: '5mb' }));

// ROUTES with prefix
app.use('/user', userRoute);

// PORT
const PORT = process.env.PORT || 4000;

app.listen(PORT, (req, res) => {
    console.log(`Server Started at PORT ${PORT}`);
});

// error handler middleware
app.use((error, req, res, next) => {
    res.status(error.status || 500).send({
        name: error.name,
        status: error.status || 500,
        message: error.message || '@Internal Server Error'
    });
});

// rejection exceptions
process.on('unhandledRejection', (reason, p) => {
    console.error(reason, '@Unhandled Rejection at Promise', p);
});
// uncaught exceptions
process.on('uncaughtException', (err) => {
    console.error(err, '@Uncaught Exception thrown');
    process.exit(1);
});

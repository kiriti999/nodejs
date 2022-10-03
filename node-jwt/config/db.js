const mongoose = require('mongoose');

// Replace this with your MONGOURI.
const MONGOURI = 'mongodb://kiriti:12qwaszx@ds151259.mlab.com:51259/node-auth';

const InitiateMongoServer = async () => {
    try {
        await mongoose.connect(MONGOURI, { useNewUrlParser: true, useUnifiedTopology: true });
        console.log('Connected to DB !!');
    } catch (e) {
        console.log(e);
        throw e;
    }
};

module.exports = InitiateMongoServer;

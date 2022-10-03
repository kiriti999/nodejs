
var express = require('express');
var app = express();
var techstack21_Security = require('./serverAuthentication.js');
var fs = require('fs');
var cors = require('cors');
var bodyParser = require('body-parser');
var http = require('http');
var sslRedirect = require('heroku-ssl-redirect');
var request = require('request');
var rp = require('request-promise');
var popupTools = require('popup-tools');
var mongoose = require('mongoose');
// var reports = require('./reports/google_reports');
var cookieSession = require('cookie-session');
var passport = require('passport');
var compression = require('compression');
var swig = require('swig');
var keys = require('./config/auth_keys');
var authRoutes = require('./routes/auth_routes');
var social = require('./social/social_sharing');
var cloudinaryRouter = require('./routes/cloudinary');
var getRouter = require('./routes/get_routes');
var postRouter = require('./routes/post_routes');


// enable ssl redirect
app.use(sslRedirect());
app.use(bodyParser.json({ limit: '5mb' }));
app.use(bodyParser.urlencoded({
    limit: '5mb',
    extended: false
}));

app.engine('html', swig.renderFile);
app.set('view engine', 'html');
app.set('views', __dirname + '/public_html/tags/');


//sessions
app.use(cookieSession({
    maxAge: 24 * 60 * 60 * 1000,
    keys: [keys.session.cookieKey]
}));
app.use(passport.initialize());
app.use(passport.session());

//connect to mongo db
mongoose.connect(keys.mongodb.dbUrl, { autoIndex: false }, () => {
    console.log('connected to mongodb');
});


app.use('/auth', authRoutes);
app.use(cloudinaryRouter);
app.use(social);
app.use(getRouter);
app.use(postRouter);
app.use(compression());
app.use(cors());
app.use(require('prerender-node'));
var riot = require('riot');

var authList = [];


// =======================
// configuration =========
// =======================
var commons = require('./public_html/commons.json').commons;
var oneDay = 86400000;
var port = process.env.PORT || commons.server_port;

app.set('port', (port));
app.use('/', express.static(__dirname + '/public_html', { maxAge: oneDay }));
app.listen(app.get('port'), function () {
    console.log('Node app is running on port', app.get('port'));
});


// =======================
// routes ================
// =======================
var share_post = '' + commons.api_url + '/sharePost';
var bloggerPost = '' + commons.api_url + '/createGoogleBloggerPost';


app.get('*.js', function (req, res, next) {
    req.url = req.url + '.gz';
    console.log('req.url******* ', req.url);
    res.set('Content-Encoding', 'gzip');
    next();
});

app.get('/', function (request, response) {
    response.render('public_html/index.html');
});


// =======================
// functions =============
// =======================

function ImageSavePostRequest(url, req, next, res) {
    var options = {
        method: 'POST',
        uri: url,
        body: req,
        headers: {
            'User-Agent': 'Request-Promise'
        },
        json: true // Automatically parses the JSON string in the response
    };

    rp(options)
        .then(function (response) {
            console.log('=================================');
            console.log('=================================');
            console.log('=================================');
            console.log('=================================');
            console.log("RESPONSE.STATUSCODE: ", res.statusCode);
            console.log('=================================');
            console.log('=================================');
            console.log('=================================');
            console.log('=================================');
            if (res.statusCode >= 100 && res.statusCode < 600)
                return res.status(res.statusCode).send(req);
            else
                return res.status(500);
        })
        .catch(function (err) {
            console.log('=================================');
            console.log('=================================');
            console.log('=================================');
            console.log('=================================');
            console.error('POST error ', err.stack);
            console.log('=================================');
            console.log('=================================');
            console.log('=================================');
            console.log('=================================');
            return res.status(res.statusCode).send(err);
        });
}

//global error logger
app.use(function (err, req, res, next) {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});
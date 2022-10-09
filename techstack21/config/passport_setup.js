
var passport = require('passport');
var FacebookStrategy = require('passport-facebook').Strategy;
var GoogleStrategy = require('passport-google-oauth20').Strategy;
var keys = require('./auth_keys');
var commons = require('../public_html/commons.json').commons;
var userModel = require('../schemas/user');
var nJwt = require('njwt');
var uuid = require('node-uuid');

passport.serializeUser(function (user, done) {
    console.log('');
    console.log('');
    console.log('serializing token ', user);
    console.log('');
    console.log('');
    done(null, user);
});
passport.deserializeUser(function (user, done) {
    console.log('');
    console.log('');
    console.log('deserializing token ', user);
    console.log('');
    console.log('');
    userModel.findById(user.id).then(function (user) {
        done(null, user);
    })
});


//Google strategy
passport.use(new GoogleStrategy({
    clientID: keys.google.clientID,
    clientSecret: keys.google.clientSecret,
    callbackURL: "" + commons.api_url + '/auth/google/callback',
},
    function (accessToken, refreshToken, profile, done) {

        var claims = {
            sub: 'Social Authentication',
            iss: 'https://{DataMixin.api_url}',
            accessToken: accessToken
        };
        var jwt = nJwt.create(claims, keys.session.cookieKey);
        jwt.setExpiration(new Date().getTime() + (60 * 60 * 1000 * 1));
        var token = jwt.compact();

        var user = new userModel({
            "username": profile.emails[0].value,
            "profilePhoto": profile.photos[0].value,
            "googleId": profile.id,
            "role": keys.admins.indexOf(profile.emails[0].value) ? 'ROLE_ADMIN' : 'ROLE_USER',
            "accessToken": token
        });

        //check if user already exists
        userModel.findOne({ googleId: profile.id }).then(function (currentUser) {
            if (currentUser) {
                console.log('');
                console.log('');
                console.log('current user exists', currentUser);
                console.log('');
                console.log('');
                currentUser.accessToken = token;
                done(null, currentUser);
            } else {
                user.save().then(function (newUser) {
                    console.log('');
                    console.log('');
                    console.log('new user created', newUser);
                    console.log('');
                    console.log('');
                    newUser.accessToken = token;
                    done(null, newUser);
                })
            }
        });
    }
));


//facebook strategy
passport.use(new FacebookStrategy({
    clientID: keys.facebook.clientID,
    clientSecret: keys.facebook.clientSecret,
    callbackURL: "" + commons.api_url + "/auth/facebook/callback",
    profileFields: ['id', 'email', 'gender', 'link', 'locale', 'name', 'timezone', 'updated_time', 'verified', 'photos']
},
    function (accessToken, refreshToken, profile, done) {
        console.log("Profile=", profile);

        USERS[profile.id] = profile;
        done(null, profile);

        // var primaryUserInfo = {
        //     username: profile.emails[0].value,
        //     userImage: profile.photos[0].value,
        //     token: accessToken
        // };

        // request({
        //     url: '' + commons.api_url + '/user_create',
        //     method: "POST",
        //     json: true,
        //     headers: { "content-type": "application/json" },
        //     body: primaryUserInfo
        // }, function (err, res, body) {
        //     if (err == null && body == false) {
        //     } else {
        //     }
        // });
        // //            return cb(null, accessToken);
    }
));
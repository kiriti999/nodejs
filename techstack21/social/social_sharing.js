var rp = require('request-promise');
const social_sharing = require('express').Router();
const keys = require('../config/auth_keys');
var google = require('googleapis');
var OAuth2 = google.auth.OAuth2;
var analytics = google.analyticsreporting("v4");
var plus = google.plus('v1');
var blogger = google.blogger('v3');
var commons = require('../public_html/commons.json').commons;
const popupTools = require('popup-tools');



//==================================
//FACEBOOK SHARING START
//==================================
var FB = require('facebook-node');
social_sharing.post('/sharePost', function (req, res, next) {

    console.log('========================');
    console.log('Sharing posts as Admin');
    console.log('========================');

    FB.setAccessToken(keys.facebook.permanentToken);
    var body = {
        title: req.body.title,
        details: req.body.details,
        // imageurl: req.body.postImageUrl,
        url: req.body.url
    };
    var complete_message = req.body.title + '\n' + '\n' + '\n' + (req.body.details.substring(0, 250) + '...(Click on the link to read more)');

    //==============================SHARE TO FACEBOOK PAGE==========================//
    FB.api('me/feed', 'post', { message: complete_message, link: req.body.url, thumbnail: req.body.postImageUrl !== null ? req.body.postImageUrl : '' },
        function (response, error) {
            if (!res || res.error) {
                console.error(!res ? 'error occurred' : res.error);
                return;
            } else {
                console.log('FB SHARE SUCCESS: ', response);
                res.send(response);
            }
        });
    //==============================FACEBOOK CODE==========================//
});
//==================================
//FACEBOOK SHARING END
//==================================
















// function blogPost(req, res, next) {
//     console.log(' ');
//     console.log(' ');
//     console.log('createGoogleBloggerPost called', req.body);
//     console.log(' ');
//     console.log(' ');

//     var oauth2Client = getOAuthClient();

//     var modifiedText = '<div style="white-space: pre-wrap;">' + req.body.details + '</div>';
//     social_sharing.blogParams = {
//         title: req.body.title,
//         content: modifiedText,
//         url: req.body.url
//     };

//     social_sharing.exchangeCode = req.body.exchangeCode;
//     console.log('oauth2Client $$$$$', oauth2Client);
//     oauth2Client.getToken(social_sharing.exchangeCode, function (err, tokens) {

//         if (!err) {
//             oauth2Client.setCredentials(tokens);

//             var options = {
//                 uri: 'https://www.googleapis.com/blogger/v3/blogs/'+commons.google_blogger.id+'/posts/',
//                 method: 'POST',
//                 body: social_sharing.blogParams,
//                 headers: {
//                     'User-Agent': 'Request-Promise',
//                     "Authorization": 'Bearer ' + tokens.access_token
//                 },
//                 json: true // Automatically parses the JSON string in the response
//             };

//             rp(options)
//                 .then(function (response) {
//                     console.log('');
//                     console.log('BLOGGER POST SUCCESS');
//                     console.log('');
//                     if (res.statusCode >= 100 && res.statusCode < 600)
//                         res.send("BLOG POST SUCCESS");
//                     else
//                         return res.status(500);
//                 })
//                 .catch(function (err) {
//                     console.log('');
//                     console.error('POST error ', err.stack);
//                     console.log('');
//                     return res.status(res.statusCode).send(err);
//                 });

//         } else {
//             console.error('Error Getting BloggerAPI Token', err);
//         }
//     });
// }
//==================================
//BLOGGER API - END
//==================================








//==================================
//LINKEDIN SHARING START
//==================================
var Linkedin = require('node-linkedin')('81qr39kkcl6srr', '7OhisqIt4POtuowV');
social_sharing.get('/shareToLinked', techstack21_Security.isAuthenticated, function (req, res, next) {

    var linkedIn = {
        auth: '',
        content: {
            "title": req.body.title,
            "description": req.body.details,
            "submitted-image-url": req.body.imageurl,
            "submitted-url": req.body.url
        },
        "visibility": {
            "code": "anyone"
        }
    };

    var linkedInAuthParams = {
        "response_type": "code",
        "client_id": "81qr39kkcl6srr",
        "redirect_uri": "http://techstack21.com/auth/linkedin/callback",
        "state": "Dkkkkf45A53sdfKef424",
        "scope": "r_basicprofile"
    };

    var options = {
        method: 'GET',
        uri: 'https://www.linkedin.com/oauth/v2/authorization',
        qs: linkedInAuthParams,
        headers: {
            'User-Agent': 'Request-Promise'
        },
        json: true // Automatically parses the JSON string in the response
    };

    rp(options)
        .then(function (response) {
            console.log('=================================');
            console.log('=================================');
            console.log("GET REPONSE STATUS CODE:", res.statusCode);
            console.log("GET REPONSE STATUS:", response);
            console.log('=================================');
            console.log('=================================');
            res.send(popupTools.popupResponse(response));
            //        if (res.statusCode >= 100 && res.statusCode < 600){
            //        } else {
            //            return res.status(500);
            //        }
        }).catch(function (err) {
            console.log('=================================');
            console.log('=================================');
            console.error('POST error ', err.stack);
            console.log('=================================');
            console.log('=================================');
            return res.status(res.statusCode).send(err);
        });
});
// Again, `res` is optional, you could pass `code` as the first parameter
social_sharing.get('/auth/linkedin/callback', techstack21_Security.isAuthenticated, function (req, res) {
    console.log('LINKEDIN CALLBACK CALLED');
    Linkedin.auth.getAccessToken(res, req.query.code, req.query.state, function (err, results) {
        if (err)
            return console.error(err);

        /**
         * Results have something like:
         * {"expires_in":5184000,"access_token":". . . ."}
         */

        console.log(results);
        return res.redirect('/');
    });
});
//==================================
//LINKEDIN SHARING END
//==================================


module.exports = social_sharing;

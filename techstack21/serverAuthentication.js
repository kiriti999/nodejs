/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var Cookies = require("cookies");
var nJwt = require('njwt');
var storage = require('node-persist');
storage.initSync();
var uuid = require('node-uuid');
//var secretKey = uuid.v4();
var secretKey = "myscope";
techstack21_Security = {

    createJWT: function (admin, req, res) {

        var claims = {
            sub: 'Social Authentication',
            iss: 'https://{DataMixin.api_url}',
            admin: admin
        };
        var jwt = nJwt.create(claims, secretKey);
        jwt.setExpiration(new Date().getTime() + (60 * 60 * 1000 * 1)); // One hour from now
        //console.log(jwt);
        console.log('#####################################')
        console.log('*********TOKEN CREATED: ', jwt);
        console.log('#####################################')
        var token = jwt.compact();
        var cookies = new Cookies(req, res).set('access_token', token, {
            //httpOnly: true,
            //secure: true // for your production environment
        });
    },
    isAuthenticated: function (req, res, next) {

        console.log('****************************************************');
        console.log('**********isAuthenticated: Checking roles....');
        console.log('****************************************************');
        nJwt.verify(new Cookies(req, res).get('access_token'), secretKey, function (err, token) {
            if (err) {
                console.log('Token not found::::', err);
                storage.setItemSync('role', "ROLE_USER");
                return next();
            } else {

                if (token.body.admin) {
                    storage.setItemSync('role', "ROLE_ADMIN");
                    console.log('////////////////////////////////////////////////');
                    console.log('////////////////////////////////////////////////');
                    console.log("TOKEN IS OF TYPE ADMIN:", token.body.admin);
                    console.log('////////////////////////////////////////////////');
                    console.log('////////////////////////////////////////////////');
                } else if (!token.body.admin) {
                    storage.setItemSync('role', "ROLE_USER");
                    console.log('////////////////////////////////////////////////');
                    console.log('////////////////////////////////////////////////');
                    console.log("TOKEN IS OF TYPE USER:", token.body.admin);
                    console.log('////////////////////////////////////////////////');
                    console.log('////////////////////////////////////////////////');
                }
                req.token = token;
                return next();
            }
        });
    },


    isServerPageAuthenticated: function (req, res, next) {

        console.log('****************************************************');
        console.log('**********isAuthenticated: Checking roles....');
        console.log('****************************************************');
        nJwt.verify(new Cookies(req, res).get('access_token'), secretKey, function (err, token) {
            if (err) {
                console.log('Token not found', err);
                return next();
            } else {

                if (token.body.admin) {
                    storage.setItemSync('role', "ROLE_ADMIN");
                    console.log('////////////////////////////////////////////////');
                    console.log('////////////////////////////////////////////////');
                    console.log("TOKEN IS OF TYPE ADMIN:", token.body.admin);
                    console.log('////////////////////////////////////////////////');
                    console.log('////////////////////////////////////////////////');
                } else if (!token.body.admin) {
                    storage.setItemSync('role', "ROLE_USER");
                    console.log('////////////////////////////////////////////////');
                    console.log('////////////////////////////////////////////////');
                    console.log("TOKEN IS OF TYPE USER:", token.body.admin);
                    console.log('////////////////////////////////////////////////');
                    console.log('////////////////////////////////////////////////');
                }
                req.token = token;
                return next();
            }
        });
    },


    setAuthentication: function (role) {
        storage.setItemSync('role', role);
    },

    getAuthentication: function () {
        authObject = {
            role: storage.getItemSync('role'),
        };
        return authObject;
    },
    logout: function (req, res) {
        var cookies = new Cookies(req, res).set('access_token', '', {
            //httpOnly: true,
            //secure: true // for your production environment
        });
        storage.setItemSync('role', "");
    }
};
module.exports = techstack21_Security;
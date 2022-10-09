
const cloudinaryRouter = require('express').Router();
const cloudinary = require('cloudinary');
const keys = require('../config/auth_keys');
const techstack21_Security = require('../serverAuthentication');

cloudinary.config({
    cloud_name: keys.cloudinary.cloud_name,
    api_key: keys.cloudinary.clientID,
    api_secret: keys.cloudinary.clientSecret
});

cloudinaryRouter.post('/uploadImage', techstack21_Security.isAuthenticated, uploadImage);

function uploadImage(req, res, next) {
    cloudinary.uploader.upload(req.body.imageUrl, function (result) {
        console.log(' ');
        console.log('Cloudinary Image Upload Result: ', result);
        console.log(' ');
        return res.status(res.statusCode).send(result.secure_url);
    });
}

module.exports = cloudinaryRouter;
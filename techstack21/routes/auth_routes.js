const router = require('express').Router();
const passport = require('passport');
const passportSetup = require('../config/passport_setup');
const popupTools = require('popup-tools');

//auth wth google
router.get('/google', passport.authenticate('google', {
    scope: [
        'profile', 'https://www.googleapis.com/auth/plus.login',
        'https://www.googleapis.com/auth/blogger',
        'https://www.googleapis.com/auth/userinfo.email'
    ]
}));


//callback route for google to redirect to
router.get('/google/callback', passport.authenticate('google', { failureRedirect: '/', failureFlash: true }),
    function (req, res) {
        console.log('google authentication success', req.user);
        res.send(popupTools.popupResponse(req.user));
    }
);

//auth wth facebook
router.get("/facebook", passport.authenticate("facebook", {
    scope: ["email", "manage_pages"]
}));

// handle the callback after facebook has authenticated the user
router.get("/facebook/callback", passport.authenticate("facebook", { failureRedirect: "/" }), function (req, res) {
    console.log('facebook authentication success');
    res.send(popupTools.popupResponse(req.user));
});

module.exports = router;
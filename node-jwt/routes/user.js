const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const cs = require('../constants');
const User = require('../model/User');
const auth = require('../middleware/auth');
const HttpStatus = require('http-status-codes');
const APIError = require('../error-handler/base-error');

/**
 * @method - POST
 * @param - /register
 * @description - User registration
 */
router.post('/register', async (req, res, next) => {
    const { username, email, password } = req.body;
    try {
        let user = await User.findOne({ email });
        if (user) {
            throw new APIError(cs.USER_EXISTS, HttpStatus.NOT_FOUND);
        }

        user = new User({ username, email, password });
        await user.save();

        const token = auth.secure({ user: { id: user.id } });
        const id = user._id;
        res.status(200).json({ id, token });
    } catch (err) {
        next(err);
        // res.status(500).send(cs.SAVE_ERROR);
    }
});

router.post('/login', async (req, res, next) => {
    const { email, password } = req.body;
    try {
        let user = await User.findOne({ email });

        if (!user) throw new APIError(cs.USER_NOT_FOUND, HttpStatus.NOT_FOUND);

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) throw new APIError(cs.INVALID_PASSWORD, HttpStatus.NOT_FOUND);

        const token = auth.secure({ user: { id: user.id } });

        const id = user._id;
        res.status(200).json({ id, token });
    } catch (err) {
        next(err);
    }
});

/**
 * @method - POST
 * @description - Get LoggedIn User
 * @param - /user/me
 */
router.get('/profile/:id', auth.verify, async (req, res, next) => {
    try {
        // request.user is getting fetched from Middleware after token authentication
        const user = await User.findById(req.params.id);
        const token = req['token'];
        const { _id, username, email } = user;
        token ? res.status(200).json({ _id, username, email, token }) : res.json(user);
    } catch (err) {
        next(err);
    }
});

module.exports = router;

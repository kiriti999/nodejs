// https://github.com/auth0/node-jsonwebtoken
// refresh token: https://github.com/jppellerin/node-jsonwebtoken#jwtrefreshtoken-expiresin-secretorprivatekey--callback
// expiry: https://github.com/vercel/ms
const cs = require('../constants');
const HttpStatus = require('http-status-codes');

var jwt = require('jsonwebtoken');
const APIError = require('../error-handler/base-error');
const secret = 'secure@123';

const auth = {
    secure(payload) {
        return jwt.sign({ data: payload }, secret, { expiresIn: cs.TOKEN_EXPIRY });
    },

    verify(req, res, next) {
        const token = req.header('authorization');
        if (!token) throw new APIError(cs.NO_TOKEN, HttpStatus.UNAUTHORIZED);
        try {
            const decoded = jwt.verify(token, secret);
            var tokenExp = decoded ? decoded.exp * 1000 : 0;
            var dateNow = Math.round(new Date().getTime());
            let diff = tokenExp > dateNow ? tokenExp - dateNow : dateNow - tokenExp;
            if (diff < 3600000) {
                req['token'] = auth.refresh(token);
            }
            req.user = decoded ? decoded.data.user : '';
            next();
        } catch (err) {
            next(err);
        }
    },

    refresh(token) {
        var originalDecoded = jwt.decode(token, { complete: true });
        var refreshed = jwt.refresh(originalDecoded, '7d', secret);

        // console.log('');
        // console.log('original ', JSON.stringify(originalDecoded));
        // console.log('');
        // new 'exp' value is later in the future.
        // console.log('refreshed ', JSON.stringify(jwt.decode(refreshed, { complete: true })));
        // console.log('refreshed ', refreshed);
        // console.log('');
        return refreshed;
    }
};

module.exports = auth;

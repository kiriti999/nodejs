
const router = require('express').Router();

//==================================
//GOOGLE REPORTS CONFIGURATION START
//==================================
router.get('/getGoogleReports', googleReports);
function googleReports(req, res, next) {
    console.log('getGoogleReports called');

    var key = require('./public_html/techstack21 Tech Blog-0185cf2d3c6b.json');
    var jwtClient;

    jwtClient = new google.auth.JWT(key.client_email, null, key.private_key, ['https://www.googleapis.com/auth/analytics.readonly'], null);
    console.log('=================================');
    console.log('=================================');
    console.log('=================================');
    console.log('jwtClient ', jwtClient);
    console.log('=================================');
    console.log('=================================');
    console.log('=================================');
    jwtClient.authorize(function (err, tokens) {
        console.log('retrieved tokens.access_token from google', tokens.access_token);
        google.options({
            auth: jwtClient
        });
        if (err) {
            console.error(err);
            return;
        }

        var googleRequest = {
            "reportRequests": [
                {
                    "viewId": "157679983",
                    "metrics": [
                        {
                            "expression": "ga:pageviews"
                        }
                    ]
                }
            ]
        };

        analytics.reports.batchGet({
            resource: googleRequest,
            auth: jwtClient
        }, function (err, resp) {
            console.log(err, resp);
            if (err) {
                console.error('error', err);
                return;
            }
            console.log('printing google report response...', resp);
            console.log(JSON.stringify(resp, null, 4));
            res.status(res.statusCode).send(resp);
        });
    });
}
//==================================
//GOOGLE REPORTS CONFIGURATION END
//==================================


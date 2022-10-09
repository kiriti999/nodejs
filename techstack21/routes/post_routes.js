
const postRouter = require('express').Router();
var nJwt = require('njwt');
const keys = require('../config/auth_keys');
var userModel = require('../schemas/user');
var articleModel = require('../schemas/article');
var categoryModel = require('../schemas/categories');
var category_article_model = require('../schemas/category_article_mapping');
var rp = require('request-promise');
var commons = require('../public_html/commons.json').commons;
var google = require('googleapis');
var querystring = require("querystring");
var OAuth2 = google.auth.OAuth2;


postRouter.post('/getRecent', getRecent);
postRouter.post('/getPostById', getPostById);
postRouter.post('/createGoogleBloggerPost', createGoogleBloggerPost);
postRouter.post('/new_topic', new_topic);
postRouter.post('/update_topic_by_topicId', update_topic);
postRouter.post('/getLinkedInToken', getLinkedInToken);

function getLinkedInToken(req, res, next) {
    var params = {
        grant_type: 'authorization_code',
        code: req.body.code,
        redirect_uri: commons.api_url,
        client_id: '81qr39kkcl6srr',
        client_secret: '7OhisqIt4POtuowV'
    };
    console.log('getting linkedin Token...', params);
    postApiResponse('https://www.linkedin.com/oauth/v2/accessToken', params, next, res);
}

function getRecent(req, res, next) {
    articleModel
        .find({})
        .sort({ $natural: -1 })
        .skip(parseInt(req.body.offset), 10)
        .limit(parseInt(req.body.limit), 10)
        .exec(function (err, articles) {
            if (err) {
                throw err;
            }
            return res.status(res.statusCode).send(articles);
        });
}

function new_topic(req, res, next) {
    console.log('');
    console.log('');
    console.log('creating new article... ');
    console.log('');
    console.log('');
    console.log('creating req.body.categories... ', req.body.categories);
    console.log('');
    console.log('');
    console.log('creating check array type req.body.categories... ', Array.isArray(req.body.categories));
    console.log('');
    console.log('');

    var article = new articleModel({
        "title": req.body.title,
        "details": (req.body.details),
        "username": req.body.username,
        "postImageUrl": req.body.postImageUrl,
        "url": querystring.escape(req.body.url),
        "categories": req.body.categories,
    });

    var category_length = req.body.categories.length;
    var categories = req.body.categories;

    article.save(function (err, newArticle) {
        if (err) throw err;
        console.log('article created ', newArticle._id);

        for (var i = 0; i < categories.length; i++) {

            (function (index) {
                var category_article = new category_article_model({
                    "category": categories[index],
                    "article_id": newArticle._id
                });

                category_article.save(function (err, new_category_article) {
                    if (err) throw err;
                    console.log('');
                    console.log('');
                    console.log(index + ': new Category created with category ID: ', new_category_article._id);
                    console.log(index + ': new Category created with article ID: ', new_category_article.article_id);
                    console.log('');
                    console.log('');
                })
            }(i));
        }

        return res.status(res.statusCode).send(unescapeArticle(newArticle));
    })
}

function update_topic(req, res, next) {
    var params = {
        "title": req.body.title,
        "details": (req.body.details),
        "url": querystring.escape(req.body.url)
    };
    console.log(' ');
    console.log(' ');
    console.log(' ');
    console.log('updating article using ID ', req.body.id);
    console.log(' ');
    console.log(' ');
    console.log(' ');

    articleModel.findOneAndUpdate({ _id: req.body.id }, params, { new: true }, function (err, updatedArticle) {
        if (err) throw err;
        console.log(' ');
        console.log(' ');
        console.log(' ');
        console.log('article updated', updatedArticle._id);
        console.log(' ');
        console.log(' ');
        console.log(' ');
        console.log(' ');
        console.log('calling unescape on article ', updatedArticle);
        console.log(' ');
        console.log(' ');
        console.log(' ');
        unescapeArticle(updatedArticle);
        console.log(' ');
        console.log(' ');
        console.log(' ');
        console.log('checking if unescaped ', updatedArticle);
        console.log(' ');
        console.log(' ');
        console.log(' ');

        return res.send(unescapeArticle(updatedArticle));
    })
}

function unescapeArticle(updatedArticle) {
    updatedArticle.url = querystring.unescape(updatedArticle.url);
    console.log('');
    console.log('');
    console.log('');
    console.log('is article details unescaped??? ', updatedArticle.details);
    console.log('');
    console.log('');
    console.log('');
    console.log('is article url unescaped??? ', updatedArticle.url);
    console.log('');
    console.log('');
    console.log('');
    console.log('is article unescaped??? ', updatedArticle);
    console.log('');
    console.log('');
    console.log('');
    return updatedArticle;
}

function getPostById(req, res, next) {
    articleModel.findById(req.body.id, function (err, article) {
        if (err) throw err;
        console.log('article by Id', article);
        return res.send(article);
    })
}

function postApiResponse(url, req, next, res) {
    console.log('req.auth in postAPIResponse is ', req.auth);
    var options = {
        uri: url,
        method: 'POST',
        body: req,
        headers: {
            'User-Agent': 'Request-Promise',
            "Authorization": "Bearer" + req.auth
        },
        json: true // Automatically parses the JSON string in the response
    };

    rp(options)
        .then(function (response) {
            console.log('==========@@@@@@@@@@@============');
            console.log('==========@@@@@@@@@@@============');
            console.log('==========@@@@@@@@@@@============');
            console.log("METHOD:POST -- RESPONSE.STATUSCODE: ", res.statusCode);
            console.log('==========@@@@@@@@@@@============');
            console.log('==========@@@@@@@@@@@============');
            console.log('==========@@@@@@@@@@@============');
            if (res.statusCode >= 100 && res.statusCode < 600)
                return res.status(res.statusCode).send(response);
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



//==================================
//BLOGGER API - START
//==================================
function getOAuthClient() {
    return new OAuth2(keys.google.clientID, keys.google.clientSecret, commons.api_url);
}

function createGoogleBloggerPost(req, res, next) {
    console.log('blogging...');

    var oauth2Client = getOAuthClient();
    var modifiedText = '<div style="white-space: pre-wrap;">' + req.body.details + '<span style=" font-size: 17px;">Check out more articles at: <a href="http://{DataMixin.api_url}">{DataMixin.api_url}</a></span>' + '</div>';
    var blogParams = {
        title: req.body.title,
        content: modifiedText,
        url: req.body.url
    };

    console.log('oauth2Client $$$$$', oauth2Client);
    oauth2Client.getToken(req.body.exchangeCode, function (err, tokens) {

        if (!err) {
            oauth2Client.setCredentials(tokens);

            var options = {
                uri: 'https://www.googleapis.com/blogger/v3/blogs/' + commons.google_blogger.id + '/posts/',
                method: 'POST',
                body: blogParams,
                headers: {
                    'User-Agent': 'Request-Promise',
                    "Authorization": 'Bearer ' + tokens.access_token
                },
                json: true // Automatically parses the JSON string in the response
            };

            rp(options)
                .then(function (response) {
                    console.log('=================================');
                    console.log('BLOGGER POST SUCCESS');
                    console.log('=================================');
                    if (res.statusCode >= 100 && res.statusCode < 600)
                        res.send("BLOG POST SUCCESS");
                    else
                        return res.status(500);
                })
                .catch(function (err) {
                    console.log('=================================');
                    console.error('POST error ', err.stack);
                    console.log('=================================');
                    return res.status(res.statusCode).send(err);
                });

        } else {
            console.error('Error Getting BloggerAPI Token', err);
        }
    });
}
//==================================
//BLOGGER API - END
//==================================

module.exports = postRouter;

const getRouter = require('express').Router();
var riot = require('riot');
var userModel = require('../schemas/user');
var articleModel = require('../schemas/article');
var categoryModel = require('../schemas/categories');
var category_article_model = require('../schemas/category_article_mapping');
var url = require('url');
var querystring = require("querystring");


getRouter.get('/getDataOnScrollEnd/:limit/:offset', getDataOnScrollEnd);
getRouter.get('/getCategoriesOnPageLoad', getCategoriesOnPageLoad);
getRouter.get('/createCategory/:name', createCategory);
getRouter.get('/deleteCategory/:name', deleteCategory);
getRouter.get('/getDataOnPageLoad/:limit/:offset', getDataOnPageLoad);
getRouter.get('/deleteTopic/:deleteId', deleteTopic);
getRouter.get('/article*', loadByUrl);
getRouter.get('/get_post_by_category/:name', getPostByCategory);
getRouter.get('/logout', logout);
getRouter.get('/linkedInQueryString', function (req, res) {
    res.redirect('/#!blog_topic_title/?code=' + req.query.code);
});

var authList = [];

function getPostByCategory(req, res, next) {
    console.log('');
    console.log('');
    console.log('getPostByCategory name ', req.params.name);
    console.log('');
    console.log('');

    articleModel.aggregate([
        {
            $match: { categories: req.params.name }
        },
        {
            $lookup: {
                from: "category_article_model",
                localField: "_id",
                foreignField: "article_id",
                as: "articlesByCategory"
            }
        }
    ], function (err, articlesByCategory) {
        if (err) throw err;
        console.log('');
        console.log('');
        console.log('article by category ', articlesByCategory);
        console.log('');
        console.log('');
        return res.send(articlesByCategory);
    })
}

function createCategory(req, res, next) {
    var category = new categoryModel({
        "category": req.params.name,
    });

    category.save(function (err, newCategory) {
        if (err) throw err;
        console.log('new Category created', newCategory);
        return res.send(newCategory);
    })
}

function deleteCategory(req, res, next) {
    categoryModel.remove({ category: req.params.name }, function (err, category) {
        if (err) throw err;
        console.log('category deleted', req.params.name);
        return res.sendStatus(200);
    })
}

function getCategoriesOnPageLoad(req, res, next) {
    categoryModel.find({}, function (err, categories) {
        if (err) throw err;
        console.log('getCategoriesOnPageLoad ', categories);
        res.send(categories);
    })
}

function logout(req, res, next) {
    req.logout();
    // techstack21_Security.logout(req, res);
    res.send({ redirect: 'logout', role: "ROLE_USER", username: '' });
}

function getDataOnScrollEnd(req, res, next) {

    articleModel
        .find({}).sort({ $natural: -1 })
        .skip(parseInt(req.params.offset, 10))
        .limit(parseInt(req.params.limit, 10))
        .exec(function (err, articles) {
            if (err) {
                throw err;
            }
            return res.status(res.statusCode).send(articles);
        });
}

function getDataOnPageLoad(req, res, next) {
    articleModel
        .find({}).sort({ $natural: -1 })
        .skip(parseInt(req.params.offset), 10)
        .limit(parseInt(req.params.limit), 10)
        .exec(function (err, articles) {
            if (err) {
                throw err;
            }
            console.log('');
            console.log('');
            console.log('');
            console.log('article on load ', articles);
            console.log('');
            console.log('');
            console.log('');
            return res.status(res.statusCode).send(articles);
        });
}

function loadByUrl(req, res, next) {
    var header_tag = require('../public_html/tags/header_tag.tag');
    var blog_post_details_USER = require('../public_html/tags/blog_post_details_USER.tag');
    var footer_tag = require('../public_html/tags/footer_tag.tag');
    var blog_sidebar_tag = require('../public_html/tags/blog_sidebar.tag');
    var blog_slide_menu_tag = require('../public_html/tags/blog_slide_menu.tag');

    // var post_title = req.url.split('article/')[1];
    var post_title = (req.url.split('article/')[1]).split('?fbclid')[0];
    console.log(' ');
    console.log(' ');
    console.log('post_title ', post_title);
    console.log(' ');
    console.log(' ');
    var dashed_url = post_title.split(' ').join('-');
    console.log(' ');
    console.log(' ');
    console.log('dashed_url:', dashed_url);
    console.log(' ');
    console.log(' ');
    var unescaped_url = querystring.unescape(dashed_url);
    console.log(' ');
    console.log(' ');
    console.log('unescaped_url ', unescaped_url);
    console.log(' ');
    console.log(' ');
    console.log(' ');
    console.log(' ');


    articleModel.find({ url: unescaped_url }, function (err, article) {
        if (err) {
            console.log('could not get article', err);
            return;
        }

        console.log(' ');
        console.log(' ');
        console.log('...................Printing article details................');
        console.log(' ');
        console.log(' ');
        console.log('article[0] ', typeof article[0] !== 'undefined' ? article[0] : article);
        console.log(' ');
        console.log(' ');
        console.log('article[0].title ', typeof article[0].title !== 'undefined' ? article[0].title : '');
        console.log(' ');
        console.log(' ');
        console.log('article[0].postImageUrl ', typeof article[0].postImageUrl !== 'undefined' ? article[0].postImageUrl : '');
        console.log(' ');
        console.log(' ');
        console.log('article[0].details ', typeof article[0].details !== 'undefined' ? article[0].details : '');
        console.log(' ');
        console.log(' ');
        console.log('article[0].url ', typeof article[0].url !== 'undefined' ? article[0].url : '');
        console.log(' ');
        console.log(' ');
        try {
            var postDetails, categories, blog_sidebar_tag_rendered, blog_slide_menu_tag_rendered,
                header_tag_rendered, blog_tag_rendered, footer_tag_rendered;

            // var authObject = techstack21_Security.getAuthentication();
            var authObject = {};

            console.log('.............................................................');
            console.log('.............SERVER-SIDE-RENDERING:START.....................');
            console.log('.............................................................');

            header_tag_rendered = riot.render(header_tag, { role: 'ROLE_USER' });
            blog_slide_menu_tag_rendered = riot.render(blog_slide_menu_tag, { role: 'ROLE_USER' });
            blog_tag_rendered = riot.render(blog_post_details_USER, { article: (article[0]) });
            blog_sidebar_tag_rendered = riot.render(blog_sidebar_tag, { role: 'ROLE_USER' });
            footer_tag_rendered = riot.render(footer_tag);

            var meta_details = {
                postImageUrl: article[0].postImageUrl,
                // title: article[0].title + " - techstack21.com",
                title: article[0].title,
                description: article[0].details.substring(0, 200) + "...",
                details: article[0].details,
                url: article[0].url
            };
            res.render('blog_post_details', {
                open_graph: meta_details,
                header_details: header_tag_rendered,
                slide_details: blog_slide_menu_tag_rendered,
                article_details: blog_tag_rendered,
                sidebar_details: blog_sidebar_tag_rendered,
                footer_details: footer_tag_rendered
            });

            console.log('............................................................');
            console.log('............SERVER-SIDE-RENDERING:END.......................');
            console.log('............................................................');

        } catch (err) {
            console.log('=================================');
            console.error('POST error ', err.stack);
            console.log('=================================');
            return res.status(res.statusCode).send(err);
        }
    });
}

function deleteTopic(req, res, next) {

    articleModel.findByIdAndRemove(req.params.deleteId, function (err, deletedArticle) {
        if (err) {
            throw err;
        }
        console.log('');
        console.log('');
        console.log('deleting article id: ', req.params.deleteId);
        console.log('');
        console.log('');
        console.log('article deleted:', deletedArticle);
        console.log('');
        console.log('');

        category_article_model.remove({ article_id: req.params.deleteId }, function (err, deletedArticleCategoryMapping) {
            if (err) {
                throw err;
            }
            console.log('');
            console.log('');
            console.log('deleting deletedArticleCategoryMapping: ', deletedArticleCategoryMapping);
            console.log('');
            console.log('');

            return res.sendStatus(200);
        })
    })
}

module.exports = getRouter;
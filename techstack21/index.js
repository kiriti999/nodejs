
require("style-loader!./public_html/assets/vendor/css/normalize.css");
require("style-loader!./public_html/assets/css/font-colors.css");
require("style-loader!./public_html/assets/css/font.css");
require("style-loader!./public_html/assets/css/custom.css");
require("style-loader!./public_html/assets/css/social.css");
require("style-loader!./public_html/assets/css/header_scoped.css");
require("style-loader!./public_html/assets/css/sidebar_scoped.css");
require("style-loader!./public_html/assets/css/signup_scoped.css");
require("style-loader!./public_html/assets/css/slide_scoped.css");
require("style-loader!./public_html/assets/css/media-queries.css");
require("style-loader!./public_html/assets/vendor/css/component.css");
require("style-loader!./public_html/assets/vendor/css/svg-menu.css");
require("style-loader!./public_html/assets/vendor/css/nprogress.css");

require("script-loader!./public_html/assets/js/textWrapper.js");
require("script-loader!./public_html/assets/vendor/js/PopupTools.min.js");
require("script-loader!./public_html/assets/vendor/js/classie.js");
require("script-loader!./public_html/assets/vendor/js/nprogress.js");

var riot = require('riot');

require("./public_html/tags/header_tag.tag");
require("./public_html/tags/blog_topic_title.tag");
require("./public_html/tags/blog_post_details_ADMIN.tag");
require("./public_html/tags/blog_post_details_USER.tag");
require("./public_html/tags/blog_edit_modal.tag");
require("./public_html/tags/blog_posting_modal.tag");
require("./public_html/tags/footer_tag.tag");
require("./public_html/tags/blog_slide_menu.tag");
require("./public_html/tags/post_blog.tag");
require("./public_html/tags/blog_sidebar.tag");
require("./public_html/tags/signup_popup.tag");
require("./public_html/tags/logout_tag.tag");



document.addEventListener('DOMContentLoaded', function (e) {

    commons = {};
    $.getJSON('commons.json', function (data) {
        commons = data.commons;
    });

    SharedMixin = {
        observable: riot.observable() //trigger,on,one etc
    };

    var self = this;
    self.data = {};

    window.DataMixin = {
        data: {
            "status": "Init",
            "processing": false,
            "limit": 3,
            "offset": 0,
            "currentOffset": 0
        },
        api_url: commons.api_url,


        setAuthentication: function (user) {
            if (typeof user !== 'undefined' && user !== null) {
                localStorage.setItem('role', user.role);
                localStorage.setItem('username', user.username);
            }
        },

        getRole: function () {
            return localStorage.getItem('role');
        },

        getUsername: function () {
            return localStorage.getItem('username');
        },

        getCookie: function (cname) {
            var name = cname + "=";
            var ca = document.cookie.split(';');
            for (var i = 0; i < ca.length; i++) {
                var c = ca[i];
                while (c.charAt(0) == ' ') {
                    c = c.substring(1);
                }
                if (c.indexOf(name) == 0) {
                    return c.substring(name.length, c.length);
                }
            }
            return "";
        },

        getCheckedBoxes: function (category_select) {
            //            var category = document.getElementById(category_select);
            //            var options = category && category.options;
            //            var opt;
            //            
            //            var checkboxesChecked = [];
            //            for (var i = 0; i < options.length; i++) {
            //                opt = options[i];
            //                if (options[i].selected) {
            //                    checkboxesChecked.push(opt.value || opt.text);
            //                }
            //            }
            //Improved version of getting select options as array using array.prototype.method!
            var checkboxesChecked = Array.prototype.slice.call(document.querySelectorAll('#category_select option:checked'), 0).map(function (v, i, a) {
                return v.value;
            });
            console.log('checkboxesChecked list', checkboxesChecked);
            // Return the array if it is non-empty, or null
            var result = checkboxesChecked.length > 0 ? checkboxesChecked : checkboxesChecked[0] = new Array("Miscellaneous");
            SharedMixin.observable.trigger('set_categories', result);
            return result;
        },

        getParameterByName: function (name, url) {
            if (!url) {
                url = window.location.href;
            }
            name = name.replace(/[\[\]]/g, "\\$&");
            var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
                results = regex.exec(url);
            if (!results) return null;
            if (!results[2]) return '';
            return decodeURIComponent(results[2].replace(/\+/g, " "));
        },

        get_data_page_load: function () {
            $.ajax({
                url: '/getDataOnPageLoad/' + encodeURIComponent(DataMixin.data.limit) + '/' + encodeURIComponent(DataMixin.data.offset),
                type: 'GET',
                async: true,
                success: function (res) {
                    DataMixin.data.topics = [];

                    if (res.redirect && res.redirect == "logout") {
                        riot.route('/logout');
                    } else {

                        for (var i = 0; i < res.length; i++) {
                            DataMixin.data.topics.push((res[i]));
                        }

                        //UPDATE AFTER GETTING COMMENT COUNT
                        DataMixin.data.categoryType = "All";
                        riot.mount('blog_sidebar');
                        SharedMixin.observable.trigger('set_data_on_load');
                    }
                },
                error: function (err) {
                    console.log('failed getting data on login', err);
                }
            });

            $.ajax({
                url: '/getCategoriesOnPageLoad',
                success: function (res) {
                    console.log('categories: ', res);
                    SharedMixin.observable.trigger('set_categories', res);
                },
                error: function (err) {
                    console.log('err', err);
                }
            });
        },

        get_data_on_scrollEnd: function (limit, offset) {
            $.ajax({
                url: '/getDataOnScrollEnd/' + encodeURIComponent(limit) + '/' + encodeURIComponent(offset),
                type: 'GET',
                async: true,
                success: function (res) {

                    for (var i = 0; i < res.length; i++) {
                        DataMixin.data.topics.push(res[i]);
                    }

                    //UPDATE AFTER GETTING COMMENT COUNT
                    SharedMixin.observable.trigger('set_data_on_load');

                },
                error: function (err) {
                    console.log('failed getting data on login', err);
                }
            });
        },

        sendAnalyticsData: function () {
            // Start : Google Analytics Code
            (function (i, s, o, g, r, a, m) {
                i['GoogleAnalyticsObject'] = r;
                i[r] = i[r] || function () {
                    (i[r].q = i[r].q || []).push(arguments);
                }, i[r].l = 1 * new Date();
                a = s.createElement(o),
                    m = s.getElementsByTagName(o)[0];
                a.async = 1;
                a.src = g;
                m.parentNode.insertBefore(a, m);
            })(window, document, 'script', 'https://www.google-analytics.com/analytics.js', 'ga');
            ga('create', 'UA-92532850-2', 'auto');
            ga('send', 'pageview');
            // Start : Google Analytics Code
        },

        b64toBlob: function (b64Data, contentType, sliceSize) {
            contentType = contentType || '';
            sliceSize = sliceSize || 512;

            var byteCharacters = atob(b64Data);
            var byteArrays = [];

            for (var offset = 0; offset < byteCharacters.length; offset += sliceSize) {
                var slice = byteCharacters.slice(offset, offset + sliceSize);

                var byteNumbers = new Array(slice.length);
                for (var i = 0; i < slice.length; i++) {
                    byteNumbers[i] = slice.charCodeAt(i);
                }

                var byteArray = new Uint8Array(byteNumbers);

                byteArrays.push(byteArray);
            }

            var blob = new Blob(byteArrays, { type: contentType });
            return blob;
        },

        getGoogleReports: function () {
            $.ajax({
                url: '/getGoogleReports',
                success: function (res) {
                    console.log('Google Report success: ', res);
                    DataMixin.totalPageViews = res.reports[0].data.totals[0].values[0];
                    console.log('Total site views: ', DataMixin.totalPageViews);
                },
                error: function (err) {
                    console.log('Googlr report error: ', err);
                }
            });
        }
    };


    // DataMixin.linkedInExchangeCode = {
    //     code: DataMixin.getParameterByName('code')
    // };

    // console.log("exchange code on load, " , self.linkedInExchangeCode);


    function goTo(path) {
        console.log('path ', path);
        DataMixin.sendAnalyticsData();
        //        DataMixin.getGoogleReports();
        window.pageState = '';

        if (path !== 'signup_popup' && DataMixin.state !== 'signup_popup') {
            //            window.onbeforeunload = function (e) {
            //                //no need to set any return msg as browser has its own default value.
            //                return "";
            //            };
        }

        if (path === 'blog_topic_title') {
            DataMixin.state = 'blog_topic_title';
            window.pageState = 'blog_topic_title';
            riot.update();
        } else if (path === 'article') {
            var posts = DataMixin.getParameterByName('dataUrl');
            SharedMixin.observable.trigger('post_details_url', posts);
            DataMixin.state = 'article';
            riot.update();
        } else if (path === 'blog_comments') {
            DataMixin.state = 'blog_comments';
            riot.update();
        } else if (path === 'signup_popup') {
            DataMixin.state = 'signup_popup';
            riot.mount("signup_popup");
            riot.update();
        } else if (path === 'Terms_of_use') {
            DataMixin.state = 'Terms_of_use';
            riot.mount("Terms_of_use");
            riot.update();
        } else if (path === 'logout') {
            DataMixin.state = 'logout';
            riot.mount("logout_tag");
            riot.update();
        }
        else {
            console.log('no path found');
            DataMixin.state = 'blog_topic_title';
            riot.route('/blog_topic_title');
            riot.update();
        }

    }

    riot.route.base('#!');
    header = riot.mount("header_tag");
    slide = riot.mount("blog_slide_menu");
    post = riot.mount("post_blog");
    footer = riot.mount("footer_tag");
    riot.route(goTo);
    riot.route.start(true);

    riot.mixin(SharedMixin);
    riot.mixin(DataMixin);
});

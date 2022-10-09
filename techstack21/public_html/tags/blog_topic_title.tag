<blog_topic_title>
    <div id='topic_{opts.topic._id}' if={(typeof DataMixin !== 'undefined' && DataMixin !== null) && (DataMixin.state=="blog_topic_title")}>
        <!--<div class='container-fluid'>-->
        <div class='article_subwrap'>
            <div class="listing-items fadeInAnimation">
                <div class="container-fluid">
                    <div class='row'>
                        <div class="col-md-12">
                            <div if="{(typeof DataMixin !== 'undefined' && DataMixin !== null) && (DataMixin.getRole() === 'ROLE_ADMIN')}">
                                <div class='col-md-3 col-sm-3 col-xs-3 no_padding mobile_margin_bottom20'>
                                    <!--EDIT BUTTON-->
                                    <button class='btn btn-default btn-sm btn-xs glyphicon glyphicon-pencil'
                                            data-toggle='modal' 
                                            id="edit_{opts.topic._id}"
                                            onclick="{openEditModal}">
                                    </button>
                                    <!--EDIT BUTTON-->
                                </div>

                                <!--DELETE POST-->
                                <div class='col-md-2 col-sm-3 col-xs-2 no_padding margin_left_minus_50'>
                                    <button class="btn btn-default btn-sm btn-xs glyphicon glyphicon-trash" id='delete_{opts.topic._id}' onclick='{deleteTopic}'></button>
                                </div>
                                <!--DELETE POST-->
                            </div>
                        </div>


                        <!--TITLE-->
                        <div class='col-md-12 col-sm-12 col-xs-12'>
                            <h4 style="margin-top: 20px;">
                                <a class="blog_item_title" id={opts.topic._id} href='article/{opts.topic.url}' style='text-align: justify; cursor: pointer'>{opts.topic.title}</a>
                            </h4>
                        </div>
                        <!--TITLE-->
                    </div>

                    <div class='row'></div>

                    <div class='row'>
                        <!--DATE--> <!--DETAILS-->
                        <div class='col-md-12 col-sm-12 col-xs-12'>
                            <h5 class="blog_time" style="margin-top: 0;">By techstack21 on {opts.topic.created_at.split("T")[0]}</h5>
                        </div>
                        <div class='col-md-12 col-sm-10 col-xs-12'>
                            <raw id="brief_topic_details"></raw>
                        </div>
                        <!--DATE--><!--DETAILS-->
                    </div>

                    <!--READ MORE And SOCIAL ICONS-->
                    <div class="" style='padding: 7px 1px;'>
                        <div class='flex-container'>
                            <div class='flex-item' style="max-width: 80%;">
                                <a class="underline_on_hover bold cursor_pointer" rel="read_more" id={opts.topic._id} href='article/{opts.topic.url}'>Read More..</a>
                            </div>
                            
                            <div class="flex-container" style="min-width: 19%;">
                                <div if="{(typeof DataMixin !== 'undefined' && DataMixin !== null) && (DataMixin.getRole() !== 'ROLE_ADMIN')}">
                                    <!--Facebook Share as User-->
                                    <a class='icon social'
                                       id="fb_{opts.topic._id}" name="fb_{opts.topic._id}" onclick='{fbsharePostAsUser}'>
                                        <i class='fa fa-facebook'></i>
                                    </a>
                                    <!--Facebook Share as User-->
                                </div>
                                
                                <div if="{(typeof DataMixin !== 'undefined' && DataMixin !== null) && (DataMixin.getRole() === 'ROLE_ADMIN')}">
                                    <!--Facebook Share ADMIN POST AS PAGE-->
                                    <a class='icon social'
                                        id="fb_shareAsAdmin" 
                                        name="fb_{opts.topic._id}"
                                        data-title='{opts.topic.title}'
                                        data-details='{opts.topic.details}'
                                        data-postImageUrl='{opts.topic.url}'
                                        data-url='https://techstack21.herokuapp.com//article/{opts.topic.url}'
                                        data-facebookEdit="facebookEdit"
                                        onclick='{openEditModal}'>

                                        <i class='fa fa-facebook' 
                                        data-title='{opts.topic.title}'
                                        data-details='{opts.topic.details}'
                                        data-postImageUrl='{opts.topic.url}'
                                        data-url='https://techstack21.herokuapp.com//article/{opts.topic.url}'
                                        data-facebookEdit="facebookEdit"></i>
                                    </a>
                                        <!--Facebook Share ADMIN POST AS PAGE-->
                                </div>



                                <div>
                                    <!--twitter share-->
                                    <a id="twitterShare" href='#' class='icon social tw' data-event="Twitter" onclick="{twittersharePostAsUser}">
                                        <i class='fa fa-twitter'></i>
                                    </a>
                                    <!--twitter share-->
                                </div>

                                <div>
                                    <!--linkedin share-->
                                    <a class="icon social tw" href='https://www.linkedin.com/shareArticle?mini=true&url=https://techstack21.herokuapp.com//article/{opts.topic.url}+&title={opts.topic.title}&summary=""&source=techstack21.in' target="_blank"  id="fb_{opts.topic._id}" >
                                        <i class='fa fa-linkedin'></i>
                                    </a>
                                    <!--linkedin share-->
                                </div>

                                <div>
                                    <!--Google share as ADMIN-->
                                    <a if="{(typeof DataMixin !== 'undefined' && DataMixin !== null) && (DataMixin.getRole() === 'ROLE_ADMIN')}" class="icon social tw" 
                                       id="blogger_{opts.topic._id}" 
                                       name="blogger_{opts.topic._id}" 
                                       data-title={opts.topic.title}
                                       data-details='{opts.topic.details}'
                                       data-imageurl='{opts.topic.postImageUrl}'
                                       data-url='https://techstack21.herokuapp.com//article/{opts.topic.url}' 
                                       onclick="{createGoogleBloggerPost}">

                                        <i class='fa fa-google-plus'
                                           data-title={opts.topic.title}
                                           data-details='{opts.topic.details}'
                                           data-imageurl='{opts.topic.postImageUrl}'
                                           data-url='https://techstack21.herokuapp.com//article/{opts.topic.url}'></i>
                                    </a>
                                    <!--Google share as ADMIN-->
                                </div>

                                <div if="{(typeof DataMixin !== 'undefined' && DataMixin !== null) && (DataMixin.getRole() !== 'ROLE_ADMIN')}">
                                    <!--Google share as USER-->
                                    <a class="icon social tw" href="//plus.google.com/share?&url=https://techstack21.herokuapp.com//article/{opts.topic.url}" target="_blank" 
                                        onclick="window.open(this.href, '', 'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,width=400,height=620'); 
                                        return false;" alt="Share on Google+">
                                        <i class='fa fa-google-plus'></i>
                                    </a>
                                    <!--Google share as USER-->
                                </div>
                            </div>
                        </div>
                    </div>
                    <!--READ MORE And SOCIAL ICONS-->
                </div>
            </div>
        </div>
    </div>


    <script>
        this.mixin(SharedMixin);
        var self = this;
        self.data = {};
        self.data.blogTopicsArr = [];

        self.on('mount', function() {
            if (opts.topic && opts.topic.details != null)
            self.brief_topic_details.innerHTML = opts.topic.details.substring(0, 200) + "...";
        });

        openEditModal(e){
            $('#blog_edit_modal').modal('show');
            document.getElementById('edit_form').children[1].setAttribute('id', opts.topic._id);
            document.getElementById('editTitle').value = opts.topic.title;
            document.getElementById('editTopicDetails').value = opts.topic.details;
            if(e.target.dataset.facebookedit == 'facebookEdit') {
                $('.edit_submit').hide();
                $('.fb_submit').show();
            }
        }

        deleteTopic(e){
            NProgress.start();
            var deleteId = e.target.id.split('_')[1];
            console.log('attempt deleting blog post id:', deleteId, '....');
            $.ajax({
                type:'GET',
                url:'/deleteTopic/' + encodeURIComponent(deleteId),
                success: function(res){
                    console.log('post delete success: ', res);
                    DataMixin.data.topics.forEach(function(el, i){
                    if (el._id == deleteId){
                        DataMixin.data.topics.splice(i, 1);
                    }
                });
                self.observable.trigger('post_delete', deleteId);
                    NProgress.done();
                },
                error: function(err){
                    console.log('Failed to delete blog post from DB....', err);
                }
            });
        }

        //twitter share
        twittersharePostAsUser(e){
            $("meta[property='og\\:title']").attr("content", opts.topic.title);
            var url = 'http://twitter.com/share?text=' + opts.topic.title + '&url=http://https://techstack21.herokuapp.com/&hashtags=Technology';
            window.open(url, 'popup', 'width=500,height=500');
        }

        //google blogger post
        createGoogleBloggerPost(e) {
            console.log('blogging...');
            var params = {};
            NProgress.start();
            
            window.auth2.grantOfflineAccess().then(function(authResult){
                
                if (authResult['code']){
                    params = {
                        title: e.target.dataset.title,
                        details: e.target.dataset.details,
                        imageurl: e.target.dataset.imageurl,
                        url: e.target.dataset.url,
                        exchangeCode: authResult['code']
                    }

                    $.ajax({
                    url:'/createGoogleBloggerPost',
                        type: 'POST',
                        data:params,
                        success:function(res){
                        console.log('Blogger post status ', res);
                        NProgress.done();
                        if (res == "BLOG POST SUCCESS")
                            alert('Posted article to google blogger successfully!');
                        },
                        error: function(err){
                        console.log(err);
                        NProgress.done();
                        }
                    })
                }
            });
            console.log('google blogger params ', params);
        }

        //linkedIn share
        linkedInshare(e){
            popupTools.popup('linkedInshare/', "linkedin Authentication", {}, function (err, user) {
                if (err) {
                    console.log(err.message);
                } else {
                    console.log('user social profile ', user);
                    NProgress.done();
                }
            });
        }

        //Facebook share
        fbsharePostAsUser(e){
            console.log('sharing posts as User...', opts);

            FB.ui({
                // method: 'share_open_graph',
                method: 'share',
                action_type: 'og.shares',
                action_properties: JSON.stringify({
                    object: {
                        'og:url': 'https://techstack21.herokuapp.com//article/' + opts.topic.url,
                        'og:title': opts.topic.title,
                        'og:description': opts.topic.details,
                        //'og:image': opts.topic.postImageUrl
                    }
                })
                }, function(response){
                    console.log('FACEBOOK FEED SHARE SUCCESS', response);
            });
        }
        
        toBoldUnicode(str) {
            var strArr = str.split('');
            for (let i = 0; i < strArr.length; i++) {
                let BUnicode = self.toUnicode(strArr[i]);
                strArr[i] = '&#' + "0000".substring(0, 4 - BUnicode.length) + BUnicode;
            }
            var joined = strArr.join("");
            var el = document.createElement('div');
            el.innerHTML = joined;
            return el.innerHTML;
        }

        toUnicode(char) {
            let unicode = char.charCodeAt(0);
            if (97 <= unicode && unicode <= 122) {
                return (unicode + 119737);
            } else if (65 <= unicode && unicode <= 90) {
                return (unicode + 119743);
            } else if (48 <= unicode && unicode <= 57) {
                return (unicode + 120764);
            }
            return unicode;
        }

        
    </script>
    
</blog_topic_title>
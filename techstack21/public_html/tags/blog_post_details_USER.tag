<blog_post_details_USER class='mobile_center'>
    
    <div class='content col-md-9' {opts}>
        <div class='container-fluid'>
            <div class='row'>
                <div class="col-md-12 fadeInAnimation" id='blog_post_details' style="padding: 0 5%;">
                    <div class='row blog_item_title_post_details'>
                        <div class='col-md-12 margin_bottom5' style='text-align: justify'>
                            <h4 style="margin-top: 20px;">
                                <a class="blog_item_title" href='#'>{article.title} </a>
                            </h4>
                        </div>
                    </div>

                    <div class='row'>
                        <div class='col-md-12 col-md-12 col-xs-12 mobile_margin_bottom10'>
                            <div class='blog_time'>
                                <h5 class="blog_time" style="margin-top: 0;">By techstack21 on {article.created_at}</h5>
                            </div>
                        </div>
                    </div>


                    <div class='row'>
                        <div class='col-md-12 col-md-12 col-xs-12'>
                            <raw id="complete_topic_details"></raw>
                        </div>
                    </div>
                    
                        
                    <!--SOCIAL ICONS AND THUMBS UP-->
                    <div class="" style='padding: 7px 1px; margin-top: 10px;'>
                        <div class='flex-container'>
                            <div class='flex-item' style="max-width: 80%;">
                                    <div>
                                        <!--Facebook Share USER-->
                                        <a class='icon social'
                                            id="fb_shareAsUser" 
                                            name="fb_{article.article_id}"
                                            data-title={article.title}
                                            data-details='{article.details}'
                                            data-postImageUrl='{article.url}'
                                            data-url='{DataMixin.api_url}/article/{article.url}'
                                            onclick='{fbSharePostAsUser}'>

                                            <i class='fa fa-facebook' 
                                            data-title={article.title}
                                            data-details='{article.details}'
                                            data-postImageUrl='{article.url}'
                                            data-url='{DataMixin.api_url}/article/{article.url}'></i>
                                        </a>
                                         <!--Facebook Share USER-->
                                    </div>
                                <div>
                                    <!--twitter share-->
                                    <a id="twitterShare" href='http://twitter.com/share?text={article.title}&url={DataMixin.api_url}/article/{article.url}&hashtags=tech' target="_blank" class='icon social tw' data-event="Twitter">
                                        <i class='fa fa-twitter'></i>
                                    </a>
                                    
                                    <!--twitter share-->
                                </div>
                                <div>
                                    <!--linkedin share-->
                                    <a class="icon social tw" href='https://www.linkedin.com/shareArticle?mini=true&url={DataMixin.api_url}/article/{article.url}+&title={article.title}&summary=""&source=techstack21.com' target="_blank" id="fb_{article.article_id}" >
                                        <i class='fa fa-linkedin'></i>
                                    </a>
                                    <!--linkedin share-->
                                </div>

                                <div>
                                    <!--  google share
                                    <a class="icon social tw" href="//plus.google.com/share?&url={DataMixin.api_url}/article/{article.url}" onclick="window.open(this.href, '','scrollbars=1', 'width=400,height=620'); return false;">
                                        <i class='fa fa-google-plus'></i>
                                    </a>  -->
                                     <!--Google share as ADMIN-->
                                        <a class="icon social tw" 
                                           id="blogger_shareAsAdmin" 
                                            name="blogger_{post_details.article_id}" 
                                            data-title={post_details.title}
                                            data-details='{post_details}'
                                            data-postImageUrl='{post_details.postImageUrl}'
                                            data-url='{DataMixin.api_url}/article/{post_details.title}' 
                                            onclick="{createGoogleBloggerPost}">

                                            <i class='fa fa-google-plus'
                                            data-title={post_details.title}
                                            data-details='{post_details}'
                                            data-postImageUrl='{post_details.postImageUrl}'
                                            data-url='{DataMixin.api_url}/article/{post_details.title}'></i>
                                        </a>
                                        <!--Google share as ADMIN-->
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <!--DISQUS-->
            <!--DISQUS-->
            
            <div class='' style="margin-top: 50px;">
                <div id="disqus_thread"></div>
            </div>
            
            <!--DISQUS-->
            <!--DISQUS-->
            
        </div>
        <div class="clear"></div>
    </div>
    
    <script>
        var self = this;
        self.data = {};

        if(typeof opts !== 'undefined' && opts !== null) {
            self.article = (opts.article);
            self.complete_topic_details.innerHTML = (opts.article.details);
        }
        
        riot.util.tmpl.errorHandler = function (err) {
            console.error(err.message + ' in ' + err.riotData.tagName); // your error logic here
        }
        
        linkedInShare(e) {
            popupTools.popup('linkedInShare/', "linkedin Authentication", {}, function (err, user) {
                if (err) {
                    console.log(err.message);
                } else {
                    console.log('user social profile ', user);
                    NProgress.done();
                }
            });
        }

        createGoogleBloggerPost(e) {
            console.log('blogging...');
            var params = {};
            
            window.auth2.grantOfflineAccess().then(function(authResult){
                if(authResult['code']){
                    params = {
                        title: e.target.dataset.title,
                        details: e.target.dataset.details,
                        postImageUrl: e.target.dataset.postImageUrl,
                        url: e.target.dataset.url,
                        exchangeCode: authResult['code']
                    }
                    
                    console.log('EXCHANGE CODE CLIENT SIDE ', authResult['code']);
                    
                    $.ajax({
                        url:'/createGoogleBloggerPost',
                        type: 'POST',
                        data:params,
                        success:function(res){
                            console.log('Blogger post status ', res);
                            if(res == "BLOG POST SUCCESS")
                            alert('Posted article to google blogger successfully!');
                        },
                        error: function(err){
                            console.log(err);
                        }
                    })
                }
            });
            console.log('google blogger params ', params);
        }
    </script>
</blog_post_details_USER>
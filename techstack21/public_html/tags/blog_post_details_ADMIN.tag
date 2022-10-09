<blog_post_details_ADMIN>
    <div class='content col-md-9 '>
        <div class='container-fluid'>
            <div class='row'>
                <div class="col-md-12 fadeInAnimation" id='blog_post_details' style="padding: 0 5%;">
                        <div class='row blog_item_title_post_details'>
                            <div class='col-md-12 margin_bottom5' style='text-align: justify'>
                                <h4 style="margin-top: 20px;">
                                    <a class="blog_item_title" href='#'>{post_details.title} </a>
                                </h4>
                            </div>
                        </div>
                        <div class='row'>
                            <div class='col-md-12 col-md-12 col-xs-12 mobile_margin_bottom10'>
                                <div class='blog_time'>
                                    <h5 class="blog_time" style="margin-top: 0;">By techstack21 on {post_details.created_at}</h5>
                                </div>
                            </div>
                        </div>
                    
                    
                        <div class='row'>
                            <div class='col-md-12 col-md-12 col-xs-12'>
                                <raw id="complete_topic_details"></raw>
                            </div>
                        </div>
                    
                        
                        <!--SOCIAL ICONS AND THUMBS UP-->
                        <div class="" style='padding: 7px 1px;'>
                            <div class='flex-container'>
                                <div class='flex-item' style="max-width: 80%;">
                                    <div>
                                        <!--Facebook Share ADMIN POST AS PAGE-->
                                        <a class='icon social'
                                            id="fb_shareAsAdmin" 
                                            name="fb_{post_details.article_id}"
                                            data-title={post_details.title}
                                            data-details='{post_details.details}'
                                            data-postImageUrl='{post_details.postImageUrl}'
                                            data-url='{DataMixin.api_url}/article/{post_details.url}'
                                            onclick='{sharePostAsAdmin}'>

                                            <i class='fa fa-facebook' 
                                            data-title={post_details.title}
                                            data-details='{post_details.details}'
                                            data-postImageUrl='{post_details.postImageUrl}'
                                            data-url='{DataMixin.api_url}/article/{post_details.url}'></i>
                                        </a>
                                         <!--Facebook Share ADMIN POST AS PAGE-->
                                    </div>
                                    <div>
                                        <!--twitter share-->
                                        <a id="twitterShare" href='#' class='icon social tw' data-event="Twitter" onclick="{socialSharePostAsUser}">
                                            <i class='fa fa-twitter'></i>
                                        </a>
                                        <!--twitter share-->
                                    </div>
                                    <div>
                                        <!--linkedin share-->
                                        <a class="icon social tw" href='https://www.linkedin.com/shareArticle?mini=true&url={DataMixin.api_url}/article/{post_details.title}+&title={post_details.title}&summary=""&source=techstack21.com' target="_blank"  id="fb_{post_details.article_id}" >
                                            <i class='fa fa-linkedin'></i>
                                        </a>
                                        <!--linkedin share-->
                                    </div>
                                    <div>
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
                        <!--SOCIAL ICONS AND THUMBS UP-->
                       
                        <div class='row'>
                            <div class='col-md-12'>
                            </div>
                        </div>
                    <div class="clear"></div>
                </div>
            </div>
            
            <!--DISQUS-->
            <!--DISQUS-->
            
            <div class=''>
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
        
        if(opts.details != null){
            self.post_details = opts.details;
            self.complete_topic_details.innerHTML = opts.details.details;
        }
        
        riot.util.tmpl.errorHandler = function (err) {
            console.error(err.message + ' in ' + err.riotData.tagName); // your error logic here
        }
        
        socialSharePostAsUser(e){
            $("meta[property='og\\:title']").attr("content", opts.topic.title);
            var url = 'http://twitter.com/share?text='+opts.topic.title+'&url={DataMixin.api_url}&hashtags=blogger';
            window.open(url, 'popup', 'width=500,height=500');
        }
        
        createGoogleBloggerPost(e) {
            console.log('sharing posts as Admin...');
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
        
        
        shareToLinked(e){
            popupTools.popup('shareToLinked/', "linkedin Authentication", {}, function (err, user) {
                if (err) {
                    console.log(err.message);
                } else {
                    console.log('user social profile ', user);
                    NProgress.done();
                }
            });
        }
        
        //Facebook share
        sharePostAsAdmin(e){
            console.log('sharing posts as Admin...');
            
            var params = {
                title: e.target.dataset.title,
                details: e.target.dataset.details,
                postImageUrl: e.target.dataset.postImageUrl,
                url: e.target.dataset.url
            }
            console.log('params ', params);
            
            $.ajax({
                url:'/sharePost',
                type: 'POST',
                data:params,
                success: function(res){
                    alert('FACEBOOK SHARE SUCCESS');
                    console.log('FACEBOOK SHARE SUCCESS:' , res);
                    
                },
                error: function(err){
                    alert('FACEBOOK SHARE FAILED');
                    console.log('FACEBOOK SHARE FAILED:' ,err);
                }
            });
        }
        
    </script>
</blog_post_details_ADMIN>
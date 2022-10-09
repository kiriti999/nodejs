<blog_slide_menu>
    <nav class="cbp-spmenu cbp-spmenu-vertical cbp-spmenu-right" id="cbp-spmenu-s2">
        <div style="background: #fff;display: flex;">
            <div style="flex:1">
                <h3>techstack21</h3>
            </div>
            <div id="menuClose" class="fa fa-close"></div>
        </div>
        <ul id="main-menu-list">
            <li class="main-menu-item" if="{(typeof DataMixin !== 'undefined' && DataMixin !== null) && (DataMixin.getRole() === 'ROLE_ADMIN')}">
                <a>
                    <span class="create_button btn btn-xs btn-default" id='post_new_topic_btn' data-toggle="modal" data-target="#blog_posting_modal">+ CREATE POST</span>
                </a>
            </li>
        
        <!--  <a href="/#blog_topic_title">Home</a>  -->
        <!--  <a href="#">About me</a>  -->
        <!--  <a href="#">Use cases</a>  -->
        <!--  <a href="#">Interview Preparations</a>  -->
        <!--  <a href="#">Latest Blogs</a>  -->
        <!--  <a href="#">Videos</a>  -->
        <!--  <a href="#">Contact us</a>  -->

            <li><a href="https://techstack21.herokuapp.com/">Home</a></li>
            <li if={(typeof DataMixin !== 'undefined' && DataMixin !== null) && (DataMixin.state!=="undefined")}><a onclick="{getArticleByCategory}" href="#">Javascript</a></li>
            <li if={(typeof DataMixin !== 'undefined' && DataMixin !== null) && (DataMixin.state!=="undefined")}><a onclick="{getArticleByCategory}" href="#">NodeJs</a></li>
            <li if={(typeof DataMixin !== 'undefined' && DataMixin !== null) && (DataMixin.state!=="undefined")}><a onclick="{getArticleByCategory}" href="#">Jquery</a></li>
            <li if={(typeof DataMixin !== 'undefined' && DataMixin !== null) && (DataMixin.state!=="undefined")}><a onclick="{getArticleByCategory}" href="#">Latest Tech</a></li>
            <li class="flex-item loginBtn fb-mobile" if="{(typeof DataMixin !== 'undefined' && DataMixin !== null) &&  DataMixin.getUsername() === ''}">
                <a data-toggle="collapse" id='login' data-target=".navbar-collapse.in" href="#" onclick="{fbLogin}">Login with Facebook</a>
            </li>
        </ul>

        <!--  <a href="#" id="adminLogin" onclick="{authenticate}" if="{opts.role == 'ROLE_USER' || DataMixin.getRole() != 'ROLE_ADMIN'}">ADMIN LOGIN</a>  -->
        <li class="main-menu-item" if="{(typeof DataMixin !== 'undefined' && DataMixin !== null) && DataMixin.getUsername() !== ''}">
            <a data-toggle="collapse" id='logout' data-target=".navbar-collapse.in" href="#" onclick="{logout}">LOGOUT</a>
        </li>
    </nav>

    <script>

        SharedMixin = {
            observable: riot.observable() //trigger,on,one etc
        };
        this.mixin(SharedMixin);
        var self = this;
        self.data = {};
        self.data.categories = [];

        
        
        
        fbLogin() {
            FB.login(function(response) {
                console.log('login response' , response);
                 if (response.authResponse) {
                    // Get and display the user profile data
                    self.getFbUserData();
                } else {
                    alert('User cancelled login or did not fully authorize');
                }
            }, {'scope': 'email, manage_pages, publish_pages', return_scopes: true} );
        }

        getFbUserData() {
            FB.api('/me/accounts', function (response) {
                console.log('page response', response);
                  var user = {
                    username: response.data[0].name,
                    role: "ROLE_ADMIN"
                };
                DataMixin.data.fb_page_id = response.data[0].id;
                DataMixin.data.fb_page_access_token = response.data[0].access_token;
                DataMixin.setAuthentication(user);
                self.update();
                self.observable.trigger('login');
            }, {scope:"manage_pages"});
        }
        

        getArticleByCategory(e) {
            //classie.toggle($('#cbp-spmenu-s2'), 'cbp-spmenu-open');
            //$('#cbp-spmenu-s2').removeClass('cbp-spmenu-open');
            console.log('slide datamixin', DataMixin);
            console.log('slide datamixin', DataMixin.getRole());
            console.log('e.target.innerText', e.target.innerText);
            $.ajax({
                url:'/get_post_by_category/' + encodeURIComponent(e.target.innerText),
                success: function(articles) {
                    console.log('success postByCategories: ', articles);
                    DataMixin.data.topics = articles;
                    self.observable.trigger('set_data_on_load');
                },
                error: function(err){
                    console.log('error ', err);
                }
            })
        }
        
        
        self.on('mount', function () {
            
            if(document.getElementById) {
                var menuRight = document.getElementById('cbp-spmenu-s2');
                var showRightPush = document.getElementById('nav-icon3');
                var menuClose = document.getElementById('menuClose');
                var mainMenuList = document.getElementById('main-menu-list');
                var body = document.body;

                showRightPush.onclick = function() {
                    classie.toggle(menuRight, 'cbp-spmenu-open');
                };
                
                menuClose.onclick = function(){
                    classie.toggle(menuRight, 'cbp-spmenu-open');
                    $('#cbp-spmenu-s2').removeClass('cbp-spmenu-open');
                }
            }
        });
        
        
        authenticate(){
            self.currentState = DataMixin.state;
            self.observable.trigger('previous_state', self.currentState);
            riot.route('signup_popup');
        }

        logout() {
            $.ajax({
                url:"/logout",
                success: function(res){
                    DataMixin.setAuthentication(res);
                    $('#cbp-spmenu-s2').removeClass('cbp-spmenu-open');
                    riot.route(res.redirect); 
                },
                error: function(err){
                    console.error('err ', err);
                }
            });
        }

    </script>

    <style>
        /* Facebook */
        .fb-mobile {
        background-color: #4C69BA;
        background-image: linear-gradient(#4C69BA, #3B55A0);
        /*font-family: "Helvetica neue", Helvetica Neue, Helvetica, Arial, sans-serif;*/
        text-shadow: 0 -1px 0 #354C8C;
        /*padding: 0 10px 0 40px;*/
        }
        .fb-mobile:before {
        border-right: #364e92 1px solid;
        background: url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/14082/icon_facebook.png') 6px 6px no-repeat;
        }
        .fb-mobile:hover,
        .fb-mobile:focus {
            color: white;
        }
    </style>
</blog_slide_menu>

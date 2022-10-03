<blog_sidebar>
    <div class="col-md-2" if="{(typeof DataMixin !== 'undefined' && DataMixin !== null) && (DataMixin.state === 'blog_topic_title')}">
        <div class='row'>
            <div class="col-md-12 padding_right_zero">
                <div class="mobile_margin_top70" style="margin-bottom: 20px;">
                    <h5 class="sidebar">RECENT POSTS</h5>
                </div>
                <div class="row">
                    <div class="col-md-12" id="recent_parent">
                        <ul each="{item, i in data.recents}" >
                            <li class="padding_12_0">
                                <a id="{item._id}" href='{DataMixin.api_url}/article/{item.url}'>{item.title}</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        
        
        <div class='row' if="{(typeof DataMixin !== 'undefined' && DataMixin !== null) && (DataMixin.state === 'blog_topic_title')}">
        <!--  <div class='row' if="{(typeof DataMixin !== 'undefined' && DataMixin !== null) && (DataMixin.getRole() === 'ROLE_ADMIN')}">  -->
            <div class="col-md-12">
                <div class='category-block'>
                    <div class='category-name'>
                        <h5 class=" sidebar">CATEGORY</h5>
                    </div>
                    <div class='add-category-icon' style="display: inline-block" if="{(typeof DataMixin !== 'undefined' && DataMixin !== null) && (DataMixin.getRole() === 'ROLE_ADMIN')}">
                        <span class="glyphicon glyphicon-plus" onclick="{showCategory}" style="cursor:pointer"></span>
                    </div>
                    
                     <div style="display:flex" id="addCategory" class="hidden">
                        <div style="flex:1">
                            <input type="text" class="form-control" id="categoryInput"/>
                        </div>
                        <div class='category-save-icon'>
                            <button class="btn btn-default" onclick="{createCategory}"><span class="glyphicon glyphicon-ok-circle"></span></button>
                        </div>
                        <div class='category-delete-icon'>
                            <button class="btn btn-default" onclick="{cancelCategory}"><span class="glyphicon glyphicon-remove-circle"></span></button>
                        </div>
                    </div>
                    
                    <!--  <ul each="{item, i in data.categories}" class='category_list_parent'>  -->
                    <ul class='category_list_parent'>
                        <!--  <li class="category_list" name = 'category-name' >
                            <div id="{item._id}" onclick="{getArticleByCategory}">{item.category}</div>
                        </li>  -->
                        
                         <li class="category_list" name = 'category-name' >
                            <div onclick="{getArticleByCategory}">ReactJs</div>
                        </li>
                         <li class="category_list" name = 'category-name' >
                            <div onclick="{getArticleByCategory}">MongoDb</div>
                        </li>
                        <li class="category_list" name = 'category-name' >
                            <div onclick="{getArticleByCategory}">JointJs</div>
                        </li>
                        <li class="category_list" name = 'category-name' >
                            <div onclick="{getArticleByCategory}">D3Js</div>
                        </li>
                        <li class="category_list" name = 'category-name' >
                            <div onclick="{getArticleByCategory}">Anuglar</div>
                        </li>
                        <li class="category_list" name = 'category-name' >
                            <div onclick="{getArticleByCategory}">Java</div>
                        </li>
                        <li class="category_list" name = 'category-name' >
                            <div onclick="{getArticleByCategory}">Git</div>
                        </li>


                        <li class="category_list" name = 'remove-category-icon' if="{(typeof DataMixin !== 'undefined' && DataMixin !== null) && (DataMixin.getRole() === 'ROLE_ADMIN')}"> 
                            <span onclick="{deleteCategory}" name="{item.category}" class="glyphicon glyphicon-remove-circle"></span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
    
    
    <script>
        this.mixin(SharedMixin);
        var self = this;
        self.data = {};
        self.data.categories = [];
                
        showCategory(e){
            document.getElementById("addCategory").classList.remove('hidden');
            document.getElementById("categoryInput").value = "";
        }
        
        cancelCategory(e) {
            document.getElementById("addCategory").classList.add('hidden');
        }
        
        createCategory(e) {
            self.categoryValue = document.getElementById('categoryInput').value;
            if(self.categoryValue.length > 2) {
                $.ajax({
                    url:'/createCategory/' + encodeURIComponent(self.categoryValue),
                    success: function(res) {
                        console.log('success createCategory: ', res);
                        self.data.categories.unshift(res.category);
                        document.getElementById("categoryInput").value = "";
                        document.getElementById("addCategory").classList.add('hidden');
                        self.update();
                    },
                    error: function(err){
                        console.log('error ', err);
                    }
                })
            } else {
                alert('Category name should be atleast 3 letters');
            }
            
            e.preventDefault();
        }

        deleteCategory(e) {
            self.categoryToBeDeleted = e.target.getAttribute('name');
            $.ajax({
                url:'/deleteCategory/' + encodeURIComponent(self.categoryToBeDeleted),
                success: function(res) {
                    console.log('success deleteCategory: ', res);
                    self.data.categories.forEach(function(e,i) {
                        if(e.category === self.categoryToBeDeleted) {
                            self.data.categories.splice(i,1);
                        }
                    })
                    document.getElementById("categoryInput").value = "";
                    document.getElementById("addCategory").classList.add('hidden');
                    self.update();
                },
                error: function(err){
                    console.log('error ', err);
                }
            })
            e.preventDefault();
        }

        getArticleByCategory(e) {
            var that = $(this);
            that.off('click'); // remove handler
            console.log('e.target.innerText', e.target.innerText);
            DataMixin.data.categoryType = e.target.innerText;
            console.log('active ajax requests', $.active);
            if($.active == 0) {
                $.ajax({
                    url:'/get_post_by_category/' + encodeURIComponent(e.target.innerText),
                    success: function(articles) {
                        console.log('success postByCategories: ', articles);
                        DataMixin.data.topics = articles;
                        setTimeout(function() {
                            self.observable.trigger('set_data_on_load');
                        },1000)
                    },
                    error: function(err) {
                        console.log('error ', err);
                    }
                })
                .always(function() {
                    that.on('click', self.getArticleByCategory); // add handler back after ajax
                });
            }
        }
        
        getRecentPosts() {
            self.data.recents = [];
            console.log('getting recent posts...', DataMixin.data.topics.length);
            var params = {
                limit: 5,
                offset: DataMixin.data.topics.length < 5 ? 0 : DataMixin.data.topics.length - 5
            };
            $.ajax({
                url:'/getRecent',
                type:'POST',
                data: params,
                success: function(res) {
                    console.log('get recent articles' , res);
                    res.forEach(function(el, i) {
                        self.data.recents.push(el);
                    });
                    self.update();
                },
                error: function(err) {
                    console.log('Recent posts failed ', err);
                }
            });
        }
        
        SharedMixin.observable.on('set_data_on_load', function() {
            self.getRecentPosts();
        });
        
        self.observable.on('set_categories', function(categories) {
            categories.forEach(function(v, i) {
                self.data.categories.push(v);
            })
            self.update();
        });

        self.observable.on('post_delete', function(deleteId) {
            self.getRecentPosts();
        });
        
    </script>

</blog_sidebar>

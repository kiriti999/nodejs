<post_blog>
    
<div class="col-md-10" if={DataMixin.state=="blog_topic_title"} style="margin-bottom: 10px;">

    <!--BLOG_CREATE_MODAL-->
        <blog_posting_modal id="blog_posting_modal" class="modal fade" data-backdrop="static" data-keyboard="false" role="dialog"></blog_posting_modal>
    <!--BLOG_CREATE_MODAL-->

    <!--BLOG_EDIT_MODAL-->
        <blog_edit_modal id="blog_edit_modal" class="modal fade" role="dialog"></blog_edit_modal>
    <!--BLOG_EDIT_MODAL-->

    <!--BLOG TITLES-->
        <blog_topic_title each="{item , i in data.blogTopicsArr}" index={i} id={item._id} topic="{item}"></blog_topic_title>
    <!--BLOG TITLES-->
</div>  

    
    <script>
        this.mixin(SharedMixin);
        var self = this;
        self.data = {};
        
        self.on('mount', function() {
            console.log('self.root.localName ', self.root.localName);
        });
        
        updateTitles(){
            self.data.blogTopicsArr = DataMixin.data.topics;
            self.update();
        }
        
        loadMore(){
            if (DataMixin.data.categoryType == 'All') {
                DataMixin.get_data_on_scrollEnd(3, DataMixin.data.topics.length);
            }
        }
        
        //==============================OBSERVABLES START========================================//
        self.observable.on('set_data_on_load', function() {
            self.updateTitles();
        });
        
        self.observable.on('post_created', function() {
            self.data.blogTopicsArr = DataMixin.data.topics;
            self.update();
        });
        
        self.observable.on('post_edit', function() {
            self.data.blogTopicsArr = DataMixin.data.topics;
            self.update();
        });
        
        self.observable.on('post_delete', function(deleteId) {
            self.data.blogTopicsArr = DataMixin.data.topics;
            self.update();
        });

        self.observable.on('login', function() {
            self.update();
        });
        //==============================OBSERVABLES END========================================//
        
    </script>

    <style scoped>
        #post_blog_subTitle{
            font-weight: bold;
        }

        .pad5555{
            padding: 0px 55px 0px 12px;
        }
    </style>
</post_blog>
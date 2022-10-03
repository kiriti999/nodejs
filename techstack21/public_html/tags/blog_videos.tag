<blog_videos>
    <div if={DataMixin.state=="blog_videos"}>
        <div class="container-fluid">
            <div class="row">
                <div class="col-md-6">
                    <div class="embed-responsive embed-responsive-16by9">
                        <!--<iframe class="embed-responsive-item" src="//www.youtube.com/embed/ePbKGoIGAXY"></iframe>-->
                        <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/2JZW0Epttx4" frameborder="0" allowfullscreen></iframe>
                    </div>
                </div>
                
                <div class="col-md-6">
                    <div class="embed-responsive embed-responsive-16by9">
                        <!--<iframe class="embed-responsive-item" src="//www.youtube.com/embed/ePbKGoIGAXY"></iframe>-->
                        <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/2JZW0Epttx4" frameborder="0" allowfullscreen></iframe>
                    </div>
                </div>
            </div>
            
            <br>
            <br>
            <br>
            <div class="row">
                <div class="col-md-4">
                    <div class="embed-responsive embed-responsive-16by9">
                        <!--<iframe class="embed-responsive-item" src="//www.youtube.com/embed/ePbKGoIGAXY"></iframe>-->
                        <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/2JZW0Epttx4" frameborder="0" allowfullscreen></iframe>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="embed-responsive embed-responsive-16by9">
                        <!--<iframe class="embed-responsive-item" src="//www.youtube.com/embed/ePbKGoIGAXY"></iframe>-->
                        <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/2JZW0Epttx4" frameborder="0" allowfullscreen></iframe>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="embed-responsive embed-responsive-16by9">
                        <!--<iframe class="embed-responsive-item" src="//www.youtube.com/embed/ePbKGoIGAXY"></iframe>-->
                        <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/2JZW0Epttx4" frameborder="0" allowfullscreen></iframe>
                    </div>
                </div>
            </div>
            <br>
            <br>
            <br>
        </div>
    </div>
    
    <script>
        this.mixin(SharedMixin);
        var self = this;
        
        self.on('mount', function(){
            console.log('Tag ON MOUNT: ', self.root.localName);
        });
    </script>
</blog_videos>

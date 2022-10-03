<blog_posting_modal>
    <div class="modal-dialog" id="createDialog">
        <div class="modal-content">
            
            <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal">&times;</button>
                <h4 class="modal-title">POST NEW TOPIC</h4>
            </div>
            
            <div class="modal-body">
                <div class="row">
                    <div class="col-md-12 col-sm-12 col-xs-12">
                        <h5>Title</h5>
                        <p><input class="form-control" id="title" type="text" required></p>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-12 col-sm-12 col-xs-12">
                        <h5>Details</h5> 
                        <div class="flex-container">
                            <div class="editor-icons">
                                <label for="file-input">
                                    <i class="fa fa-picture-o" aria-hidden="true"></i>
                                </label>
                                <input type="file" id="file-input" onchange="{previewFile}" style='display:none'> 
                            </div>
                            <div class="editor-icons">
                                <span onclick='{formatText}' id="format"><i class="fa fa-code" aria-hidden="true"></i></span>
                            </div>
                            <div class="editor-icons">
                                <span onclick="{formatText}" id="bold"><i class="fa fa-bold" aria-hidden="true"></i></span>
                            </div>
                            <div class="editor-icons">
                                <span onclick="{formatText}" id="italic"><i class="fa fa-italic" aria-hidden="true"></i></span>
                            </div>
                            <div class="editor-icons">
                                <span onclick="{formatText}" id="link"><i class="fa fa-link" aria-hidden="true"></i></span>
                            </div>
                            <div class="editor-icons">
                                <span onclick="{formatText2}" id="bullet"><i class="fa fa-list" aria-hidden="true"></i></span>
                            </div>
                        </div>


                        <textarea  class="form-control topicModal"
                            id="topicDetails" row="5" 
                            placeholder="Enter details" required
                            onmouseup="{saveSelection}"
                            onkeyup="{saveSelection}">
                        </textarea>
                        
                    </div>
                </div>
                <br>
                <div class="row" style="overflow-x:hidden;">
                    <div class="col-md-12">
                        <div><label>Select Category:</label></div>
                        <div>
                            <select  multiple="multiple" class="styled-select" id="category_select">
                                <option each="{item, i in data.categories}" value="{item.category}">{item.category}</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>
            <div class="modal-footer">
                <button type="button" data-dismiss="modal" class="btn btn-default">Close</button>
                <button type="button" class="btn btn-primary" data-dismiss="modal" onclick="{postTopic}">Submit</button>
            </div>
        </div>
    </div>

    <script>
        this.mixin(SharedMixin);
        var self = this;
        self.data = {};
        self.data.blogTopicsArr = [];
        self.data = {};
        self.data.categories = [];
        var savedRange,isInFocus;
        var isInFocus = false;
        
        
        self.on('mount', function(){
            console.log('self.root.localName ', self.root.localName);
        });
        
        previewFile(e) {
            if (window.File && window.FileReader && window.FileList && window.Blob) {
                console.log("File API supported.!");

                var file = document.getElementById(e.target.id).files[0];
                var fileSize = (e.target.files[0].size / 1024).toFixed(2);

                if (file && fileSize < 400) {
                    var reader = new FileReader();
                    
                    reader.onloadend = function(e){
                        var data = {
                            imageUrl: e.target.result,
                            imageName: file.name
                        };
                        
                        console.log('image data is ', data);
                        
                        $.ajax({
                            url: '/uploadImage',
                            type: 'POST',
                            data: data,
                            success: function success(res) {
                                console.log('image upload success!');
                                var imgTag = '<img src='+res+' layout="responsive" width="600" height="auto"/>';
                                var txtarea = document.getElementById('topicDetails');
                                var front = txtarea.value.substring(0, savedRange);
                                var back = txtarea.value.substring(savedRange, txtarea.value.length);
                                txtarea.value = front + imgTag + back;
                            },
                            error: function error(err) {
                                console.log('ERRORS: ' + err);
                            }
                        });
                    }

                    reader.readAsDataURL(file);
                } else {
                    alert('File size too large OR No file');
                }
            } else {
                console.log('The File APIs are not fully supported in this browser');
            }
        }

        var escape = document.createElement('textarea');
        function escapeHTML(html) {
            escape.textContent = html;
            return escape.innerHTML;
        }

        postTopic(e) {
            e.preventDefault();
            console.log('creating post...');
            
            if(self.title.value != null && self.title.value.length > 3 && self.topicDetails.value.length > 3){
                
                var blog_details = document.getElementById('topicDetails').value;
            
                var topic = {
                    "title": document.getElementById('title').value,
                    "details": (document.getElementById('topicDetails').value),
                    "username": DataMixin.getUsername(),
                    "postImageUrl": blog_details.indexOf('src') > 0 ? blog_details.match(/src=([^\s]+)/)[1]: "",
                    "url": escapeHTML(document.getElementById('title').value.toLowerCase().split(' ').join('-')),
                    "categories": DataMixin.getCheckedBoxes("category_select"),
                };

                $.ajax({
                    url: "/new_topic",
                    type: "POST",
                    data: JSON.stringify(topic),
                    contentType: "application/json",
                    success: function (res) {
                        console.log('post create success: ', res);
                        if (res === 'Authentication failed') {
                            riot.route("signup_popup");
                        } else if (typeof res !== "undefined") {
                            DataMixin.data.topics.unshift(res);
                            self.observable.trigger('post_created');
                            document.getElementById('title').value = '';
                            document.getElementById('topicDetails').value = '';
                            document.getElementById("file-input").value = '';
                        }
                    },
                    error: function (err) {
                        console.log('err>>>>', err);
                    }
                });
                $('#blog_posting_modal').modal('hide');
            } else {
                alert('Title and details required');
            }
        }
        
        
        //Code format for google blogger
        formatText(e){
            var newtxt, selectedText, textAreaVal = "";
            var textArea = document.getElementById('topicDetails');
            textAreaVal = textArea.value;
            if(textAreaVal.length>0) {
                selectedText = self.getSelectedText(textArea);
                if(e.target.parentElement.id == "format") {
                    newtxt = '<pre><code>'+wrapLines(selectedText)+'</code></pre>';
                } else if(e.target.parentElement.id == "bold") {
                    newtxt = '<strong>'+selectedText+'</strong>';
                } else if(e.target.parentElement.id == "italic") {
                    newtxt = '<i>'+selectedText+'</i>';
                } else if(e.target.parentElement.id == "link") {
                    newtxt = '<a href='+selectedText+' target="_blank">'+selectedText+'</a>';
                }
                else if(e.target.parentElement.id == "bullet") {
                    newtxt = '<li style="list-style-type: square !important;">'+selectedText+'</li>';
                }
                self.replaceIt(textArea, newtxt);
            }
        }
        
        
        //Code format for google blogger
        replaceIt(textArea, newtxt) {
            textArea.value = textArea.value.substring(0, textArea.selectionStart)
                    +newtxt+ 
            textArea.value.substring(textArea.selectionEnd);    
        }
        
        
        getSelectedText(textArea) {
            var text = "";
            var activeEl = textArea;
            var activeElTagName = activeEl ? activeEl.tagName.toLowerCase() : null;
            if (
              (activeElTagName == "textarea") || (activeElTagName == "input" &&
              /^(?:text|search|password|tel|url)$/i.test(activeEl.type)) &&
              (typeof activeEl.selectionStart == "number")
            ) {
                text = activeEl.value.slice(activeEl.selectionStart, activeEl.selectionEnd);
            } else if (window.getSelection) {
                text = window.getSelection().toString();
            }
            return text;
        }
        
        
        saveSelection(e){
           savedRange =  e.target.selectionStart;
        }

        self.observable.on('set_categories', function(categories) {
            categories.forEach(function(v, i) {
                console.log('v' , v);
                self.data.categories.push(v);
            })
            self.data.categories.unshift({category: 'Javascript'}, {category: 'NodeJs'}, {category: 'Jquery'}, {category: 'Quiz'}, {category: 'Git'}, {category: 'HTML'} ,{category: 'Latest Tech'}, {category: 'CSS'}, {category: 'Misc'});
            self.update();
        });
        
    </script>
    
    <style>

        option:hover {
            background-color: #1e90ff;
            color:white;
        }
        
        .styled-select {
            position: relative;
            /*background: url(http://i62.tinypic.com/15xvbd5.png) no-repeat 96% 0;*/
            width: 100%;
            z-index: 1;
        }

        .styled-select select {
            background: transparent;
            border: none;
            /*font-size: 14px;*/
            height: 29px;
            padding: 5px;  
            width: 268px;
        }

    </style>
</blog_posting_modal>

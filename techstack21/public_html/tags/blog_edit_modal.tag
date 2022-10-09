<blog_edit_modal>
    <!-- Modal -->
    <div class="modal-dialog" id="editDialog">
        <!-- Modal content-->
        <div class="modal-content">

            <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal">&times;</button>
                <h4 class="modal-title">EDIT TOPIC</h4>
            </div>

            <!-- Modal Body -->
            <div class="modal-body">
                
                <div class="row">
                    <div class="col-md-12 col-sm-12 col-xs-12">
                        <label>Title</label>
                        <p><input type="text" class="form-control" id="editTitle" 
                               placeholder="Title" name="editTitle" minlength="3" 
                               maxlength="250">
                        </p>
                    </div>
                </div>
                
                <div class="row">
                    <div class="col-md-12 col-sm-12 col-xs-12">
                        <h5>Details</h5> 
                        <div class="flex-container editor-bar">
                            <div class="editor-icons">
                                 <label for="file-input2">
                                    <i class="fa fa-picture-o" aria-hidden="true"></i>
                                </label>
                                <input type="file" id="file-input2" onchange="{previewFile2}" style='display:none'> 
                            </div>
                            <div class="editor-icons">
                                <span onclick='{formatText2}' id="format"><i class="fa fa-code" aria-hidden="true"></i></span>
                            </div>
                            <div class="editor-icons">
                                <span onclick="{formatText2}" id="bold"><i class="fa fa-bold" aria-hidden="true"></i></span>
                            </div>
                            <div class="editor-icons">
                                <span onclick="{formatText2}" id="italic"><i class="fa fa-italic" aria-hidden="true"></i></span>
                            </div>
                            <div class="editor-icons">
                                <span onclick="{formatText2}" id="link"><i class="fa fa-link" aria-hidden="true"></i></span>
                            </div>
                            <div class="editor-icons">
                                <span onclick="{formatText2}" id="bullet"><i class="fa fa-list" aria-hidden="true"></i></span>
                            </div>
                        </div>


                        <textarea  class="form-control topicModal"
                            id="editTopicDetails" row="5" required
                            onmouseup="{saveSelection}"
                            onkeyup="{saveSelection}" onblur="{saveSelection}">
                        </textarea>
                        
                    </div>
                </div>
                <br>

            </div>
            
            <div class="modal-footer" id="edit_form">
                <button type="button" data-dismiss="modal" class="btn btn-default">Close</button>
                <button type="button" class="btn btn-primary edit_submit" data-dismiss="modal" onclick="{updateTopic}">Submit</button>
                <button type="button" class="btn btn-primary fb_submit" data-dismiss="modal" onclick="{fbSharePostAsAdmin}">Share post to Facebook Page</button>
            </div>
        </div>
    </div>

    
    <script>
        this.mixin(SharedMixin);
        var self = this;

        var escape = document.createElement('textarea');

        escapeHTML(html) {
            escape.textContent = html;
            return escape.innerHTML;
        }

        updateTopic(e) {

            if(self.editTitle.value != null && self.editTitle.value.length > 3 && self.editTopicDetails.value.length > 3) {
                NProgress.start();
                var topic = {
                    "id" : e.target.id,
                    "title": self.editTitle.value,
                    "details": (self.editTopicDetails.value),
                    "url": escapeHTML(self.editTitle.value.toLowerCase().split(' ').join('-'))
                };

                $.ajax({
                    url: "/update_topic_by_topicId",
                    type: "POST",
                    data: JSON.stringify(topic),
                    contentType: "application/json",
                    success: function (article) {
                        console.log('is article uescaped ' , article);
                        DataMixin.data.topics.forEach(function(el) {
                            if(el._id === article._id) {
                                console.log('article going to be edited ', el);
                                el.title = article.title;
                                el.details = article.details;
                                el.url = article.url;
                            }
                        });
                        self.observable.trigger('post_edit');
                        document.getElementById('editTitle').value = '';
                        document.getElementById('editTopicDetails').value = '';
                        $('#blog_edit_modal').modal('hide');
                        NProgress.done();
                    },
                    error: function (err) {
                        console.log('Update failed: ', err);
                    }
                });
                $('#modal_edit_'+e.target.id).modal('hide');
            } else {
                alert('Title and details required');
            }
        }

        previewFile2(e) {
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
                                var txtarea = document.getElementById('editTopicDetails');
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
                    //                 $("#contactError").text("File size should not exceed 200 KB");
                    //                $("#contactError").show();
                    //                $("#contactError").fadeIn('fast').delay(2000).fadeOut('fast');
                }
            } else {
                console.log('The File APIs are not fully supported in this browser');
            }
        }
        
        //Code format for google blogger
        formatText2(e){
            var newtxt, selectedText, textAreaVal = "";
            var textArea = document.getElementById('editTopicDetails');
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
                } else if(e.target.parentElement.id == "bullet") {
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
            if ((activeElTagName == "textarea") || (activeElTagName == "input" &&
              /^(?:text|search|password|tel|url)$/i.test(activeEl.type)) &&
                (typeof activeEl.selectionStart == "number")) {
                text = activeEl.value.slice(activeEl.selectionStart, activeEl.selectionEnd);
            } else if (window.getSelection) {
                text = window.getSelection().toString();
            }
            return text;
        }

        saveSelection(e){
           savedRange =  e.target.selectionStart;
           //console.log('SAVED RANGE ', savedRange);
        }

        //Facebook Admin share
        fbSharePostAsAdmin(e) {
            
            if(self.editTitle.value != null && self.editTitle.value.length > 3 && self.editTopicDetails.value.length > 3) {
                NProgress.start();

                const finalTitle = $('#editTitle').val();
                var txt = $('#editTitle').val();
                var new_txt = txt.replace(txt, '*'+ txt +'*'+ '\n' + '\n' + $('#editTopicDetails').val());
                $('.topicModal').text(new_txt);

                var topic = {
                    "id" : e.target.id,
                    "title": $('#editTitle').val(),
                    "details": $('.topicModal').val(),
                    "url": "https://{DataMixin.api_url}/article/"+self.escapeHTML((finalTitle.toLowerCase().split(' ').join('-')))
                };

                console.log('topic obj ', topic);
                
                console.log('sharing posts as Admin...');
                FB.api('/'+DataMixin.data.fb_page_id+'/feed', 'post', {message: topic.details, link:topic.url, access_token: DataMixin.data.fb_page_access_token },
                function(res) { 
                    console.log("after posting to page: ", res) ;
                    $('.edit_submit').show();
                    $('.fb_submit').hide();
                    NProgress.done();
                });

                $('#modal_edit_'+e.target.id).modal('hide');

            } else {
                alert('Title and details required');
            }
        }
    </script>
    
    
    <style scoped>
        .custom_modal{
            background: white; margin-top: 2%; border-radius: 5px;
        }
        .text_area_Vresize{
            resize:vertical ;
        }
        #fb_submit {
            display: none;
        }
    </style>
</blog_edit_modal>

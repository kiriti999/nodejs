<logout_tag>

    <div id="container" if="{DataMixin.state=='logout'}">

        <div class="signupBox">
            <div class="">
                <h4>You are now signed out.</h4>
            </div>

            <div class="signup_subtite">
                <div>
                    You can <a href="/#!blog_topic_title">return to home page</a> or <a href="/#!signup_popup">sign in again</a>
                </div>
            </div>

        </div>

    </div>

    <style>
        #container {
            display: flex;           /* establish flex container */
            flex-direction: column;  /* make main axis vertical */
            justify-content: center; /* center items vertically, in this case */
            align-items: center;     /* center items horizontally, in this case */
            height: 300px;
        }

        .signup_subtite > *{
            font-size: 1em;
        }
    </style>

</logout_tag>


import React from 'react';
import './NewPost.scss'

function NewPost() {
    return (
        <div className="newpost col-12">
            <div className="newpost-content">
                <textarea  className="inputtext" type="textarea"  rows="10" cols="30" placeholder='Please enter your post...'>
                </textarea>
            </div>
            <div className="newpost-tabs ">
                <div className="newpost-tab">
                    text
            </div>
                <div className="newpost-tab">
                    image
            </div>
                <div className="newpost-tab">
                    voice
            </div>
                <div className="newpost-tab">
                    video
            </div>
            </div>
           

        </div>

    )
}

export default NewPost;
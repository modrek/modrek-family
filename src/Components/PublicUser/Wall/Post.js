import React from 'react';
import './Post.scss';

function Post(props) {
    let classname = "post col-12 " + props.type;

    let type = <div>{props.type}</div>;
    if (props.type == 'text') {
        type = <div></div>
    }
    return (
        <div className={classname}>
            <h3>{props.title}</h3>
            <p>{props.body}</p>
            {type}
        </div>

    )
}

export default Post;
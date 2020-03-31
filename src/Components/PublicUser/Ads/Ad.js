import React from 'react';
import './Ad.scss';

function Ad(props) {
    return (
        <div className="ad">            
            <h4 className="ad-header">{props.title}</h4>            
            <p>{props.body}</p>
        </div>
    )
}

export default Ad;
import React from 'react';
import Post from './Post'
import NewPost from './NewPost'
import './Posts.scss'

function Posts()
{
    let posts=[
        {title:'title1' , body:'body1......' , type:'text'},
        {title:'title2' , body:'body2......' , type:'voice'},
        {title:'title3' , body:'body3......' , type:'video'},
        {title:'title4' , body:'body4......' , type:'text'},
        {title:'title5' , body:'body5......' , type:'text'},
        {title:'title5' , body:'body5......' , type:'image'},
        {title:'title5' , body:'body5......' , type:'text'},
        {title:'title5' , body:'body5......' , type:'text'},
        {title:'title5' , body:'body5......' , type:'text'},
        {title:'title5' , body:'body5......' , type:'text'},
        {title:'title5' , body:'body5......' , type:'text'},
    ];
    return(
        <div className="posts col-12">         
          <NewPost ></NewPost>
       { posts.map((post,index)=>{
            return ( 
                <Post 
                key={index}
                title={post.title}
                body={post.body}
                type={post.type}
                ></Post>
            )
        })}
        
        </div>     

    )
}

export default Posts;
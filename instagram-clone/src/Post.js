import React from 'react';
import './Post.css';
import Avatar from "@material-ui/core/Avatar";

function Post({ username, caption, imageUrl }) {
    return (
        <div className="post">
            <div className="postHeader">
                <Avatar
                    className="postAvater"
                    alt="AmazingDaniel"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3mraBKttZKJPl7xkMBGmmiiC1o1dFREC_3g&usqp=CAU"
                />
                <h3>{username}</h3>
            </div>

            <img className="postImage" src={imageUrl} alt="" />

            <h4 className="postText"><strong>{username}</strong> {caption}</h4>
        </div>
    )
}

export default Post
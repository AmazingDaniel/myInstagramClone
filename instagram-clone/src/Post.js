import React from 'react';
import './Post.css';
import Avatar from "@material-ui/core/Avatar";

function Post() {
    return (
        <div className="post">
            <div className="postHeader">
                <Avatar
                    className="postAvater"
                    alt="AmazingDaniel"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3mraBKttZKJPl7xkMBGmmiiC1o1dFREC_3g&usqp=CAU"
                />
                <h3>Username</h3>
            </div>

            <img className="postImage" src="https://files.hiv.gov/s3fs-public/instagramlogoresized-1.jpg" />

            <h4 className="postText"><strong>AmazingDaniel</strong> Learning to Code</h4>
        </div>
    )
}

export default Post
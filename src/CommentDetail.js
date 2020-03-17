import React from 'react'

const CommentDetail = (props) => {
    return (
        <div class="comment">
        <a class="avatar">
            <img src={props.avatar}/>
        </a>
            <div class="content">
                <a class="author">{props.author}</a>
                <div class="metadata">
                    <div class="date">2 days ago</div>
                </div>
                <div class="text">
                    {props.message}
                </div>
            </div>
        </div>
    )
}

export default CommentDetail
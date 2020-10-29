import React from 'react'
import { useSelector } from 'react-redux'

const CommentList = () => {

    const comments = useSelector(state => state.comments)

    return (
        <div title="comment-list">
            {
                comments.map(i=><li>{i}</li>)
            }
        </div>
    )
}

export default CommentList

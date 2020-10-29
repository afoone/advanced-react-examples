import React, { useState } from 'react'

const CommentBox = () => {

    const [comment, setComment] = useState("")

    return (
        <div className="comment-box" title="comment-box">
                <textarea value={comment} onChange={e=>setComment(e.target.value)}></textarea>
                <button onClick={e=>setComment("")}></button>
        </div>
    )
}

export default CommentBox

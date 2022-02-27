import React from 'react'

export default function CommentComponent(props) {
    return (
        <>
            <div class="card border-light mb-3">
                <div class="card-body">
                    <h6>{props.username}</h6>
                    <p>{props.comment}</p>
                    <div>
                        {/* <img src="/img/clock.png" alt="clock" /> */}
                        <small> <strong className='text-muted bold'>Date: </strong> {props.date}</small>
                    </div>
                </div>
            </div>
        </>
    )
}

import React from 'react'

function ContainerComponent(props) {
    return (
        <>
            <div class="movie-list-item">
                <img class="movie-list-item-img" src={props.img} alt="" />
                <span class="movie-list-item-title">{props.title}</span>
                <a href={`${props.link}`} rel="noreferrer" target="_blank" class="movie-list-item-button">Watch</a>
            </div>
        </>
    )
}

export default ContainerComponent
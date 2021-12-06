import React from 'react'
import './_singleFollow.scss'
function follow(props) {
    return (
        <div className="follow">
            <div className="follow__block">
                <img src={props.src} alt="" className="channel__logo"/>
                <div className="follow__info">
                    <h3>{props.name}</h3>
                    <h4>@{props.hash}</h4>
                </div>
            </div>
            <button>Follow</button>
        </div>
    )
}

export default follow

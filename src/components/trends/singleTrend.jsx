import React from 'react'
import './_singleTrend.scss'

function Trend(props) {
    return (
        <div className="trend">
            <h3>Trending in World</h3>
            <h4>#{props.name}</h4>
            <h3>{props.number} Tweets</h3>
        </div>
    )
}

export default Trend

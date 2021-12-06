import React from 'react'
import Trend from './singleTrend'
import './_trendsBlock.scss'
import {FiSettings} from 'react-icons/fi'
function Trends() {
    return (
        <div className="trends">
            <div className="trends__headline">
                <h4>Trends for you</h4>
                <FiSettings style={{fontSize:"24px"}}/>
            </div>
            <div className="trends__block">
                <Trend name="Happy Thanksgiving" number="331,257"/>
                <Trend name="WIBKpopAwards" number="245,458"/>
                <Trend name="NiUnaMunos" number="95,287"/>
                <Trend name="WYSS_MV" number="31,879"/>
                <Trend name="Nonton JFW Di Lazlive" number="28,144"/>
        </div>
            
        </div>
    )
}

export default Trends

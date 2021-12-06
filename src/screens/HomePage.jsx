import React from 'react'
import ClickAway from '../components/clickaway/clickaway'
import Follows from '../components/followCard/followBlock'
import Post from '../components/postCard/post'
import ModalUnstyledDemo from '../components/shareCard/modal'
import Share from '../components/shareCard/share'
import Sidebar from '../components/sidebar/sidebar'
import Trends from '../components/trends/trendsBlock'
import './_HomePage.scss'

function Homepage() {
    return (
        <div className="homepage">
            <div className="homepage--left" ><Sidebar/></div>
            <div className="homepage--middle">
                <Share />
                {/* {
                    [...new Array(5)].map(()=>(
                        <Post /> 
                    ))
                } */}
            </div>
            <div className="homepage--right">
                
                <input type="text"  className="homepage__search" placeholder="Search Twitter"/>
                <Trends/>
                <Follows/>
                
            </div>
            <ClickAway/>

        </div>
    )
}

export default Homepage

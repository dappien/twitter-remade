import React from 'react'
import Follow from './singleFollow'
import './_followBlock.scss'

function Follows() {
    return (
        <div className="follows">
            <Follow name="GRΞGORY (Dapp University)" hash="DappUniversity" src="https://pbs.twimg.com/profile_images/1364341452420087810/q6h5ARDu_400x400.jpg"/>
            <Follow name="Nexo" hash="NexoFinance" src="https://pbs.twimg.com/profile_images/1331207721719312385/2wbZZu6q_400x400.png"/>
            <Follow name="Ethereum" hash="ethereum" src="https://pbs.twimg.com/profile_images/1084788308595617793/DOnqq1OM_400x400.jpg"/>
        </div>
    )
}

export default Follows

import React from 'react'
import './_sidebarOptions.scss'
function sidebarOptions(props) {
    return (
        <div className='sidebarOptions'>
            <div className='sidebarOptions__icon'>{props.icon}</div>
            {props.tag && 
            (<h2>{props.tag}</h2>) }
            
        </div>
    )
}

export default sidebarOptions

import React from 'react'
import SidebarOptions from './sidebarOptions'
import './_sidebar.scss'
import {BsTwitter,BsFillHouseDoorFill,BsBell,BsPerson} from 'react-icons/bs'
import {FaHashtag,FaRegEnvelope,FaRegBookmark,FaRegListAlt} from 'react-icons/fa'
import {CgMoreO} from 'react-icons/cg'

function Sidebar() {
    return (
        <div className='sidebar'>
            <SidebarOptions  icon={<BsTwitter size={24} color="#1DA1F2"/>}/>
            <SidebarOptions  icon={<BsFillHouseDoorFill size={24}/>} tag="Home" />
            <SidebarOptions  icon={<FaHashtag size={24}/>} tag="Explore" />
            <SidebarOptions  icon={<BsBell size={24}/>} tag="Notifications" />
            <SidebarOptions  icon={<FaRegEnvelope size={24}/>} tag="Messages" />
            <SidebarOptions  icon={<FaRegBookmark size={24}/>} tag="Bookmarks" />
            <SidebarOptions  icon={<FaRegListAlt size={24}/>} tag="Lists" />
            <SidebarOptions  icon={<BsPerson size={24}/>} tag="Profile" />
            <SidebarOptions  icon={<CgMoreO size={24}/>} tag="More" />
            <button type="">Tweet</button>
        </div>
    )
}

export default Sidebar


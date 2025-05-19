import React, { useState } from 'react'
import "./styles/Header.css"
import { IoMenu } from 'react-icons/io5'
import HeaderPopUp from './HeaderPopUp'

const Header = () => {
    const [openNav, setOpenNav] = useState(false)
    const openMenuNav = () => {
        setOpenNav(true)
    }
  return (
    <div className='header-main'>
        <div className='header-first-div'>
            <img src="data:image/png;base64,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" alt="" />
        </div>
        <div className='header-second-div'>
            <div className='service-div'>
                <p>Home</p>
                <p>About-us</p>
                <p>Contact-us</p>
                <p>Blog</p>
            </div>
            <div className='menu-icon-div'>
            <IoMenu onClick={openMenuNav}/>
            </div>
            <HeaderPopUp isOpen={openNav} onClose={()=>setOpenNav(false)}>
            </HeaderPopUp>
        </div>
    </div>
  )
}

export default Header
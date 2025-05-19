import React from 'react'
import './styles/headerpopup.css'

const HeaderPopUp = ({isOpen, onClose , children}) => {
    if(!isOpen) return null;
  return (
    <div className='HeaderPopUp-overlay'>
        <div className='HeaderPopUp-content'>
            <div className='HeaderPopUp-top'>
                <button onClick={onclose} style={{border: "none", cursor: "pointer", fontSize: "20px", background: "none", fontWeight: "600", color: "white"}}>X</button>
            </div>
            <div className='HeaderPopUp-btm'>
                <h3>Home</h3>
                <h3>About-us</h3>
                <h3>Contact-us</h3>
                <h3>Blog</h3>
            </div>
        </div>
    </div>
  )
}

export default HeaderPopUp
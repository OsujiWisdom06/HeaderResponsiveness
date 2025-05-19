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
        </div>
        {children}
    </div>
  )
}

export default HeaderPopUp
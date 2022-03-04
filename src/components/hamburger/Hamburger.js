import React from 'react'
import './hamburger.css';
const Hamburger = ({active,setActive}) => {
    return (
        <div className={active ? "bars active" :"bars"} onClick={() => setActive(!active)}>
            <span className="bar-top"></span>
            <span className="bar-middle"></span>
            <span className="bar-bottom"></span>
        </div>
    )
}

export default Hamburger
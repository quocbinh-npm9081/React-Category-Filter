import React from 'react'
import './button.css'
const Button = ({children,  filter, type, active}) => {
    return (
        <button className={`${active ? 'btn active' : 'btn'}`} onClick={()=>{filter(type)}}>
           <span>{  children }</span> 
        </button>
    )
}

export default Button

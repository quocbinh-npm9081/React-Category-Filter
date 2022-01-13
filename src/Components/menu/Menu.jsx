import React from 'react'

import './menu.css'

const Menu = ({menuItem}) => {

    return (
        <div className='items'>
            {
                menuItem.map((item)=> (
                     <div className="item-con" key={item.id}>
                        <div className="item-container">
                            <div className='img-container'>
                                <img src={item.image} alt="" />
                            </div>
                            <h2>{item.title}</h2>
                            <p>{item.description}</p>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default Menu

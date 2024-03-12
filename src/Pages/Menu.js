import React from 'react'
import MenuItem from "../Components/MenuItem";
import {MenuList} from "../helpers/MenuList";
import '../Styles/Menu.css';

function Menu() {
  return (
    <div className='menu'>
        <h1 className='menu-title'>
            Our Menu
        </h1>
        <div className='menuList'>
            {
                MenuList.map((menuItem,key)=>
                {
                    return(
                        <MenuItem key={key} name = {menuItem.name}
                          image = {menuItem.image} 
                          price = {menuItem.price}
                            
                        />
                    );
                })
            }
        </div>
      
    </div>
  )
}

export default Menu

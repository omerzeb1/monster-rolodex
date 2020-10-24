import React from 'react';
import './Search-box.style.css'

export const Searchbox =({placeholder,handleChange})=>{
  return  <input 
    className='search'
    type="search" 
    placeholder="Search Monsters" 
    onChange={handleChange
            //, () =>  console.log(this.state)
        }/>
}
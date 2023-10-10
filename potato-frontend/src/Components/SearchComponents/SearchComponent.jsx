import React from 'react'
import "./SearchComponent.css";
import Searchuser from './Searchuser';
const SearchComponent = () => {
  return (
    <div className='searchContainer'>
        <div className='px-3 pb-5'>
            <h1 className='text-xl pb-5'>Search</h1>
            <input className='searchInput' type="text" placeholder="search..."/>
        </div>
        <hr />
        <div className='px-3 pt-5'>
            {[1,1,1,1,1].map((item)=><Searchuser/>)}
        </div>
    </div>
  )
}

export default SearchComponent
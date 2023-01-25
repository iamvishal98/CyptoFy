import React from 'react';
import './Bitcards.css';
import {FiArrowUpRight,FiArrowDown} from 'react-icons/fi';

const Bitcards = ({name,image,current_price,price_change_percentage_24h}) => {
  return (
<div className="card">
    <div className="top">
        {image ? <img src={image} alt='' /> : 'null'}
    </div>
    <div>
        <h5>{name}</h5>
        <p>{current_price.toLocaleString()}</p>
    </div>
    {price_change_percentage_24h < 0 ?
    (<span className='red'>
        <FiArrowDown className="icon"/>
        {price_change_percentage_24h.toFixed(2)}%
    </span>) :
    (<span className='green'>
        <FiArrowUpRight className="icon"/>
        {price_change_percentage_24h.toFixed(2)}%
    </span>)}
</div>
  )
}

export default Bitcards
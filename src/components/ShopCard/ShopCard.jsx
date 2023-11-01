import React from 'react'

export const ShopCard = (props) => {
  const {item} = props;
  return (
    <>
    <div className='item cards_view'>
    <div className='item_name'>{item.name}</div>
    <div className='item_color'>{item.color}</div>
      <div className='imgContainer'><img className='image' src={item.img}></img></div>
      <p className='card_bottom'>
      <p className='item_price'>${item.price}</p>
      <button className='btn add'>Add To card</button>
      </p>
      
      
    </div>
  </>
  )
}

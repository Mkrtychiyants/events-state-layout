import React from 'react'

export const ShopItem = (props) => {
  const { item } = props
  return (
    <>
      <div className='item list_view'>
        <div className='imgContainer'><img className='image' src={item.img}></img></div>
        <div className='item_name'>{item.name}</div>
        <div className='item_color'>{item.color}</div>
        <div className='item_price'>${item.price}</div>
        <button className='btn add'>Add To card</button>
      </div>
    </>

  )
}

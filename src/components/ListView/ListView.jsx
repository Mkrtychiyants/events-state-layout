import React from 'react'
import { ShopItem } from '../ShopItem'

export const ListView = (props) => {
  const { items } = props
  console.log(items)
  return (
    <>
     <div className='itemsContainer list_view'>
      {items.map((prdct) => (
        < ShopItem key={prdct} item={prdct} />
      ))}
   </div>
    </>

  )
}

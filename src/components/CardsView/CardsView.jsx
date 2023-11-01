import React from 'react'
import {ShopCard} from '../ShopCard'

export const CardsView = (props) => {
  const { cards } = props
  return (
    <>
      <div className='itemsContainer cards_view'>
        {cards.map((prdct) => (
          < ShopCard key={prdct} item={prdct} />
        ))}
      </div>
    </>
  )
}

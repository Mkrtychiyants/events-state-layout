import React from 'react'
import { IconSwitch } from '../IconSwitch'
import { CardsView } from '../CardsView'
import { ListView } from '../ListView'
import { useState } from 'react'

export const Store = (props) => {
  const { products } = props
  const [storeView, changeStoreView] = useState(true);
  const handleViewChange = () => {
    changeStoreView(!storeView)
  }
  return (
    <>
      {storeView ? <IconSwitch icon={"view_list"} onSwitch={handleViewChange} /> : <IconSwitch icon={"view_module"} onSwitch={handleViewChange} />}
      {storeView ? <ListView items={products} /> : <CardsView cards={products} />}
    </>
  )
}

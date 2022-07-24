import React from 'react'
import Discount from '../Components/Discount/Discount'
import Events from '../Components/Events/Events'
import Price from '../Components/Price/Price'
import PriceLanding from '../Components/PriceLanding/PriceLanding'

const PricingPlan = () => {
  return (
    <>
      <PriceLanding />
      <Price />
      <Events />
      <Discount />
    </>
  )
}

export default PricingPlan
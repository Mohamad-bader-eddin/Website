import React from 'react'
import { Pricing, Title } from './PriceLanding.style'
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';

const PriceLanding = () => {
  return (
    <Pricing>
            <Title>
                <AttachMoneyIcon className='icon'/>
                <h1> Price </h1>
                <AttachMoneyIcon className='icon'/>
            </Title>
    </Pricing>
  )
}

export default PriceLanding
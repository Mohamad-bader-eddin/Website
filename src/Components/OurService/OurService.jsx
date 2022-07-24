import React from 'react'
import { A, Box, Container, H3, Info, Service } from './OurService.style'
import { DataService } from './DataService'

const OurService = () => {
  return (
    <Service>
        <Container>
            {
                DataService.map(service => <Box key={service.id}>
                    <img src={service.src} alt="" />
                    <H3>{service.name}</H3>
                    <Info>
                        <A to='/'>Details</A>
                    </Info>
                </Box>)
            }
        </Container>
    </Service>
  )
}

export default OurService
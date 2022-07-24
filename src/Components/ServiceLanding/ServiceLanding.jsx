import React from 'react'
import { Container, H1, Landing , Image } from './ServiceLanding.style'

const ServiceLanding = () => {
  return (
    <Landing>
        <Container>
            <H1>Service</H1>
            <Image src='/Images/landing-service.png'/>
        </Container>
    </Landing>
  )
}

export default ServiceLanding
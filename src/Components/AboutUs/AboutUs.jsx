import React from 'react'
import { About, Content, Image, Info } from './AboutUs.style'
import { Container } from '../../Style/Container' 

const AboutUs = () => {
  return (
    <About>
        <Container>
            <Content>
                <Image>
                    <img src="/Images/about-us.jpg" alt="" />
                </Image>
                <Info>
                    <h2>About Us</h2>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo magnam ea aut debitis, id cum alias officiis deserunt? Ab veritatis alias rerum consequatur eaque a totam voluptatibus velit optio impedit.</p>
                </Info>
            </Content>
        </Container>
    </About>
  )
}

export default AboutUs
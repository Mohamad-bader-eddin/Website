import React from 'react'
import MainTitle from '../MainTitle/MainTitle'
import { A, Box, Container, Feature, H2, ImageHolder, P } from './Features.style'

const Features = () => {
    return (
        <Feature>
            <MainTitle text='Features' />
            <Container>
                <Box>
                    <ImageHolder feature ='quality'><img src="/Images/features-01.jpg" alt="" /></ImageHolder>
                    <H2 feature ='quality'>Quality</H2>
                    <P>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit harum hic veniam eligendi minima</P>
                    <A to="/" feature ='quality'>More</A>
                </Box>
                <Box>
                    <ImageHolder feature ='time'><img src="/Images/features-02.jpg" alt="" /></ImageHolder>
                    <H2 feature ='time'>Time</H2>
                    <P>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit harum hic veniam eligendi minima</P>
                    <A to="/" feature ='time'>More</A>
                </Box>
                <Box>
                    <ImageHolder feature ='passion'><img src="/Images/features-03.jpg" alt="" /></ImageHolder>
                    <H2 feature ='passion'>Passion</H2>
                    <P>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit harum hic veniam eligendi minima</P>
                    <A to="/" feature ='passion'>More</A>
                </Box>
            </Container>
        </Feature>
    )
}

export default Features
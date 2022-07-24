import styled, { keyframes } from 'styled-components'
import { Container as styledContainer } from '../../Style/Container'
import { mainColor, sectionBackground } from '../../Style/rootVariable'
import { device } from '../../Style/device'


const up_down = keyframes `
    0%,
    100% {
        top: 0;
    }
    50% {
        top: -50px;
    }
`

export const Landing = styled.div `
    position: relative;
    background-color: ${sectionBackground};

    &::before{
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: #061a20;
    z-index: -1;
    transform: skewY(-6deg);
    transform-origin: top left;
    z-index: 1;
    }
`

export const Container = styled(styledContainer)
`
    min-height: 100vh;
    display: flex;
    align-items: center;
    padding-bottom: 120px;

    @media ${device.laptop}{
        text-align: center;
    }
`

export const H1 = styled.h1 `
    flex: 1;
    font-size: 60px;
    margin: 0;
    letter-spacing: -2px;
    z-index: 2;
    color: ${mainColor};
`

export const Image = styled.img `
    position: relative;
    width: 600px;
    z-index: 2;
    animation: ${up_down} 5s linear infinite;

    @media ${device.laptop}{
        display: none;
    }
`
import styled, { keyframes } from 'styled-components'
import { mainColor } from '../../Style/rootVariable'
import { device } from '../../Style/device'

const blink = keyframes `
    from {
        color: ${mainColor};
    }
    to{
        color: transparent;
    }
`

export const Pricing = styled.div `
    height: 50vh;
    background-color: #0f2335;
    position: relative;
`

export const Title = styled.div `
    position: absolute;
    top : 50%;
    left: 50%;
    transform: translate( -50% , -50%);
    color: ${mainColor};
    display: flex;
    justify-content: center;
    align-items: center;

    & h1{
        font-weight: bold;
        font-size: 60px;
        letter-spacing: -2px;
    }

    & .icon{
        font-size: 60px;
        animation: ${blink} 1.5s infinite;
    }


    @media ${device.tablet}{
        & h1{
            font-size: 40px;
            letter-spacing: 0;
        }

        & .icon{
            font-size: 40px;
        }
    }

    @media ${device.mobileL}{

        & h1{
            font-size: 25px;
        }

        & .icon{
            font-size: 25px;
        }
    }
`
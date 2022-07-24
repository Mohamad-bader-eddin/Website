import styled, { keyframes } from 'styled-components'
import { mainTransition } from '../../Style/rootVariable'
import { device } from '../../Style/device'

const left_move = keyframes `
     50% {
        left: 0;
        width: 12px;
        height: 12px;
    }
    100% {
        left: 0;
        border-radius: 0;
        width: 51%;
        height: 100%;
    }
`

const right_move = keyframes `
     50% {
        right: 0;
        width: 12px;
        height: 12px;
    }
    100% {
        right: 0;
        border-radius: 0;
        width: 51%;
        height: 100%;
    }
`

export const Title = styled.div `
    text-transform: uppercase;
    font-size: 30px;
    border: 1px solid black;
    margin: 0 auto 80px;
    padding: 10px 20px;
    width: fit-content;
    position: relative;
    z-index: 1;
    transition: ${mainTransition};

    &::before , &::after{
        content: '';
        width: 12px;
        height: 12px;
        position: absolute;
        border-radius: 50%;
        top: 50%;
        transform: translateY(-50%);
    }

    &::before{
        background-color: rgba(20, 159, 255, 1);
        left: -30px;
    }

    &::after{
        background-color: rgba(17, 122, 255, 1);
        right: -30px;
    }

    &:hover{
        color: white;
        border: 1px solid white;
        transition-delay: ${mainTransition};
    }

    &:hover::before{
        z-index: -1;
        animation: ${left_move} ${mainTransition} linear forwards;
    }

    &:hover::after{
        z-index: -1;
        animation: ${right_move} ${mainTransition} linear forwards;
    }

    @media ${device.mobileS}{
        font-size: 20px;
    }
`
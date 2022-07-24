import styled, { keyframes } from 'styled-components'
import { altColor, mainColor, mainTransition, sectionBackground } from '../../Style/rootVariable'
import { device } from '../../Style/device'

const changeBackground = keyframes `
    0%,
    100% {
        background-image: url('/Images/discount-background1.jpg');
    }
    50% {
        background-image: url('/Images/discount-background2.jpg');
    }
`

export const Discounts = styled.div `
    min-height: 100vh;
    display: flex;
    flex-wrap: wrap;
    background-color: ${sectionBackground};
`

export const Image = styled.div `
    background-image: url('/Images/discount-background1.jpg');
    background-size: cover;
    color: white;
    flex-basis: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    z-index: 1;
    animation: ${changeBackground} 10s linear infinite;

    &::before{
        content: '';
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        background-color: #06eaeae3;
        z-index: -1;
    }

    @media ${device.laptop}{
        flex-basis: 100%;
    }
`

export const ImageContent = styled.div `
    text-align: center;
    padding: 0 20px;

    & h2{
        font-size: 40px;
        letter-spacing: -2px;
    }

    & p{
        line-height: 1.6;
        font-size: 18px;
        max-width: 500px;
    }

    & img{
        width: 300px;
        max-width: 100%;
    }
`

export const Form = styled.div `
    display: flex;
    align-items: center;
    justify-content: center;
    flex-basis: 50%;

    & h2{
        font-size: 40px;
        letter-spacing: -2px;
    }

    @media ${device.mobileM}{
        & h2{
        font-size: 28px;
    }
    }

    & input ,& textarea{
        display: block;
        width: 100%;
        margin-bottom: 25px;
        padding: 15px;
        border: none;
        border-bottom: 1px solid #ccc;
        background-color: #f9f9f9;
        caret-color: ${mainColor};
    }

    & textarea{
        resize: none;
        height: 200px;
    }

    & input:focus ,& textarea:focus{
        outline: none;
    }

    & [type="submit"] {
    display: block;
    width: 100%;
    padding: 15px;
    background-color: ${mainColor};
    color: white;
    font-weight: bold;
    font-size: 20px;
    border: none;
    cursor: pointer;
    transition: ${mainTransition};
    }

    & [type="submit"]:hover{
        background-color: ${altColor};
    }

    @media ${device.laptop}{
        flex-basis: 100%;
    }
`

export const Invalid = styled.div `
    margin-top: -15px;
    margin-bottom: 10px;
    color: red;
`
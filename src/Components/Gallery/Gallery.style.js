import styled, { keyframes } from 'styled-components'
import { Container as styledContainer } from '../../Style/Container'
import { mainColor, mainPaddingBottom, mainPaddingTop, mainTransition, sectionBackground } from '../../Style/rootVariable'
import { device } from '../../Style/device'


const flashing = keyframes `
    0%,
    40% {
        opacity: 1;
    }
    100% {
        opacity: 0;
        width: 200%;
        height: 200%;
    }
`

export const Galleriys = styled.div `
    padding-top: ${mainPaddingTop};
    padding-bottom: ${mainPaddingBottom};
    position: relative;
    background-color: ${sectionBackground};
`

export const Container = styled(styledContainer)
`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 40px;

    @media ${device.mobileM}{
        grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    }
`

export const Box = styled.div `
    padding: 15px;
    background-color: white;
    box-shadow: 0px 12px 20px 0px rgb(0 0 0 / 13%), 0px 2px 4px 0px rgb(0 0 0 / 12%);
`

export const Image = styled.div `
    position: relative;
    overflow: hidden;

    &::before{
        content: '';
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background-color: rgb(255 255 255 / 20%);
        width: 0;
        height: 0;
        opacity: 0;
        z-index: 2;
    }

    &:hover::before{
        animation: ${flashing} 0.7s;
    }

    & img{
        max-width: 100%;
        transition: ${mainTransition};
    }

    &:hover img{
        transform: rotate(5deg) scale(1.1);
    }
`

export const PopupOverlay = styled.div `
    position: fixed;
    background-color: rgba(0, 0, 0, .7);
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    z-index: 1000;
`

export const PopupBox = styled.div `
    position: fixed;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    background-color: white;
    border: 1px solid #ccc;
    padding: 20px;
    z-index: 1001;

    & h3{
        font-weight: bold;
        text-align: center;
        margin: 0 0 20px;
        color: ${mainColor};
    }

    & img{
        max-width: 50vh;
    }

    @media ${device.mobileL}{
        & img{
            max-width: 40vh;
        }
    }

    @media ${device.mobileM}{
        & img{
            max-width: 30vh;
        }
    }
`

export const CloseButton = styled.div `
    position: absolute;
    top: -15px;
    right: -15px;
    background-color: ${mainColor};
    width: 40px;
    height: 40px;
    line-height: 40px;
    text-align: center;
    font-size: 20px;
    color: white;
    cursor: pointer;
    font-weight: bold;
    border-radius: 50%;
`
import styled from 'styled-components'
import { mainColor, mainPaddingBottom, mainPaddingTop, mainTransition } from '../../Style/rootVariable'
import { Container as styledContainer } from '../../Style/Container'
import { device } from '../../Style/device'

export const Stat = styled.div `
    padding-top: ${mainPaddingTop};
    padding-bottom: ${mainPaddingBottom};
    position: relative;
    background-image: url("/Images/stats.jpg");
    background-size: cover;
    min-height: 300px;

    &::before{
        content: '';
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        background-color: rgb(255 255 255 / 80%);
    }
`

export const Title = styled.h2 `
    font-weight: bold;
    font-size: 40px;
    width: fit-content;
    margin: 0 auto 50px;
    position: relative;

    @media ${device.mobileM}{
        font-size: 30px;
    }
`

export const Container = styled(styledContainer)
`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    gap: 20px;
`

export const Box = styled.div `
    background-color: white;
    padding: 30px 15px;
    text-align: center;
    position: relative;
    opacity: .8;
    transition: ${mainTransition};

    &::before , &::after{
        content: '';
        position: absolute;
        width: 2px;
        background-color: ${mainColor};
        transition: 1s;
        height: 0;
    }

    &::before{
        top: 0;
        right: 0;
    }

    &::after{
        left: 0;
        bottom: 0;
    }

    &:hover{
        opacity: 1;
    }

    &:hover::before , &:hover::after{
        height: 100%;
    }

    & .number{
        display: block;
        font-size: 50px;
        font-weight: bold;
        margin-top: 10px;
        margin-bottom: 10px;
    }

    & span:last-child{
        color: ${mainColor};
        font-style: italic;
        font-size: 20px;
        font-weight: bold;
    }
`
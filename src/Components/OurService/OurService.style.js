import styled from 'styled-components'
import { mainColor, mainPaddingBottom, mainPaddingTop, mainTransition, sectionBackground } from '../../Style/rootVariable'
import { Container as styledContainer } from '../../Style/Container'
import { Link } from 'react-router-dom'
import { device } from '../../Style/device'

export const Service = styled.div `
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
    background-color: white;
    box-shadow: 0 12px 20px 0 rgb(0 0 0 / 13%), 0 2px 4px 0 rgb(0 0 0 / 12%);
    transition: ${mainTransition};
    position: relative;
    text-align: center;

    &::before{
        content: "";
        left: 50%;
        transform: translateX(-50%);
        height: 3px;
        top: -3px;
        background-color:${mainColor};
        position: absolute;
        width: 0;
        transition: ${mainTransition};
    }

    &:hover{
        transform: translateY(-10px);
    }

    &:hover::before{
        width: 100%;
    }

    & img{
        width : 96px;
        margin-top: 10px;
    }
`

export const H3 = styled.h3 `
    margin: 20px 0 40px;
    font-size: 25px;
    position: relative;

    &::before{
        content: '';
        width: 40px;
        height: 4px;
        background-color: var(--main-color);
        position: absolute;
        left: 50%;
        margin-left: -20px;
        bottom: -22px;
    }
`

export const Info = styled.div `
    padding: 15px;
    position: relative;
    background-color: #f9f9f9;
    text-align: right;

    &::before{
        content: '';
        position: absolute;
        background-color: ${mainColor};
        left: 0;
        top: 0;
        height: 100%;
        width: 80px;
        padding-right: 15px;
    }

    &::after{
        content: '';
        position: absolute;
        background-color: #d5d5d5;
        top: 0;
        left: 80px;
        width: 50px;
        height: calc(100% + 0.4px);
        transform: skewX(-30deg);
    }
`

export const A = styled(Link)
`
    color: ${mainColor};
    font-weight: bold;
`
import styled from 'styled-components'
import { altColor, mainColor, mainPaddingBottom, mainPaddingTop, mainTransition, sectionBackground } from '../../Style/rootVariable'
import { Container as styledContainer } from '../../Style/Container'
import { Link } from 'react-router-dom'
import { device } from '../../Style/device'

export const Pricing = styled.div `
    padding-top: ${mainPaddingTop};
    padding-bottom: ${mainPaddingBottom};
    background-color: ${sectionBackground};
    position: relative;
`

export const Container = styled(styledContainer)
`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 30px;

    @media ${device.mobileM}{
        grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    }
`

export const Box = styled.div `
    position: relative;
    box-shadow: 0 12px 20px 0 rgb(0 0 0 / 13%), 0 2px 4px 0 rgb(0 0 0 / 12%);
    transition: ${mainTransition};
    background-color: white;
    text-align: center;
    z-index: 1;

    & img{
        width: 80px;
        margin-bottom: 30px;
    }

    &::before , &::after{
        content: '';
        width: 0;
        height: 50%;
        background-color: #f6f6f6;
        position: absolute;
        z-index: -1;
        transition: ${mainTransition};
    }

    &::before{
        left: 0;
        top: 0;
    }

    &::after{
        right: 0;
        bottom: 0;
    }

    &:hover::before , &:hover::after{
        width: 100%;
    }
`

export const Title = styled.div `
    font-weight: bold;
    margin: 30px 0;
    font-size: 25px;
    letter-spacing: -1px;
`

export const Prices = styled.div `
    margin-bottom: 20px;
`

export const Amount = styled.span `
    display: block;
    font-size: 60px;
    font-weight: bold;
    margin-bottom: 5px;
    color: ${mainColor};
`

export const Time = styled.span `
    color: #777;
`

export const List = styled.ul `
    text-align: left;
`

export const ListItem = styled.li `
    padding: 20px;
    border-top: 1px solid #eee;
`

export const A = styled(Link)
`
    display: block;
    width: fit-content;
    border: 2px solid ${mainColor};
    color: ${mainColor};
    margin: 30px auto 40px;
    padding: 15px 20px;
    border-radius: 6px;
    font-weight: bold;
    transition: ${mainTransition};

    &:hover{
        background-color: ${altColor};
        border-color: ${altColor};
        color: white;
    }
`

export const Label = styled.div `
    position: absolute;
    writing-mode: vertical-rl;
    background-color: ${mainColor};
    color: white;
    font-weight: bold;
    padding: 10px 10px 35px 10px;
    font-size: 18px;
    right: 20px;
    width: 40px;

    &::before{
        content: '';
        position: absolute;
        bottom: 0;
        right: 0;
        border-style: solid;
        border-color: transparent transparent white transparent;
        border-width: 20px;
    }
`
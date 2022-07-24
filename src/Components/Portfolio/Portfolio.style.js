import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { mainColor, mainPaddingBottom, mainPaddingTop, sectionBackground } from '../../Style/rootVariable'


export const Portfolioes = styled.div `
    padding-top: ${mainPaddingTop};
    padding-bottom: ${mainPaddingBottom};
    background-color: ${sectionBackground};
`

export const Shuffle = styled.ul `
    display: flex;
    justify-content: center;

    & li{
        padding: 10px;
        cursor: pointer;
    }

    & li.active{
        background-color: ${mainColor};
        color: white;
    }
`

export const ImgsContainer = styled.div `
    display: flex;
    flex-wrap: wrap;
    margin-top: 60px;
`

export const Box = styled.div `
    overflow: hidden;
    position: relative;

    & img{
        max-width: 100%;
        transition: 0.3s;
    }

    &:hover img{
        transform: rotate(3deg) scale(1.1);
    }

    @media (min-width : 767px){
        flex-basis: 50%;
    }
    @media (min-width : 1200px){
        flex-basis: 25%;
    }
`

export const Caption = styled.div `
    position: absolute;
    left: 0;
    padding: 5px 15px;
    background-color: white;
    width: 100%;
    transition: 0.3s;
    bottom: -100%;

    & h4{
        font-weight: normal;
        margin-bottom: 10px;
    }

    & p{
        color: ${mainColor};
    }

    ${Box}:hover &{
        bottom: 0;
    }
`

export const More = styled(Link)
`
    background-color: ${mainColor};
    color: white;
    padding: 15px 20px;
    display: block;
    width: fit-content;
    margin: 30px auto;
    text-decoration: none;
    text-transform: uppercase;
`
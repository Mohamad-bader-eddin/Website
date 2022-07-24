import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { mainColor, mainPaddingBottom, mainPaddingTop, mainTransition } from '../../Style/rootVariable'

export const Footers = styled.div `
    padding-top: ${mainPaddingTop};
    padding-bottom: ${mainPaddingBottom};
    background: linear-gradient(180deg , #2d2929 60% , #191919 100%);
    position: relative;
`

export const P = styled.div `
    text-transform: uppercase;
    padding: 20px;
    border-bottom: 1px solid white;
    font-size: 22px;
    width: fit-content;
    margin: 10px auto;
    color: white;
`

export const Social = styled.ul `
    display: flex;
    position: absolute;
    margin-bottom: 10px;
    left: 50%;
    transform: translateX(-50%);

    & li{
        margin-right: 10px;
        transition: ${mainTransition};

    }

    & .facebook:hover{
        background-color: #1877f2;
    }

    & .twitter:hover{
        background-color: #1da1f2;
    }

    & .youtube:hover{
        background-color: #ff0000;
    }
`

export const A = styled(Link)
`
    color: white;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    width: 50px;
    height: 50px;
    font-size: 20px;
`

export const Copyright = styled.p `
    padding: 25px 0;
    text-align: center;
    color: white;
    margin: 75px 0 0;
    border-top: 1px solid #444;
    font-size: 20px;

    & span{
        color: ${mainColor};
    }
`
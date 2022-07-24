import styled from 'styled-components'
import { mainColor, mainPaddingBottom, mainPaddingTop, sectionBackground } from '../../Style/rootVariable'
import { device } from '../../Style/device'

export const About = styled.div `
    padding-top: ${mainPaddingTop};
    padding-bottom: ${mainPaddingBottom};
    background-color: ${sectionBackground};
`

export const Content = styled.div `
    display: flex;

    @media ${device.tablet}{
        display: block;
        text-align: center;
    }
`

export const Image = styled.div `
    flex: 1;
    text-align: center;

    & img{
        width: 250px;
    }
`

export const Info = styled.div `
    flex: 1;
    padding: 30px;

    & h2{
        font-weight: bold;
        font-size: 30px;
        color: ${mainColor};
        margin: 0 0 10px;
    }

    & p{
        line-height: 1.8;
        color: #767676;
        margin: 0;
    }
`
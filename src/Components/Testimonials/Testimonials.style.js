import styled from 'styled-components'
import { mainPaddingBottom, mainPaddingTop, sectionBackground } from '../../Style/rootVariable'
import { Container as styledContainer } from '../../Style/Container'
import { device } from '../../Style/device'

export const Testimonial = styled.div `
    padding-top: ${mainPaddingTop};
    padding-bottom: ${mainPaddingBottom};
    position: relative;
    background-color: ${sectionBackground};
`

export const Container = styled(styledContainer)
`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 60px;

    @media ${device.mobileM} {
        grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    }
`

export const Box = styled.div `
    padding: 20px;
    background-color: white;
    box-shadow: 0 2px 4px rgb(0 0 0 / 7%);
    border-radius: 6px;
    position: relative;

    & img{
        position: absolute;
        right: -10px;
        top: -50px;
        width: 100px;
        height: 100px;
        border-radius: 50%;
        border: 10px solid ${sectionBackground};
    }

    & h3{
        margin: 0 0 10px;
    }

    & p{
        line-height: 1.5;
        color: #777;
        margin-top: 10px;
        margin-bottom: 0;
    }
`

export const JobPosition = styled.span `
    color: #777;
    margin-bottom: 10px;
    display: block;
`
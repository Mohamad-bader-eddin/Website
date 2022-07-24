import styled from 'styled-components'
import { Container as styledContainer } from '../../Style/Container'
import { mainColor, mainPaddingBottom, mainPaddingTop, mainTransition, sectionBackground } from '../../Style/rootVariable'
import { device } from '../../Style/device'

export const OurSkills = styled.div `
    padding-top: ${mainPaddingTop};
    padding-bottom: ${mainPaddingBottom};
    background-color: ${sectionBackground};
    position: relative;
`

export const Container = styled(styledContainer)
`
    display: flex;
    align-items: center;

    @media ${device.laptop}{
        & img{
            display: none;
        }
    }
`

export const SkillName = styled.h3 `
    display: flex;
    justify-content: space-between;
    align-items: center;

    & span{
        position: relative;
        font-size: 12px;
        border: 1px solid #ccc;
        padding: 3px 5px;
        border-radius: 4px;
        background-color: #0f0f0f;
        color: ${mainColor};
    }

    & span::before{
        content: '';
        position: absolute;
        border-style: solid;
        border-width: 8px;
        border-color: #0f0f0f transparent transparent transparent;
        right: 8px;
        bottom: -16px;
    }
`

export const Progress = styled.div `
    height: 30px;
    background-color: #ddd;
    position: relative;

    & span{
        position: absolute;
        left: 0;
        top: 0;
        height: 100%;
        background-color: ${mainColor};
        transition: width ${mainTransition} linear;
    }
`
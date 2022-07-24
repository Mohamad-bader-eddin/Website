import styled from 'styled-components'
import { mainPaddingBottom, mainPaddingTop, mainTransition, sectionBackground } from '../../Style/rootVariable'
import { Container as styledContainer } from '../../Style/Container'
import { device } from '../../Style/device'

export const WorkSteps = styled.div `
    padding-top: ${mainPaddingTop};
    padding-bottom: ${mainPaddingBottom};
    position: relative;
    background-color: ${sectionBackground};
`

export const Container = styled(styledContainer)
`
    display: flex;
    align-items: center;
    justify-content: space-between;

    & img{
        max-width: 100%;
        margin-right: 100px;
    }

    @media ${device.laptop}{
        & img{
            margin: 0 0 50px;
        }
    }

    @media ${device.laptop}{
        flex-direction: column;
    }
`

export const Box = styled.div `
    background-color: #f6f5f5;
    padding: 30px;
    margin-bottom: 20px;
    border-radius: 6px;
    display: flex;
    align-items: center;
    border: 2px solid white;
    position: relative;
    z-index: 1;
    transition: ${mainTransition};

    &::before{
        content: '';
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        width: 0;
        height: 0;
        background-color: #ededed;
        z-index: -1;
    }

    &:hover::before{
        width: 100%;
        height: 100%;
    }

    @media ${device.tablet}{
        flex-direction: column;
        text-align: center;
    }

    & img{
        width: 64px;
        margin-right: 30px;
    }

    @media ${device.tablet}{
        & img{
            margin: 0 0 30px;
        }
    }

    & h3{
        margin: 0;
        font-size: 22px;
    }

    & p{
        color: #777;
        line-height: 1.7;
        margin: 10px 0 0;
        font-size: 18px;
    }
`
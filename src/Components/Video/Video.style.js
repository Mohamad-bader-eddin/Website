import styled from 'styled-components'
import { altColor, mainTransition } from '../../Style/rootVariable'
import { device } from '../../Style/device'

export const Videos = styled.div `
    position: relative;
    transition: ${mainTransition};

    &::before{
        content: '';
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.6);
    }

    & video{
        width: 100%;
    }
`

export const Text = styled.div `
    position: absolute;
    width: 100%;
    top: 50%;
    transform: translateY(-50%);
    padding: 50px;
    background-color: ${altColor};
    color: white;
    text-align: center;

    & h2{
        margin: 0 0 30px;
        text-transform: uppercase;
        font-weight: normal;
    }

    & p{
        margin-bottom: 30px;
    }

    & button{
        background-color: black;
        color: white;
        padding: 10px 20px;
        border: none;
        text-transform: uppercase;
        cursor: pointer;
    }

    @media ${device.mobileL}{
        padding: 15px;

        & h2{
            margin: 0;
            font-size: 12px;
        }

        & p{
            margin-bottom: 5px;
            font-size: 10px;
        }

        & button{
            padding: 5px 10px;
            font-size: 8px;
        }
    }
`
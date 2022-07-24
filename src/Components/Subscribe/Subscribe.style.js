import styled from 'styled-components'
import { mainColor, mainPaddingBottom, mainPaddingTop } from '../../Style/rootVariable'
import { Container as styledContainer } from '../../Style/Container'
import { device } from '../../Style/device'

export const Subscribes = styled.div `
    padding-top: ${mainPaddingTop};
    padding-bottom: ${mainPaddingBottom};
    background-image: url("/Images/subscribe.jpg");
    background-size: cover;
    position: relative;
    color: white;

    &::before{
        content: "";
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.5);
    }
`

export const Container = styled(styledContainer)
`
    position: relative;
    display: flex;
    align-items: center;

    @media ${device.laptop} {
        flex-direction: column;
    }
`

export const Form = styled.form `
    display: flex;
    position: relative;
    width: 500px;
    max-width: 100%;

    & .icon{
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: 25px;
    }

    & input{
        border: 1px solid white;
        border-right: none;
        background: none;
        color: white;
        padding: 20px 20px 20px 60px;
        caret-color: ${mainColor};
        width: calc(100% - 130px);
    }

    & input:focus{
        outline: none;
    }

    & ::placeholder{
        color: white;
    }

    & button{
        width: 130px;
        background-color: var(--main-color);
        color: white;
        padding: 10px 20px;
        border: 1px solid white;
        border-left: none;
        text-transform: uppercase;
    }

    @media ${device.mobileL}{
        & input{
            width: calc(100% - 80px);
        }

        & button{
            width: 80px;
            padding: 10px 2px;
        }
    }
`

export const P = styled.p `
    line-height: 2;
    margin-left: 50px;

    @media ${device.laptop}{
        margin: 30px 0 0;
    }
`

export const Invalid = styled.div `
    position: absolute;
    bottom: -30px;
    color: red;
`
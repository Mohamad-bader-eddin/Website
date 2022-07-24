import styled from 'styled-components'
import { altColor, mainColor, mainPaddingBottom, mainPaddingTop, mainTransition } from '../../Style/rootVariable'
import { Container as styledContainer } from '../../Style/Container'
import { device } from '../../Style/device'

export const Event = styled.div `
    padding-top: ${mainPaddingTop};
    padding-bottom: ${mainPaddingBottom};
    position: relative;
`

export const Container = styled(styledContainer)
`
    display: flex;
    align-items: center;
    flex-wrap: wrap;

    & img{
        width: 450px;
    }

    @media ${device.laptop}{
        & img{
            display: none;
        }
    }
`

export const Info = styled.div `
    flex: 1;
`

export const Time = styled.div `
    display: flex;
    align-items: center;
    margin: 20px auto;
    gap: 10px;
    justify-content: center;

    @media ${device.mobileM}{
        flex-direction: column;
    }
`

export const Unit = styled.div `
    border: 1px solid #d4d4d4;
    border-radius: 6px;
    text-align: center;
    width: 75px;
    transition: ${mainTransition};

    & span{
        display: block;
        transition: ${mainTransition};
    }

    & span:first-child{
        font-size: 35px;
        padding: 15px 10px;
        color: ${mainColor};
        font-weight: bold;
    }

    & span:last-child{
        padding: 8px 10px;
        font-size: 13px;
        border-top: 1px solid #d4d4d4;
    }

    &:hover , &:hover span:last-child{
        border-color : ${mainColor}
    }
`

export const Title = styled.h2 `
    text-align: center;
    margin: 40px 0 0;
    font-size: 30px;
`

export const Description = styled.p `
    text-align: center;
    line-height: 1.7;
    font-size: 19px;
    color: #777;
`

export const Subscribe = styled.div `
    width: 100%;
    margin-top: 50px;
`

export const Form = styled.form `
    width: 600px;
    margin: 20px auto;
    padding: 30px 40px;
    background-color: #f6f5f5;
    border-radius: 50px;
    display: flex;
    gap: 20px;
    position: relative;

    & input[type='email']{
        padding: 20px;
        border-radius: 50px;
        border: none;
        flex: 1;
        caret-color: ${mainColor};
    }

    & input[type='email']:focus{
        outline: none;
    }

    & input[type='email']::placeholder{
        transition: opacity ${mainTransition};
    }

    & input[type='email']:focus::placeholder{
        opacity: 0;
    }

    & button{
        border-radius: 50px;
        border: none;
        background-color: ${mainColor};
        color: white;
        font-weight: bold;
        padding: 20px;
        cursor: pointer;
        transition: ${mainTransition};
    }

    & button:hover{
        background-color: ${altColor};
    }

    @media ${device.tablet}{
        width: 100%;
        padding: 20px;
        flex-direction: column;
        border-radius: 0;

        & input[type='email'] , & button{
            border-radius: 0;
        }
    }
`

export const Invalid = styled.div `
    position: absolute;
    bottom: 5px;
    color: red;
`

export const Dots = styled.div `
    background-image: url('/Images/dots.png');
    height: 186px;
    width: 204px;
    background-repeat: no-repeat;
    position: absolute;

    &.dots-up {
        top: 150px;
        right: 0;
    }

    &.dots-down {
        bottom: 150px;
        left: 0;
    }

    @media ${device.laptopL}{
        display: none;
    }
`
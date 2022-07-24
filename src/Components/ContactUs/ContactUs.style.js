import styled from 'styled-components'
import { mainColor, mainPaddingBottom, mainPaddingTop } from '../../Style/rootVariable'
import { Container as styledContainer } from '../../Style/Container'
import { device } from '../../Style/device'

export const Contact = styled.div `
    height: 100vh;
    background-image: url('/Images/contact.jpg');
    background-size: cover;
    padding-top: ${mainPaddingTop};
    padding-bottom: ${mainPaddingBottom};
    position: relative;

    &::before{
        content: '';
        position: absolute;
        width: 100%;
        height: 100%;
        left: 0;
        top: 0;
        background-color: rgba(0,0,0,0.7);
    }
`


export const Container = styled(styledContainer)
`
    position: relative;
    z-index: 1;
`

export const H2 = styled.h2 `
    font-weight: bold;
    font-size: 30px;
    color: ${mainColor};
    margin: 60px 0;
    text-align: center;

    @media ${device.tablet}{
        margin: 30px 0;
    }
`

export const Form = styled.form `
    max-width: 800px;
    margin: auto;

    & .left{
        float: left;
        width: 49%;
    }

    & .right{
        float: right;
        width: 49%;
    }

    & input:not([type='submit']), & textarea{
        display: block;
        width: 100%;
        padding: 10px;
        margin-bottom: 15px;
        border: 1px solid #ccc;
        background-color: rgba(218, 218, 218, 0.5);
    }

    & input:not([type='submit']):focus,
    & textarea:focus {
        outline: 1px solid ${mainColor};
    }

    & input{
        height: 40px;
    }

    & textarea{
        height: 150px;
    }

    & input[type='submit'] {
        padding: 10px;
        width: 100%;
        border-color: transparent;
        background-color: ${mainColor};
        color: white;
        cursor: pointer;
    }

    & textarea::placeholder,
    & input:not([type='submit'])::placeholder {
        transition: .3s;
        color: white;
    }

    & textarea:focus::placeholder,
    & input:not([type='submit']):focus::placeholder {
        opacity: 0;
    }

    @media ${device.tablet}{
        & .left , & .right{
            float: none;
            width: 100%;
        }
    }
`

export const Invalid = styled.div `
    margin-top: -15px;
    margin-bottom: 10px;
    color: red;
`
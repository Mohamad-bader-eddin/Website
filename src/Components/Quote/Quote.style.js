import styled from 'styled-components'
import { Container as styleContainer } from '../../Style/Container'
import { mainPaddingBottom, mainPaddingTop } from '../../Style/rootVariable'

export const Quotes = styled.div `
    padding-top: ${mainPaddingTop};
    padding-bottom: ${mainPaddingBottom};
    position: relative;
    text-align: center;
    color: white;
    background-image: url('/Images/quote.jpg');
    background-size: cover;


    &::before{
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0 , 0 , 0 , .7);
    }
`

export const Container = styled(styleContainer)
`
    position: relative;

    & q{
        font-size: 30px;
        margin-bottom: 20px;
        display: block;
    }
`
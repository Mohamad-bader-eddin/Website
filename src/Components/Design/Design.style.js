import styled from 'styled-components'
import { altColor, mainPaddingBottom, mainPaddingTop } from '../../Style/rootVariable'
import { device } from '../../Style/device'

export const DesignDiv = styled.div `
    padding-top: ${mainPaddingTop};
    padding-bottom: ${mainPaddingBottom};
    height: 600px;
    position: relative;
    background-image: url('/Images/design-features.jpg');
    background-size: cover;
    display: flex;
    align-items: center;
    overflow: hidden;

    &::before{
        content: '';
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.6);
    }
`

export const Image = styled.div `
    position: relative;
    z-index: 2;
    flex: 1;
    text-align: center;

    & img{
        position: relative;
        bottom: -150px
    }

    @media ${device.tablet} {
        display: none;
    }
`

export const Text = styled.div `
    position: relative;
    z-index: 2;
    flex: 1;
    color: white;
    padding: 50px;
    background-color: ${altColor};

    & h2{
        font-weight: normal;
        text-transform: uppercase;
        margin-bottom: 40px;
    }

    & li{
        padding: 15px 0;
    }

    & .icon{
        position: relative;
        margin-right: 20px;
        top: 6px;
    }
`
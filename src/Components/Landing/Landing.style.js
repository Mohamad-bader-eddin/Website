import styled from 'styled-components'
import { device } from '../../Style/device'
import { altColor, mainColor } from '../../Style/rootVariable'

export const LandingDiv = styled.div `
    min-height: 100vh;
    background-color: #1f2021;
    background-image: url('/public/Images/landing01.jpg');
    background-size: cover;
    position: relative;
    transition: .6s;
`

export const Overlay = styled.div `
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    width: 100%;
    background-color: rgba(0, 0, 0 , 0.6);
`

export const Text = styled.div `
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    padding: 20px;
    width: 50%;
    color: white;
    display: flex;
    justify-content: flex-end;
    background-color: ${altColor};

    @media ${device.tablet} {
        width: 100%;
    }
`

export const Content = styled.div `
    max-width: 500px;

    @media ${device.tablet} {
        max-width: 100%;
    }
`

export const ContentH2 = styled.h2 `
    font-size: 30px;
    line-height: 1.5;
    margin-bottom: 20px;
`

export const ContentSpan = styled.span `
    color: ${mainColor};
`

export const ContentP = styled.p `
    font-size: 14px;
    line-height: 1.7;
`
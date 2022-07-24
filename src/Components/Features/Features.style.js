import styled from "styled-components";
import {
    mainPaddingBottom,
    mainPaddingTop,
    mainTransition,
    sectionBackground,
} from "../../Style/rootVariable";
import { Container as StyleContainer } from "../../Style/Container";
import { Link } from "react-router-dom";
import { device } from "../../Style/device";

export const Feature = styled.div `
    padding-top: ${mainPaddingTop};
    padding-bottom: ${mainPaddingBottom};
    position: relative;
    background-color: ${sectionBackground};
`;

export const Container = styled(StyleContainer)
`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 40px;

    @media ${device.mobileS}{
        grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    }
`;

export const Box = styled.div `
    box-shadow: 0 2px 15px rgb(0 0 0 / 30%);
    text-align: center;
    border: 1px solid #ccc;
    background-color: white;
`

export const ImageHolder = styled.div `
    position: relative;
    overflow: hidden;

    & img {
        max-width: 100%;
    }
    &::before {
        content: "";
        position: absolute;
        top: -1px;
        left: 0;
        width: 100%;
        height: 100%;
        background-color : ${props => props.feature === 'quality' ? 'rgb(244 64 54 /20%)'
        : props.feature === 'time' ? 'rgb(0 150 136 / 20%)' 
        : props.feature === 'passion' ? 'rgb(3 169 244 / 20%)' : null};
    }
    &::after {
        content: "";
        position: absolute;
        bottom: 0;
        right: 0;
        border-style: solid;
        border-width: 0px 0px 170px 500px;
        border-color: transparent transparent white transparent;
        transition: ${mainTransition};
    }

    ${Box}:hover &::after {
        border-width: 170px 500px 170px 0px;
    }
`;

export const H2 = styled.h2 `
    position: relative;
    font-size: 40px;
    margin: auto;
    width: fit-content;

    &::after{
        content: '';
        position: absolute;
        bottom: -20px;
        left: 15px;
        height: 5px;
        width: calc(100% - 30px);
        background-color : ${props => props.feature === 'quality' ? '#f44036'
        : props.feature === 'time' ? '#009688' 
        : props.feature === 'passion' ? '#03a9f4' : null};
    }
`

export const P = styled.p `
    line-height: 2;
    font-size: 20px;
    margin: 30px 0;
    padding: 25px;
    color: #777;
`

export const A = styled(Link)
`
    display: block;
    border: 3px solid transparent;
    width: fit-content;
    margin: 0 auto 30px;
    font-weight: bold;
    font-size: 22px;
    padding: 10px 30px;
    border-radius: 6px;
    transition: ${mainTransition};
    color: ${props => props.feature === 'quality' ? '#f44036'
        : props.feature === 'time' ? '#009688' 
        : props.feature === 'passion' ? '#03a9f4' : null};
    border-color: ${props => props.feature === 'quality' ? '#f44036'
        : props.feature === 'time' ? '#009688' 
        : props.feature === 'passion' ? '#03a9f4' : null};
    background: linear-gradient(to right, ${props => props.feature === 'quality' ? '#f44036'
        : props.feature === 'time' ? '#009688' 
        : props.feature === 'passion' ? '#03a9f4' : null} 50%, white 50%);
    background-size: 200% 100%;
    background-position: right bottom;

    ${Box}:hover &{
        background-position: left bottom;
        color: white;
    }
`
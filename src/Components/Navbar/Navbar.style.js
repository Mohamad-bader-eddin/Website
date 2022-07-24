import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import { Container as StyleContainer } from '../../Style/Container'
import { mainColor, mainTransition } from '../../Style/rootVariable'
import { device } from '../../Style/device'

export const Header = styled.header `
    position: absolute;
    width: 100%;
    z-index: 2;
    left: 0;
`

export const Container = styled(StyleContainer)
`
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
    min-height: 101px;

    &::after{
        content: '';
        position: absolute;
        bottom: 0;
        height: 1px;
        background-color: white;
        width: calc(100% - 30px);
        left: 15px;
    }
`

export const Logo = styled(NavLink)
`
    color: white;
    font-size: 40px;

    &:hover{
        color: ${mainColor};
    }

    @media ${device.tablet} {
        font-size: 30px;
    }
`

export const Nav = styled.nav `
    display: flex;
    justify-content: flex-end;
    align-items: center;
    flex: 1;
`

export const Links = styled.ul `
    display: flex;

    @media ${device.tablet}{
        display: ${(props) => props.clicked === 'clicked' ? 'flex' : 'none'};
        flex-direction: column;
        position: absolute;
        top: 100%;
        left: 0;
        width: 100%;
        text-align: center;
        background-color: rgba(0, 0 , 0 , 0.7);
    }
`

export const LinkItem = styled(NavLink)
`
    padding: 40px 10px;
    display: block;
    color: white;
    font-size: 18px;
    position: relative;
    z-index: 2;
    transition: ${mainTransition};

    &:hover , &.active{
        color: ${mainColor};
        border-bottom: 1px solid ${mainColor};
    }

    @media ${device.tablet} {
        &:hover{
            padding-left: 30px;
        }
    }
`

export const ToggleMenu = styled.span `
    display: none;
    color: white;
    font-size: 30px;

    @media ${device.tablet} {
        display: block;
        
        &:hover{
            color: ${mainColor};
        }
    }
`
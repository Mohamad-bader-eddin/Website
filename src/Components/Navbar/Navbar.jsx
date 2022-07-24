import React , {useState} from 'react'
import AutoAwesomeMosaicIcon from '@mui/icons-material/AutoAwesomeMosaic';
import MenuIcon from '@mui/icons-material/Menu';
import { Container, Header, LinkItem, Links, Logo, Nav, ToggleMenu } from './Navbar.style'

function Navbar() {
    const [click , setClick] = useState(false)

    const handleClick = () => setClick(!click)
    return (
        <Header>
            <Container>
                <Logo to='/'>
                    <AutoAwesomeMosaicIcon fontSize='inherit'/>
                </Logo>
                <Nav>
                    <ToggleMenu onClick={handleClick}><MenuIcon fontSize='inherit'/></ToggleMenu>
                    <Links clicked={click ? 'clicked' : ""}>
                        <li><LinkItem to='/'>Home</LinkItem></li>
                        <li><LinkItem to='/services'>Services</LinkItem></li>
                        <li><LinkItem to='/pricing'>Pricing Plans</LinkItem></li>
                        <li><LinkItem to='/contact'>Contact</LinkItem></li>
                    </Links>
                </Nav>
            </Container>
        </Header>
    )
}

export default Navbar